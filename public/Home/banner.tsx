"use client";
import React, { useState, useEffect } from "react";
import banner from "/public/banner.jpg";
import banner1 from "/public/banner1.jpg";
import Link from "next/link";
import { Instagram } from "lucide-react";
import {Button} from "@/components/ui/button";

export default function Banner() {
  const images = [banner, banner1];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch between slides every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full h-[517px] mt-4 flex justify-between font-satoshi items-center">
      <div className="ml-20">
        <h1 className="font-black text-[90px] mb-8 leading-[1.1]">
          Your one <br />
          stop shop <br />
          for all <br />
          your fabrics!
        </h1>
        <div className="flex gap-4 items-center">
          <Button className="bg-black text-white font-bold h-12 w-32 rounded-3xl">
            Shop Now!
          </Button>
          <Link
            href=""
            className="flex gap-1 h-12 w-32 rounded-3xl border border-black items-center justify-center font-bold"
          >
            <Instagram />
            <p>Instagram</p>
          </Link>
        </div>
      </div>
      <div className="w-[50%] h-full relative mr-8">
        <div className="relative w-full h-[600px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute h-[517px] rounded-xl inset-0 transition-opacity duration-1000 ease-in-out ${
                currentIndex === index ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${image.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
