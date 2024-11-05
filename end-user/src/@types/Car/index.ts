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
  slug: string;
  name: string;
  category: string;
  description?: string;
  brand: string;
  engine: number;
  power: number;
  torque: number;
  engine_type: string;
  transmission: string;
  fuel_efficiency: string;
  drive_type: string;
  acceleration: string;
  top_speed: number;
  seats: number;
  mpg: string;
  warranty: string;
  cover: string;
  interior?: InteriorExterior;
  exterior?: InteriorExterior;
  safety_features?: SafetyFeatures;
  technologies?: Technology;
};

export type InteriorExterior = {
  description: string;
  covers: Cover[];
};

export type Cover = {
  url: string;
};

export type SafetyFeatures = {
  features: Feature[];
};

export type Technology = {
  features: Feature[];
};

export type Feature = {
  name: string;
  description: string;
};
