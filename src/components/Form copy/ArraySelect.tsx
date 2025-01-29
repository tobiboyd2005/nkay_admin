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
  id: string;
  placeholder?: string;
  options?: { id: string; name: string }[];
  displayKey?: string;
  valueKey?: string;
  isMulti?: boolean;
};

const ArraySelect = ({
  displayKey = "name",
  valueKey = "id",
  name,
  label,
  id,
  placeholder,
  className,
  options,
  isMulti = false,
}: SelectProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const getItemKey = (item: { [key: string]: any }) => item[valueKey];
  const getItemValue = (item: { [key: string]: any }) => item[displayKey];

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <div className={`flex flex-col gap-2 ${className}`}>
          {label && <p>{label}</p>}
          <Select
            value={isMulti ? value.join(",") : value}
            onValueChange={(val) => {
              if (isMulti) {
                onChange(val.split(","));
              } else {
                onChange(val);
              }
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options?.map((item) => (
                <SelectItem key={getItemKey(item)} value={getItemKey(item)}>
                  {getItemValue(item)}
                </SelectItem>
              ))}
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

export default ArraySelect;
