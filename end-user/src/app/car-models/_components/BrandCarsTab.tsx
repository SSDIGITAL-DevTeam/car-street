import { Brand, Car } from "@/@types/Car";
import Card from "@/components/partials/Card";
import { allBrands } from "@/constant/Cars";
import React from "react";

type Props = {
  params: string;
};

export default function BrandCarsTab({ params }: Props) {
  return (
    <div>
      {!params
        ? allBrands.map((categoryCar: Brand) => (
            <div key={categoryCar.id} className="mb-8 md:mb-16">
              <h3 className="font-bold mb-4 md:mb-8">{categoryCar.name}</h3>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                {categoryCar.cars.map((car: Car, index: number) => (
                  <Card car={car} key={index} />
                ))}
              </div>
            </div>
          ))
        : allBrands
            .filter((filteredCar) => filteredCar.name === params)
            .map((categoryCar: Brand) => (
              <div key={categoryCar.id} className="mb-8 md:mb-16">
                <h3 className="font-bold mb-4 md:mb-8">{categoryCar.name}</h3>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                  {categoryCar.cars.map((car: Car, index: number) => (
                    <Card car={car} key={index} />
                  ))}
                </div>
              </div>
            ))}
    </div>
  );
}
