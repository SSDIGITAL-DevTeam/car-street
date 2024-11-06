import { Car } from "@/@types/Car";
import Card from "@/components/partials/Card";
import { allCars } from "@/constant/Cars";
import React from "react";

export default function AllCarsTab() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
      {allCars?.map((car: Car, index: number) => (
        <Card car={car} key={index} />
      ))}
    </div>
  );
}
