"use client";

import React, { JSX } from "react";
import { Tabs, Tab } from "@nextui-org/react";

export default function CarFilterTab(): JSX.Element {
  return (
    <Tabs
      className="mt-2"
      classNames={{
        panel: "px-0",
        cursor: `rounded`,
        base: "sticky top-2 z-10",
      }}
      color="primary"
      aria-label="Options"
      fullWidth
    >
      <Tab key="all-cars" title="All Cars">
        <div className="mt-4 flex flex-col gap-6 lg:mt-6">All Car</div>
      </Tab>

      <Tab key="by-categories" title="Filter By Categories">
        <div className="mt-4 flex flex-col gap-6 lg:mt-6">
          Filter By Categories
        </div>
      </Tab>

      <Tab key="by-brands" title="Filter By Brands">
        <div className="mt-4 flex flex-col gap-6 lg:mt-6">Filter By Brands</div>
      </Tab>
    </Tabs>
  );
}
