import React, { FC } from "react";
import { useFormContext } from "react-hook-form";

type TProps = {
  register: any;
  statusKey: string;
  // errMsg: string | undefined;
  firstName: string;
  secondName: string;
};
const TypeToggler: FC<TProps> = ({
  register,
  statusKey,
  // errMsg,
  firstName,
  secondName,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="relative mt-4 flex md:justify-start">
      <div className="bg-app-purple-10 inline-flex rounded-xl p-2.5">
        <div className="mr-4 flex items-center">
          <input
            id={firstName.trim()}
            // id={statusKey}
            // id="yes"
            className="text-app-purple-11 h-4 w-4 bg-white !ring-transparent focus:!border-none"
            type="radio"
            name={firstName.trim()}
            // name={statusKey}
            // name="yes"
            value={0}
            {...register(statusKey)}
          />
          <label
            htmlFor={firstName.trim()}
            // htmlFor={statusKey}
            // htmlFor="no"
            className="text-app-gray-4 ml-2 text-sm font-medium"
          >
            {firstName}
          </label>
        </div>
        <div className="mr-4 flex items-center">
          <input
            value={1}
            id={secondName.trim()}
            // id={statusKey}
            type="radio"
            name={secondName.trim()}
            // name={statusKey}
            className="text-app-purple-11 h-4 w-4 bg-white !ring-transparent focus:!border-none"
            {...register(statusKey)}
          />
          <label
            className="text-app-gray-4 ml-2 text-sm font-medium"
            htmlFor={secondName.trim()}
          >
            {secondName}
          </label>
        </div>
      </div>
    </div>
  );
};

export default TypeToggler;
