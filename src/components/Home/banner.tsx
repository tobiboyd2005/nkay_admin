"use client";
import React, { useState, useEffect } from "react";
import banner from "/public/whitebg.jpg";

import Link from "next/link";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Banner() {
  const images = [banner];
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
    <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] 2xl:h-[80vh] mt-4 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
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

      {/* Centered Text Content */}
      <div className="relative z-10 text-center">
        <h1 className="font-black text-5xl sm:text-6xl lg:text-8xl 2xl:text-[200px] mb-6 lg:mb-8 leading-tight lg:leading-[0.9]">
          Your one <br />
          stop shop <br />
          for all <br />
          your fabrics!
        </h1>
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-center 2xl:text-xl">
          <Button className="bg-black text-white font-bold 2xl:text-2xl h-12 w-32 lg:h-14 lg:w-36 2xl:h-20 2xl:w-48 rounded-3xl">
            Shop Now!
          </Button>
          <Link
            href=""
            className="flex gap-1 h-12 w-32 lg:h-14 lg:w-36 2xl:text-2xl 2xl:h-20 2xl:w-48 rounded-3xl border border-black items-center justify-center font-bold text-black"
          >
            <Instagram />
            <p>Instagram</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
