import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SelectProps = {
  name: string;
  label?: string;
  className?: string;
  type?: string;
  id: string;
  placeholder?: string;
  options?: any;
};

const FormSelectWithIndex = ({
  name,
  type,
  label,
  id,
  placeholder,
  className,
  options,
}: SelectProps) => {
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
          <Select defaultValue={value} onValueChange={onChange}>
            <SelectTrigger className="">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options?.map((option: any, index: any) => {
                return (
                  <SelectItem key={index} value={index}>
                    {option}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
          <p className="text-red-600">
            {errors[name]?.message?.toString() || ""}
          </p>
        </div>
      )}
    />
  );
};

export default FormSelectWithIndex;
