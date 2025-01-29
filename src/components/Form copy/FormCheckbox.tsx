import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import { Checkbox } from "@/components/ui/checkbox";

type CheckboxProps = {
  name: string;
  label?: string;
  className?: string;
  type?: string;
  id: string;
  placeholder?: string;
  options?: any;
  textWithCheckbox: string;
};

const FormCheckbox = ({
  name,
  type,
  label,
  id,
  placeholder,
  className,
  options,
  textWithCheckbox,
}: CheckboxProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <div className="flex flex-col items-start gap-2">
          <p>{label}</p>
          <div className="flex w-full items-center gap-2 rounded-md border border-[#E4E4E7] px-4 py-[0.35rem]">
            <Checkbox checked={value} onCheckedChange={onChange} />
            <p>{textWithCheckbox}</p>
          </div>
        </div>
      )}
    />
  );
};

export default FormCheckbox;
