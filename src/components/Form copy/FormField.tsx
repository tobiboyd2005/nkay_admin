import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Label } from "@radix-ui/react-label";

import { FormProps } from "../../../types";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Prop = FormProps & { type: string; id: string; placeholder: string };

type InputProps = {
  name: string;
  label?: string;
  className?: string;
  type: string;
  id: string;
  placeholder?: string;
};

const FormField: React.FC<InputProps> = ({
  name,
  type,
  label,
  id,
  placeholder,
  className,
}) => {
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
          <Label htmlFor={name}>{label}</Label>
          <Input
            // className={className}
            className={cn(className, {
              "border border-red-600": !!errors[name]?.message?.toString(),
            })}
            placeholder={placeholder}
            type={type}
            id={id}
            // {...InputProps}
            // {...field}
            // errorMessage={errors[name]?.message?.toString() || ""}
            // isInvalid={!!errors[name]?.message}
            value={value}
            onChange={onChange}
          />
          <p className="text-red-600">
            {errors[name]?.message?.toString() || ""}
          </p>
        </div>
      )}
    />
  );
};

export default FormField;
