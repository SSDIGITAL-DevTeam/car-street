export type Brand = {
  id: string;
  name: string;
  cars: Car[];
};

export type Category = {
  id: string;
  name: string;
  cars: Car[];
};

export type Car = {
  name: string;
  category: string;
  brand: string;
  engine: number;
  power: number;
  torque: number;
  cover: string;
};
