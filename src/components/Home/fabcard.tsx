import * as React from "react";
import Image, { StaticImageData } from "next/image"; // Import Next.js Image component


interface FabCardProps {
    name: string;
    imageSrc: StaticImageData;
}


export function FabCard({ name, imageSrc }: FabCardProps) {
    return (
        <div className="w-[350px] 2xl:w-[500px]">
            <div className="relative w-full h-[200px] 2xl:h-[350px]">
                <Image
                    src={imageSrc}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
                <p className="absolute inset-0 flex items-center justify-center font-bold text-4xl text-white bg-black bg-opacity-20 rounded-lg">
                    {name}
                </p>
            </div>
        </div>
    );
}
