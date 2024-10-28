"use client";
import React from "react";
import { Image } from "@nextui-org/react";
import ourCarImg from "@/assets/images/our-cars-image.webp";

export default function OurCars() {
  return (
    <div className="relative py-8 md:py-16 lg:py-24">
      <div className="container p-4 md:p-8">
        <div className="flex items-end justify-between">
          <h2 className="font-bold ">
            <span className="text-primary">OUR</span> CARS
          </h2>

          <div className="absolute right-0 hidden md:block">
            <Image
              src={ourCarImg.src}
              alt="Our car"
              radius="none"
              className="w-3/4 ml-auto "
            />
          </div>
        </div>

        {/* filter */}
      </div>
    </div>
  );
}
