import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type RadioProps = {
  name: string;
  label?: string;
  className?: string;
  type?: string;
  id: string;
  placeholder?: string;
  options: Array<{ key: any; value: string | boolean | number }> | undefined;
};

const FormRadio = ({
  name,
  type,
  label,
  id,
  placeholder,
  className,
  options,
}: RadioProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-2">
      <label className="ont-normal text-[16px] capitalize">{label}</label>
      <div className="flex gap-6 rounded-md border-[0.1px] border-[#E4E4E7] px-5 py-[0.45rem]">
        {options?.map((option) => (
          <div key={option.key} className="flex items-center gap-[5px]">
            <Controller
              control={control}
              name={name}
              render={({ field: { value, onChange } }) => {
                return (
                  <>
                    <input
                      checked={value?.toString() === option.value.toString()}
                      className="h-[18px] w-[18px] !ring-transparent focus:!border-none"
                      id={option.key}
                      type="radio"
                      value={option.value.toString()}
                      onChange={onChange}
                    />
                    <label className="text-content4 text-[14px] font-[300]">
                      {option.key}
                    </label>
                  </>
                );
              }}
            />
          </div>
        ))}
      </div>
      <small className="block text-red-600">
        {errors[name]?.message?.toString()}
      </small>
    </div>
  );
};

export default FormRadio;
