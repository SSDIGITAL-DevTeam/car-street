"use client";

import React, { JSX } from "react";
import { Button } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { categories } from "@/constant/FilterTab";
import { FaChevronDown } from "react-icons/fa6";
import { MdFilterAlt } from "react-icons/md";
export default function CarAllTab(): JSX.Element {
  // search params
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams!.toString());
  const tab = searchParams.get("tab");

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;

    // Set the new "category" param
    params.set("category", selectedCategory);
    window.history.pushState({}, "", `?${params.toString()}`);
    // Push the updated URL
    // router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <div className="flex gap-2 md:gap-4 lg:gap-8">
        <Button
          className={` border-primary font-semibold ${
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
          className={` border-primary font-semibold ${
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
          className={` border-primary font-semibold ${
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

      <div className="max-w-md w-full flex items-center gap-4">
        <div className="relative inline-block w-full">
          <select
            onChange={handleCategoryChange}
            className="bg-gray-200 py-2 pl-4 pr-20 text-black/85 appearance-none w-full"
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option value={category.key} key={category.key}>
                {category.title}
              </option>
            ))}
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <FaChevronDown />
          </div>
        </div>

        <div>
          <MdFilterAlt className="w-10 h-10" />
        </div>
      </div>
    </div>
  );
}
