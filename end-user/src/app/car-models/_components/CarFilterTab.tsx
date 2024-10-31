"use client";

import React, { JSX } from "react";
import { Button, Image } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import FilterIcon from "@/assets/svg/filter.svg";
import SelectCategory from "./SelectCategory";
import SelectBrand from "./SelectBrand";
import SelectAllCars from "./SelectAllCars";

export default function CarAllTab(): JSX.Element {
  // search params
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams!.toString());
  const tab = searchParams.get("tab");

  const showFilteredCars = (type: string) => {
    switch (true) {
      case type == "all":
        return <SelectAllCars />;

      case type == "categories":
        return <SelectCategory />;

      case type == "brands":
        return <SelectBrand />;

      default:
        return <SelectAllCars />;
    }
  };

  return (
    <div className="flex flex-col gap-y-8 md:gap-x-8 md:flex-row justify-between md:items-center">
      <div className="flex gap-2 md:gap-4 lg:gap-8">
        <Button
          className={` border-primary font-semibold text-xs md:text-base ${
            tab === "all" ? "bg-primary text-white" : "bg-white text-primary "
          }`}
          variant="bordered"
          radius="full"
          onClick={() => {
            params.delete("categories");
            params.delete("category");
            params.delete("brands");
            params.delete("brand");

            params.set("tab", "all");

            window.history.pushState({}, "", `?${params.toString()}`);
          }}
        >
          All Cars
        </Button>

        <Button
          className={` border-primary font-semibold text-xs md:text-base ${
            tab === "categories"
              ? "bg-primary text-white"
              : "bg-white text-primary "
          }`}
          variant="bordered"
          radius="full"
          onClick={() => {
            params.delete("brand");
            params.delete("category");
            params.delete("brands");

            params.set("tab", "categories");

            window.history.pushState({}, "", `?${params.toString()}`);
          }}
        >
          Filter by Categories
        </Button>

        <Button
          className={` border-primary font-semibold text-xs md:text-base ${
            tab === "brands"
              ? "bg-primary text-white"
              : "bg-white text-primary "
          }`}
          variant="bordered"
          radius="full"
          onClick={() => {
            params.delete("categories");
            params.delete("brand");
            params.delete("category");

            params.set("tab", "brands");

            window.history.pushState({}, "", `?${params.toString()}`);
          }}
        >
          Filter by Brand
        </Button>
      </div>

      <div className="max-w-md w-full flex items-center justify-end gap-4">
        {showFilteredCars(tab!)}

        <div>
          <Image
            src={FilterIcon.src}
            alt="Filter"
            radius="none"
            className="w-8 h-8"
          />
        </div>
      </div>
      {/* <SelectCategory /> */}
    </div>
  );
}
