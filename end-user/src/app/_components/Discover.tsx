import React from "react";
import { Image } from "@nextui-org/react";
import { ourCars } from "@/constant/home";

export default function Discover() {
  return (
    <div className="bg-[#f5f5f5] py-16 md:py-24">
      <div className="container p-4 md:p-8">
        <h2 className="font-bold mb-8 md:mb-16 text-center uppercase">
          <span className="text-primary">Discover</span> Our Cars
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {ourCars.map((car, index: number) => (
            <div key={index} className="flex flex-col gap-4 items-center">
              <Image
                src={car.img}
                alt={car.title}
                className="w-full object-cover"
              />
              <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-center">
                {car.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
