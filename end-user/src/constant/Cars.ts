import { Brand, Car, Category } from "@/@types/Car";
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
    brand: "Suzuki",
  },
  {
    name: "Toyota Noah",
    category: "Minivan",
    engine: 1986,
    power: 150,
    torque: 193,
    cover: noah.src,
    brand: "Toyota",
  },
  {
    name: "Honda Stepwagon",
    category: "Minivan",
    engine: 1496,
    power: 150,
    torque: 203,
    cover: stepwagon.src,
    brand: "Honda",
  },

  {
    name: "Honda Fit",
    category: "Subcompact",
    engine: 1498,
    power: 130,
    torque: 155,
    cover: fit.src,
    brand: "Honda",
  },

  {
    name: "Toyota Prius",
    category: "Hybrid",
    engine: 1798,
    power: 121,
    torque: 142,
    cover: prius.src,
    brand: "Toyota",
  },

  {
    name: "Toyota Vellfire",
    category: "MPV",
    engine: 2494,
    power: 167,
    torque: 235,
    cover: velfire.src,
    brand: "Toyota",
  },

  {
    name: "Toyota Alphard",
    category: "MPV",
    engine: 3456,
    power: 296,
    torque: 361,
    cover: alphard.src,
    brand: "Toyota",
  },

  {
    name: "Honda Freed",
    category: "MPV",
    engine: 1496,
    power: 129,
    torque: 155,
    cover: freed.src,
    brand: "Honda",
  },

  {
    name: "Honda Vezel",
    category: "SUV",
    engine: 1496,
    power: 129,
    torque: 155,
    cover: vezel.src,
    brand: "Honda",
  },

  {
    name: "Mercedes-Benz GLA200",
    category: "SUV",
    engine: 1332,
    power: 161,
    torque: 250,
    cover: gla200.src,
    brand: "Marcedes-Benz",
  },

  {
    name: "Mercedes-Benz GLC300",
    category: "SUV",
    engine: 1991,
    power: 254,
    torque: 370,
    cover: glc300.src,
    brand: "Marcedes-Benz",
  },
];

export const allCategories: Category[] = [
  {
    id: "1",
    name: "Minivan",
    cars: [
      {
        name: "Suzuki Landy",
        category: "Minivan",
        engine: 1997,
        power: 144,
        torque: 196,
        cover: landy.src,
        brand: "Suzuki",
      },
      {
        name: "Toyota Noah",
        category: "Minivan",
        engine: 1986,
        power: 150,
        torque: 193,
        cover: noah.src,
        brand: "Toyota",
      },
      {
        name: "Honda Stepwagon",
        category: "Minivan",
        engine: 1496,
        power: 150,
        torque: 203,
        cover: stepwagon.src,
        brand: "Honda",
      },
    ],
  },
  {
    id: "2",
    name: "MPV",
    cars: [
      {
        name: "Toyota Vellfire",
        category: "MPV",
        engine: 2494,
        power: 167,
        torque: 235,
        cover: velfire.src,
        brand: "Toyota",
      },

      {
        name: "Toyota Alphard",
        category: "MPV",
        engine: 3456,
        power: 296,
        torque: 361,
        cover: alphard.src,
        brand: "Toyota",
      },

      {
        name: "Honda Freed",
        category: "MPV",
        engine: 1496,
        power: 129,
        torque: 155,
        cover: freed.src,
        brand: "Honda",
      },
    ],
  },

  {
    id: "3",
    name: "SUV",
    cars: [
      {
        name: "Honda Vezel",
        category: "SUV",
        engine: 1496,
        power: 129,
        torque: 155,
        cover: vezel.src,
        brand: "Honda",
      },

      {
        name: "Mercedes-Benz GLA200",
        category: "SUV",
        engine: 1332,
        power: 161,
        torque: 250,
        cover: gla200.src,
        brand: "Honda",
      },

      {
        name: "Mercedes-Benz GLC300",
        category: "SUV",
        engine: 1991,
        power: 254,
        torque: 370,
        cover: glc300.src,
        brand: "Marcedes-Benz",
      },
    ],
  },

  {
    id: "4",
    name: "Subcompact",
    cars: [
      {
        name: "Honda Fit",
        category: "Subcompact",
        engine: 1498,
        power: 130,
        torque: 155,
        cover: fit.src,
        brand: "Honda",
      },
    ],
  },

  {
    id: "5",
    name: "Hybrid",
    cars: [
      {
        name: "Toyota Prius",
        category: "Hybrid",
        engine: 1798,
        power: 121,
        torque: 142,
        cover: prius.src,
        brand: "Toyota",
      },
    ],
  },
];

export const allBrands: Brand[] = [
  {
    id: "1",
    name: "Toyota",
    cars: [
      {
        name: "Toyota Noah",
        category: "Minivan",
        engine: 1986,
        power: 150,
        torque: 193,
        cover: noah.src,
        brand: "Toyota",
      },
      {
        name: "Toyota Prius",
        category: "Hybrid",
        engine: 1798,
        power: 121,
        torque: 142,
        cover: prius.src,
        brand: "Toyota",
      },
      {
        name: "Toyota Vellfire",
        category: "MPV",
        engine: 2494,
        power: 167,
        torque: 235,
        cover: velfire.src,
        brand: "Toyota",
      },

      {
        name: "Toyota Alphard",
        category: "MPV",
        engine: 3456,
        power: 296,
        torque: 361,
        cover: alphard.src,
        brand: "Toyota",
      },
    ],
  },

  {
    id: "2",
    name: "Honda",
    cars: [
      {
        name: "Honda Stepwagon",
        category: "Minivan",
        engine: 1496,
        power: 150,
        torque: 203,
        cover: stepwagon.src,
        brand: "Honda",
      },

      {
        name: "Honda Fit",
        category: "Subcompact",
        engine: 1498,
        power: 130,
        torque: 155,
        cover: fit.src,
        brand: "Honda",
      },
      {
        name: "Honda Freed",
        category: "MPV",
        engine: 1496,
        power: 129,
        torque: 155,
        cover: freed.src,
        brand: "Honda",
      },

      {
        name: "Honda Vezel",
        category: "SUV",
        engine: 1496,
        power: 129,
        torque: 155,
        cover: vezel.src,
        brand: "Honda",
      },
    ],
  },

  {
    id: "3",
    name: "Marcedes-Benz",
    cars: [
      {
        name: "Mercedes-Benz GLA200",
        category: "SUV",
        engine: 1332,
        power: 161,
        torque: 250,
        cover: gla200.src,
        brand: "Marcedes-Benz",
      },

      {
        name: "Mercedes-Benz GLC300",
        category: "SUV",
        engine: 1991,
        power: 254,
        torque: 370,
        cover: glc300.src,
        brand: "Marcedes-Benz",
      },
    ],
  },

  {
    id: "4",
    name: "Suzuki",
    cars: [
      {
        name: "Suzuki Landy",
        category: "Minivan",
        engine: 1997,
        power: 144,
        torque: 196,
        cover: landy.src,
        brand: "Suzuki",
      },
    ],
  },
];
