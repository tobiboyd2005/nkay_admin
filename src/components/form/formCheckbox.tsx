import * as React from "react";
import { Checkbox } from "../ui/checkbox";


interface CheckboxWithLabelProps {
  label: string;
  id: string;
}

export function CheckboxWithLabel({ label, id }: CheckboxWithLabelProps) {
  return (
    <div className="flex items-center justify-between">
      <label htmlFor={id} className="text-sm font-medium leading-none">
        {label}
      </label>
      <Checkbox id={id} />
    </div>
  );
}