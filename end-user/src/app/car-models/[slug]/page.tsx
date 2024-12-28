"use client";

import { JSX, useState } from "react";
import { useParams } from "next/navigation";
import { allCars } from "@/constant/Cars";

import { Button, Image } from "@nextui-org/react";
import { FaCar, FaGasPump } from "react-icons/fa";
import { PiSeatFill } from "react-icons/pi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import Link from "next/link";
import {
  SiMercedes,
  SiHonda,
  SiToyota,
  SiSuzuki,
  SiAudi,
  SiLandrover,
} from "react-icons/si";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import ModalEnquiry from "@/components/partials/Modal";

export default function DetailCar(): JSX.Element {
  const { slug } = useParams();
  // const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const car = allCars.find((car) => car.slug === slug);
  const [interiorSlide, setInteriorSlide] = useState(0);
  const [exteriorSlide, setExteriorSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [enquiryCar, setEnquiryCar] = useState<string>("");
  // const [sliderRef, instanceRef] = useKeenSlider({
  //   initial: 0,
  //   slides: {
  //     spacing: 15,
  //   },
  //   slideChanged(slider) {
  //     setCurrentSlide(slider.track.details.rel);
  //   },
  //   created() {
  //     setLoaded(true);
  //   },
  // });

  // Interior slider initialization
  const [interiorSliderRef, interiorInstanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      spacing: 15,
    },
    slideChanged(slider) {
      setInteriorSlide(slider.track.details.rel); // Update interior slide state
    },
    created() {
      setLoaded(true);
    },
  });

  // Exterior slider initialization
  const [exteriorSliderRef, exteriorInstanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      spacing: 15,
    },
    slideChanged(slider) {
      setExteriorSlide(slider.track.details.rel); // Update exterior slide state
    },
    created() {
      setLoaded(true);
    },
  });

  const carBrand = (type: string) => {
    switch (true) {
      case type == "Suzuki":
        return <SiSuzuki className="w-8 h-8" />;

      case type == "Honda":
        return <SiHonda className="w-8 h-8" />;

      case type == "Toyota":
        return <SiToyota className="w-8 h-8" />;

      case type == "Mercedes-Benz":
        return <SiMercedes className="w-8 h-8" />;

      case type == "Audi":
        return <SiAudi className="w-8 h-8" />;

      case type == "Land Rover":
        return <SiLandrover className="w-8 h-8" />;

      default:
        return;
    }
  };
  return (
    <main>
      <header className="container p-4 md:p-8">
        <Image
          src={car?.cover}
          alt="Cover"
          removeWrapper
          className="w-full md:w-1/2 mx-auto object-cover"
        />
      </header>

      {/* Car Name & Video */}
      <section className="py-4 md:py-8">
        <div className="container p-4 md:p-8">
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
                src={car?.exterior?.covers[car.exterior.covers.length - 1].url}
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
      <section className="py-4 md:py-8">
        <div className="container p-4 md:p-8">
          <div className="grid lg:grid-cols-2 items-center gap-4 md:gap-8">
            <div>
              <Image
                src={car?.exterior?.covers[car.exterior.covers.length - 2]?.url}
                alt={car?.name}
                removeWrapper
                className="object-cover w-full"
              />
            </div>

            <div className="space-y-4 lg:space-y-8">
              <p className="md:text-lg lg:text-xl lg:leading-relaxed">
                {car?.description}
              </p>

              <Button
                variant="solid"
                color="primary"
                radius="full"
                size="lg"
                onClick={() => {
                  setIsOpen(true);
                  setEnquiryCar(car!.name);
                }}
              >
                Enquire Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Specifications & Brand */}
      <section className="py-4 md:p-8">
        <div className="container p-4 md:p-8">
          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            <div className="col-span-2">
              <h3 className="mb-4 font-bold">Key Specifications</h3>

              <div className="flex flex-col gap-2 md:gap-4">
                <div className="flex flex-col md:flex-row gap-1 justify-between border-b pb-2">
                  <span className="text-sm md:text-base">Engine Type:</span>
                  <span className="text-sm md:text-base font-bold">
                    {car?.engine_type || "-"}
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
                    Estimated at {car?.fuel_efficiency}
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
                <div className="flex items-center gap-2">
                  {carBrand(car?.brand as string)}
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
                    {car?.mpg ? (
                      <span>{car?.mpg} Mpg</span>
                    ) : (
                      <span className="text-xl">-</span>
                    )}
                  </div>
                </div>
              </div>

              {car?.warranty ? (
                <div>
                  <h3 className="mb-4 font-bold">Warranty</h3>
                  <div>
                    <span className="text-black/40">{car?.warranty}</span>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="mb-2 font-bold">Warranty</h3>
                  <div>
                    <span className="text-black/40 text-xl"> - </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Interior */}
      <section className="py-4 md:py-8 bg-[#f5f5f5] overflow-hidden">
        <div className="container p-4 md:p-8">
          <div className="md:grid md:grid-cols-2 gap-4 md:gap-8 lg:gap-16 items-center">
            <div className="order-2 mb-8 md:mb-0">
              <h3 className="font-bold mb-4 md:mb-8">Interior Features</h3>
              <p className="lg:text-xl lg:leading-relaxed max-w-full">
                {car?.interior?.description}
              </p>
            </div>
            <div className="navigation-wrapper">
              <div ref={interiorSliderRef} className="keen-slider">
                {car?.interior?.covers.map((cover, index: number) => (
                  <div key={index} className="keen-slider__slide">
                    <Image
                      src={cover.url}
                      removeWrapper
                      alt={car.name + index}
                    />
                  </div>
                ))}
              </div>{" "}
              {loaded && interiorInstanceRef.current && (
                <div className="dots absolute bottom-0  left-1/2 -translate-x-1/2 z-10">
                  <div className="dots">
                    {Array.from(
                      {
                        length:
                          interiorInstanceRef.current.track.details.slides
                            .length,
                      },
                      (_, idx) => (
                        <button
                          key={idx}
                          onClick={() =>
                            interiorInstanceRef.current?.moveToIdx(idx)
                          }
                          className={
                            "dot" + (interiorSlide === idx ? " active" : "")
                          }
                        ></button>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Exterior */}
      <section className="py-4 md:py-8 overflow-hidden">
        <div className="container p-4 md:p-8">
          <div className="md:grid md:grid-cols-2 gap-4 md:gap-8 lg:gap-16 items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="font-bold mb-4 md:mb-8">Exterior Features</h3>
              <p className="lg:text-xl lg:leading-relaxed max-w-full">
                {car?.exterior?.description}
              </p>
            </div>

            <div className="navigation-wrapper">
              {car?.exterior && car.exterior.covers.length > 3 ? (
                <div ref={exteriorSliderRef} className="keen-slider">
                  {car?.exterior?.covers
                    .slice(0, -2)
                    .map((cover, index: number) => (
                      <div key={index} className="keen-slider__slide">
                        <Image
                          src={cover.url}
                          removeWrapper
                          alt={car.name + index}
                        />
                      </div>
                    ))}
                </div>
              ) : (
                <div ref={exteriorSliderRef} className="keen-slider">
                  {car?.exterior?.covers.map((cover, index: number) => (
                    <div key={index} className="keen-slider__slide">
                      <Image
                        src={cover.url}
                        removeWrapper
                        alt={car.name + index}
                      />
                    </div>
                  ))}
                </div>
              )}

              {loaded && exteriorInstanceRef.current && (
                <div className="dots absolute bottom-0  left-1/2 -translate-x-1/2 z-10">
                  <div className="dots">
                    {Array.from(
                      {
                        length:
                          exteriorInstanceRef.current.track.details.slides
                            .length,
                      },
                      (_, idx) => (
                        <button
                          key={idx}
                          onClick={() =>
                            exteriorInstanceRef.current?.moveToIdx(idx)
                          }
                          className={
                            "dot" + (exteriorSlide === idx ? " active" : "")
                          }
                        ></button>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features & Technology */}
      <section className="py-4 md:py-8 bg-[#f5f5f5]">
        <div className="container p-4 md:p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="mb-4 md:mb-8">Safety Features:</h3>

              <ul className="list-disc">
                {car?.safety_features?.features.map(
                  (feature, index: number) => (
                    <li key={index} className="flex gap-2">
                      <div>
                        <BsDot className="w-6 h-6 text-black" />
                      </div>
                      <div className="space-x-2">
                        <span className="font-bold  whitespace-nowrap">
                          {feature.name}:
                        </span>
                        <span className="max-w-sm text-[#34343480]">
                          {feature.description}
                        </span>
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 md:mb-8">Technologies:</h3>

              <ul className="list-disc">
                {car?.technologies?.features.map((tech, index: number) => (
                  <li key={index} className="flex gap-2">
                    <div>
                      <BsDot className="w-6 h-6 text-black" />
                    </div>
                    <div className="space-x-2">
                      <span className="font-bold  whitespace-nowrap">
                        {tech.name}:
                      </span>
                      <span className="max-w-sm text-[#34343480]">
                        {tech.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 md:py-8">
        <div className="bg-[url('/asset-bg-town.webp')] bg-bottom bg-no-repeat py-8">
          <div className="container p-4 md:p-8  flex flex-col items-center gap-4 md:gap-8 z-20">
            <h2 className="text-2xl font-semibold uppercase leading-snug md:text-3xl sm:leading-snug lg:text-4xl lg:leading-tight text-black/80">
              VISIT US
            </h2>

            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-1 flex-col md:flex-row items-center text-black/80 md:text-lg">
                <span className="font-semibold">Showroom Address:</span>
                <span>2 Jln Kilang Barat, #03-01, Singapore 159346</span>
              </div>

              <div className="flex gap-1 flex-col md:flex-row items-center text-black/80 md:text-lg">
                <span className="font-semibold">Opening Hours:</span>
                <span>10 AM to 6:30 PM daily</span>
              </div>
            </div>

            <Button
              as={Link}
              href="https://maps.app.goo.gl/M18vu4fa44xYGk8N9"
              target="_blank"
              radius="full"
              color="primary"
              startContent={<FaMapMarkerAlt className="text-white" />}
              className="w-max"
            >
              GET DIRECTIONS
            </Button>
          </div>
        </div>
      </section>

      <ModalEnquiry
        enquiryCar={enquiryCar}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </main>
  );
}
