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
  displayKey?: string;
  valueKey?: string;
};

const FormSelect = ({
  name,
  type,
  label,
  id,
  placeholder,
  className,
  options,
  displayKey = "name",
  valueKey = "id",
}: SelectProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const getItemKey = (item: any) => {
    if (typeof item === "string") {
      return item;
    } else {
      return item[valueKey];
    }
  };

  const getItemValue = (item: any) => {
    if (typeof item === "string") {
      return item;
    } else {
      return item[displayKey];
    }
  };

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
                const value =
                  typeof option === "object" && option !== null
                    ? option.id
                    : option;
                const optionName =
                  typeof option === "object" && option !== null
                    ? option.name
                    : option;

                return (
                  <SelectItem key={index} value={value}>
                    {optionName}
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

export default FormSelect;
