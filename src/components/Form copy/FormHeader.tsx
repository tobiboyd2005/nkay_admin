"use client";
import React from "react";
import Link from "next/link";
import { useFormContext } from "react-hook-form";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

type Props = {
  prevRoute: string;
  link?: string;
  loadingState?: boolean;
};

const FormHeader = ({ prevRoute, link, loadingState }: Props) => {
  const {
    control,
    formState: { errors },
    reset,
  } = useFormContext();

  return (
    <header className="justify-betweenpy-6 mb-4 flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <Link
        className="flex items-center gap-2 text-[#848484] hover:text-black"
        href={link || ""}
      >
        <ChevronDownIcon className="rotate-90" height={16} width={16} />

        <p className=" ">Back to {prevRoute}</p>
      </Link>

      <div className="flex justify-end gap-2">
        {/* <Button
          className="md:auto w-[50%] border-[0.2px] border-[#e8e8e8] bg-transparent px-6 py-5 capitalize text-[#7a7983] hover:opacity-80 md:px-10"
          onClick={() => {
            reset();
          }}
        >
          cancel
        </Button> */}

        <Button
          className="md:auto w-[40%] bg-primary px-6 py-5 capitalize text-white hover:opacity-80 md:px-14"
          disabled={loadingState}
          type="submit"
        >
          {loadingState ? "saving" : "save"}
        </Button>
      </div>
    </header>
  );
};

export default FormHeader;
