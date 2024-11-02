"use client";

import React from "react";
import { useParams } from "next/navigation";
import { allCars } from "@/constant/Cars";
import cover from "@/assets/images/detail-main-cover.png";
import cover2 from "@/assets/images/detail-second-cover.png";
import coverVideo from "@/assets/images/detail-video.png";
import { Button, Image } from "@nextui-org/react";
import { FaCar, FaGasPump } from "react-icons/fa";
import { PiSeatFill } from "react-icons/pi";
export default function DetailCar() {
  const { slug } = useParams();

  const car = allCars.find((car) => car.slug === slug);

  return (
    <main className="container p-4 md:p-8">
      <header>
        <Image
          src={cover.src}
          alt="Cover"
          removeWrapper
          className="w-full object-cover"
        />
      </header>

      {/* Car Name & Video */}
      <section className="py-4 md:py-8">
        <div>
          <div className="grid md:grid-cols-2 items-center justify-between gap-4">
            <div>
              <h2 className="mb-4 md:mb-8">{car?.name}</h2>

              <div className="flex flex-col gap-2">
                <div className="flex items-end gap-2">
                  <span>Condition: </span>
                  <span className="font-bold">New</span>
                </div>

                <div className="flex items-end gap-2">
                  <span>Availability: </span>
                  <span className="font-bold">
                    In Stock at Carstreet, Singapore
                  </span>
                </div>
              </div>
            </div>

            <div>
              <Image
                src={coverVideo.src}
                alt={car?.name}
                removeWrapper
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* End Car Video */}

      {/* Car Description */}
      <section>
        <div>
          <div className="grid lg:grid-cols-2 place-items-center gap-4">
            <div>
              <Image
                src={cover2.src}
                alt={car?.name}
                removeWrapper
                className="object-cover w-full"
              />
            </div>

            <div className="space-y-4 lg:space-y-8">
              <p className="md:text-lg lg:text-xl lg:leading-relaxed">
                The Mercedes-Benz GLA200 (2023) is a sleek and versatile luxury
                SUV with a 1.3L turbocharged engine and 7G-DCT automatic
                transmission for both power and efficiency. It features a
                premium interior with leather seats, dual-zone climate control,
                and a 10.25-inch MBUX infotainment system. With advanced safety
                features like Active Brake Assist and Blind Spot Assist, the
                GLA200 offers a secure and stylish driving experience.
              </p>

              <Button variant="solid" color="primary" radius="full" size="lg">
                Enquire Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Specifications & Brand */}
      <section className="py-4 md:p-8">
        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          <div className="col-span-2">
            <h3 className="mb-4 font-bold">Key Specifications</h3>

            <div className="flex flex-col gap-2 md:gap-4">
              <div className="flex flex-col md:flex-row gap-1 justify-between border-b pb-2">
                <span className="text-sm md:text-base">Engine Type:</span>
                <span className="text-sm md:text-base font-bold">
                  {car?.engine_type}
                </span>
              </div>

              <div className="flex flex-col md:flex-row gap-1 justify-between border-b pb-2">
                <span className="text-sm md:text-base">Horsepower:</span>
                <span className="text-sm md:text-base font-bold">
                  {car?.power} HP
                </span>
              </div>

              <div className="flex flex-col md:flex-row gap-1 justify-between border-b pb-2">
                <span className="text-sm md:text-base">Transmission:</span>
                <span className="text-sm md:text-base font-bold">
                  {car?.transmission}
                </span>
              </div>

              <div className="flex flex-col md:flex-row gap-1 justify-between border-b pb-2">
                <span className="text-sm md:text-base">Fuel Efficiency:</span>
                <span className="text-sm md:text-base font-bold">
                  Estimated at {car?.fuel_efficiency} km/l
                </span>
              </div>

              <div className="flex flex-col md:flex-row gap-1 justify-between border-b pb-2">
                <span className="text-sm md:text-base">Drive Type:</span>
                <span className="text-sm md:text-base font-bold">
                  {car?.drive_type}
                </span>
              </div>

              <div className="flex flex-col md:flex-row gap-1 justify-between border-b pb-2">
                <span className="text-sm md:text-base">Acceleration:</span>
                <span className="text-sm md:text-base font-bold">
                  {car?.acceleration}
                </span>
              </div>

              <div className="flex flex-col md:flex-row gap-1 justify-between border-b pb-2">
                <span className="text-sm md:text-base">Top Speed:</span>
                <span className="text-sm md:text-base font-bold">
                  {car?.top_speed} km/h
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h3 className="mb-4 font-bold">Brand</h3>
              <div>
                <span>{car?.brand}</span>
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-bold">Features</h3>

              <div className="flex flex-col gap-2 md:gap-4">
                <div className="flex items-center gap-2">
                  <div className="bg-primary p-1.5 rounded-lg">
                    <FaCar className="text-white w-6 h-6" />
                  </div>
                  <span>{car?.category}</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="bg-primary p-1.5 rounded-lg">
                    <PiSeatFill className="text-white w-6 h-6" />
                  </div>
                  <span>{car?.seats} Seats</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="bg-primary p-1.5 rounded-lg">
                    <FaGasPump className="text-white w-6 h-6" />
                  </div>
                  <span>{car?.mpg} Mpg</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-bold">Warranty</h3>
              <div>
                <span className="text-black/40">{car?.warranty}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
