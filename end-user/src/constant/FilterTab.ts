import { FilterTab } from "@/@types/FilterTab";

export const filterTabs: FilterTab[] = [
  {
    title: "All Cars",
    key: "all",
  },

  {
    title: "Filter by categories",
    key: "categories",
  },

  {
    title: "Filter by Brand",
    key: "brands",
  },
];

export const categories: FilterTab[] = [
  {
    title: "MPV",
    key: "MPV",
  },
  {
    title: "SUV",
    key: "SUV",
  },
  {
    title: "Compact",
    key: "Compact",
  },
  {
    title: "Hybrid",
    key: "Hybrid",
  },
  {
    title: "Sports",
    key: "Sports",
  },
  { title: "Sedan", key: "Sedan" },
];

export const brands: FilterTab[] = [
  {
    title: "Toyota",
    key: "Toyota",
  },
  {
    title: "Honda",
    key: "Honda",
  },
  {
    title: "Land Rover",
    key: "Land Rover",
  },
  {
    title: "Suzuki",
    key: "Suzuki",
  },
  {
    title: "Mercedes-Benz",
    key: "Mercedes-Benz",
  },
  {
    title: "Audi",
    key: "Audi",
  },
];
