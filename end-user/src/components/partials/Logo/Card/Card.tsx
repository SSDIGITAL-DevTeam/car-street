import React from "react";

import { Image, Button, Chip } from "@nextui-org/react";
import { Car } from "@/@types/Car";
import { BsCarFrontFill } from "react-icons/bs";
type Props = {
  car: Car;
};

export default function Card({ car }: Props) {
  return (
    <div className="border bg-[#F6F6F6] rounded-xl p-4">
      <div className="mb-4 relative">
        <Image src={car?.cover} alt={car?.name} />

        <div className="absolute right-0 top-0 z-10">
          <Chip
            startContent={<BsCarFrontFill className="text-white w-5 h-5" />}
            className="bg-black/70 text-white px-2"
          >
            {car.category}
          </Chip>
        </div>
      </div>

      <h4 className="font-bold mb-4">{car?.name}</h4>

      <div className="flex items-center justify-between mb-4 bg-white py-4 px-2">
        <div className="flex flex-col gap-2">
          <span className="text-primary text-sm">Engine</span>
          <span className="font-bold">{car?.engine} cc</span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-primary text-sm">Power</span>
          <span className="font-bold">{car?.power} hp</span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-primary text-sm">Torque</span>
          <span className="font-bold">{car?.torque} Nm</span>
        </div>
      </div>

      <div className="flex justify-between gap-2 md:gap-4">
        <Button variant="bordered" color="primary" radius="full">
          See Details
        </Button>

        <Button variant="solid" color="primary" radius="full">
          Enquire Now
        </Button>
      </div>
    </div>
  );
}
