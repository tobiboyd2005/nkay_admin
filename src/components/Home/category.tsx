import React from "react";
import { FabCard } from "@/components/Home/fabcard";
import lace from "/public/fabrics/lace.jpg";
import ankara from "/public/fabrics/ankara.jpg";
import adire from "/public/fabrics/adire.jpg";
import aso_oke from "/public/fabrics/aso-oke.webp";
import silk from "/public/fabrics/silk.jpg";
import damask from "/public/fabrics/damask.jpg";
import cotton from "/public/fabrics/cotton.jpg";
import crepe from "/public/fabrics/crepe.jpg";
import chiffon from "/public/fabrics/chiffon.jpeg";

export default function Category() {
  return (
    <div className="w-full h-auto my-24 flex flex-col font-satoshi items-center">
      <h1 className="font-black text-[50px] text-center uppercase">
        With a<br/> wide range<br/> of Categories
      </h1>
      <div className="grid grid-cols-3 gap-8 mt-4">
        <FabCard name="Lace" imageSrc={lace} />
        <FabCard name="Ankara" imageSrc={ankara} />
        <FabCard name="Adire" imageSrc={adire} />
        <FabCard name="Aso-Oke" imageSrc={aso_oke} />
        <FabCard name="Silk" imageSrc={silk} />
        <FabCard name="Damask" imageSrc={damask} />
        <FabCard name="Cotton" imageSrc={cotton} />
        <FabCard name="Crepe" imageSrc={crepe} />
        <FabCard name="Chiffon" imageSrc={chiffon} />
      </div>
    </div>
  );
}
