import { Car } from "@/@types/Car";
import landy from "@/assets/images/car-landy.webp";
import fit from "@/assets/images/car-fit.webp";
import freed from "@/assets/images/car-freed.webp";
import glc300 from "@/assets/images/car-glc300.webp";
import alphard from "@/assets/images/car-alphard.webp";
import gla200 from "@/assets/images/car-gla200.webp";
import noah from "@/assets/images/car-noah.webp";
import prius from "@/assets/images/car-prius.webp";
import stepwagon from "@/assets/images/car-stepwagon.webp";
import velfire from "@/assets/images/car-velfire.webp";
import vezel from "@/assets/images/car-vezel.webp";

export const allCars: Car[] = [
  {
    name: "Suzuki Landy",
    category: "Minivan",
    engine: 1997,
    power: 144,
    torque: 196,
    cover: landy.src,
  },
  {
    name: "Toyota Noah",
    category: "Minivan",
    engine: 1986,
    power: 150,
    torque: 193,
    cover: noah.src,
  },
  {
    name: "Honda Stepwagon",
    category: "Minivan",
    engine: 1496,
    power: 150,
    torque: 203,
    cover: stepwagon.src,
  },

  {
    name: "Honda Fit",
    category: "Subcompact",
    engine: 1498,
    power: 130,
    torque: 155,
    cover: fit.src,
  },

  {
    name: "Toyota Prius",
    category: "Hybrid",
    engine: 1798,
    power: 121,
    torque: 142,
    cover: prius.src,
  },

  {
    name: "Toyota Vellfire",
    category: "MPV",
    engine: 2494,
    power: 167,
    torque: 235,
    cover: velfire.src,
  },

  {
    name: "Toyota Alphard",
    category: "MPV",
    engine: 3456,
    power: 296,
    torque: 361,
    cover: alphard.src,
  },

  {
    name: "Honda Freed",
    category: "MPV",
    engine: 1496,
    power: 129,
    torque: 155,
    cover: freed.src,
  },

  {
    name: "Honda Vezel",
    category: "SUV",
    engine: 1496,
    power: 129,
    torque: 155,
    cover: vezel.src,
  },

  {
    name: "Mercedes-Benz GLA200",
    category: "SUV",
    engine: 1332,
    power: 161,
    torque: 250,
    cover: gla200.src,
  },

  {
    name: "Mercedes-Benz GLC300",
    category: "SUV",
    engine: 1991,
    power: 254,
    torque: 370,
    cover: glc300.src,
  },
];
