import { CalendarIcon } from "@radix-ui/react-icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
// import classNames from "react-day-picker/style.module.css";
import { DayPicker } from "react-day-picker";
import { Controller, useFormContext } from "react-hook-form";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
type Props = {
  name: string;
  label?: string;
  className?: string;
  // type: string;
  // id: string;
  placeholder?: string;
};

export const MyDatePicker = ({
  name,
  // type,
  label,
  // id,
  placeholder,
  className,
}: Props) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <div className="flex flex-col gap-2">
          <p>{label}</p>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className={cn(
                  "text-left font-normal",
                  value && "text-muted-foreground",
                )}
                variant={"outline"}
              >
                {value ? format(value, "PPP") : <span>Pick a date</span>}
                <CalendarIcon className="ml-auto opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="w-full border-[0.1px] bg-white p-4"
            >
              <DayPicker
                captionLayout="dropdown"
                endMonth={new Date(2025, 9)}
                mode="single"
                selected={value}
                startMonth={new Date(2015, 6)}
                onSelect={onChange}
              />
            </PopoverContent>
          </Popover>
          <p className="text-red-600">
            {errors[name]?.message?.toString() || ""}
          </p>
        </div>
      )}
    />
  );
};
