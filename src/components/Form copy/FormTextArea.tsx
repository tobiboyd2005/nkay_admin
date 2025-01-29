import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Label } from "@radix-ui/react-label";

import { FormProps } from "../../../types";

import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

type Prop = FormProps & { type: string; id: string; placeholder: string };

type InputProps = {
  name: string;
  label?: string;
  className?: string;
  id: string;
  placeholder?: string;
};

const FormTextarea: React.FC<InputProps> = ({
  name,
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
          <Textarea
            // className={className}
            className={cn(
              { className },
              {
                "border border-red-600": !!errors[name]?.message?.toString(),
              },
            )}
            placeholder={placeholder}
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

export default FormTextarea;
