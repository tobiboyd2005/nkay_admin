"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { formatCurrency } from "@/lib/formatter";
import {useState} from "react";

type ProductCardProps = {
  id: string;
  name: string;
  priceInNaira: number;
  description: string;
  imagePath: string;
};



export function ProductCard({
                                id,
                                name,
                                priceInNaira,
                                description,
                                imagePath,
                            }: ProductCardProps) {
    // State for the counter
    const [yards, setYards] = useState(1);

    // Increment and decrement functions
    const incrementYards = () => setYards((prev) => prev + 1);
    const decrementYards = () => setYards((prev) => (prev > 1 ? prev - 1 : 1));

    return (
        <Card className="flex overflow-hidden flex-col rounded-2xl">
            <div className="relative aspect-video">
                <Image src={imagePath} fill alt={name} className="rounded-lg" />
            </div>
            <CardHeader>
                <CardTitle className="text-lg sm:text-xl lg:text-2xl 2xl:text-3xl">{name}</CardTitle>
                <CardDescription className="text-sm sm:text-base lg:text-lg 2xl:text-xl">
                    {formatCurrency(priceInNaira)}
                </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow ">
                <p className="line-clamp-4 text-sm sm:text-base lg:text-lg 2xl:text-xl">{description}</p>
            </CardContent>
            <div className=" flex items-center justify-around">
                <Button
                    className="px-4 py-2 bg-gray-300 rounded-lg text-lg"
                    onClick={decrementYards}
                >
                    -
                </Button>
                <span className="text-lg font-semibold">{yards} Yard{yards > 1 ? "s" : ""}</span>
                <Button
                    className="px-4 py-2 bg-gray-300 rounded-lg text-lg"
                    onClick={incrementYards}
                >
                    +
                </Button>
            </div>
            <CardFooter className="">
                <Button
                    size="lg"
                    className="w-full border mt-4 border-gray-300 text-base lg:text-lg 2xl:text-xl py-2 lg:py-3 2xl:py-4"
                >
                    Add to cart
                </Button>
            </CardFooter>
        </Card>
    );
}

export function ProductCardSkeleton() {
  return (
    <Card className="overflow-hidden flex flex-col animate-pulse p-4 sm:p-6 lg:p-8 2xl:p-10">
      <div className="w-full aspect-video bg-gray-300 rounded-lg" />
      <CardHeader className="mt-2 lg:mt-4">

        <CardTitle>
          <div className="w-3/4 h-6 sm:h-8 lg:h-10 2xl:h-12 rounded-full bg-gray-300" />
        </CardTitle>
        <CardDescription>
          <div className="w-1/2 h-4 sm:h-6 lg:h-8 2xl:h-10 rounded-full bg-gray-300" />
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 mt-2 lg:mt-4">
        <div className="w-full h-4 sm:h-5 lg:h-6 2xl:h-7 rounded-full bg-gray-300" />
        <div className="w-full h-4 sm:h-5 lg:h-6 2xl:h-7 rounded-full bg-gray-300" />
        <div className="w-3/4 h-4 sm:h-5 lg:h-6 2xl:h-7 rounded-full bg-gray-300" />
      </CardContent>
      <CardFooter className="mt-2 lg:mt-4">
        <Button className="w-full h-10 sm:h-12 lg:h-14 2xl:h-16" disabled size="lg"></Button>
      </CardFooter>
    </Card>
  );
}
