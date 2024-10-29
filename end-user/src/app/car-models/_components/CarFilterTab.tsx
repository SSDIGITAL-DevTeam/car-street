"use client";

import React, { JSX } from "react";
import { Button } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { filterTabs } from "@/constant/FilterTab";

export default function CarFilterTab(): JSX.Element {
  // search params
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams!.toString());

  const tab = searchParams.get("tab");

  return (
    <div>
      <div className="flex gap-2 md:gap-4 lg:gap-8">
        {filterTabs.map((filterTab) => (
          <Button
            key={filterTab.key}
            className={` border-primary font-semibold ${
              tab === filterTab.key
                ? "bg-primary text-white"
                : "bg-white text-primary "
            }`}
            variant="bordered"
            radius="full"
            onClick={() => {
              params.set("tab", filterTab.key);

              window.history.pushState({}, "", `?${params.toString()}`);
            }}
          >
            {filterTab.title}
          </Button>
        ))}
      </div>

      <Button
        variant="solid"
        color="primary"
        radius="full"
        onClick={() => {
          params.set("category", "mpv");

          window.history.pushState({}, "", `?${params.toString()}`);
        }}
      >
        MPV
      </Button>
    </div>
  );
}
