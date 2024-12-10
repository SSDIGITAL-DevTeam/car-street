import { Brand, Car, Category } from "@/@types/Car";
import landy from "@/assets/images/car-landy.webp";
import fit from "@/assets/images/car-fit.webp";
import freed from "@/assets/images/car-freed.webp";
import glc300 from "@/assets/images/car-glc300.webp";
import alphard from "@/assets/images/car-alphard.png";
import gla200 from "@/assets/images/car-gla200.webp";
import noah from "@/assets/images/car-noah.webp";
import prius from "@/assets/images/car-prius.webp";
import stepwagon from "@/assets/images/car-stepwagon.webp";
import velfire from "@/assets/images/car-velfire.webp";
import vezel from "@/assets/images/car-vezel.webp";
import landyInt1 from "@/assets/images/landy-int-1.webp";
import landyInt2 from "@/assets/images/landy-int-2.webp";
import landyInt3 from "@/assets/images/landy-int-3.webp";
import landyExt1 from "@/assets/images/landy-ext-1.webp";
import landyExt2 from "@/assets/images/landy-ext-2.webp";
import landyExt3 from "@/assets/images/landy-ext-3.webp";
import freedInt1 from "@/assets/images/freed-int-1.webp";
import freedInt2 from "@/assets/images/freed-int-2.webp";
import freedInt3 from "@/assets/images/freed-int-3.webp";
import freedExt1 from "@/assets/images/freed-ext-1.webp";
import freedExt2 from "@/assets/images/freed-ext-2.webp";
import freedExt3 from "@/assets/images/freed-ext-3.webp";
import noahExt1 from "@/assets/images/noah-ext-1.webp";
import noahExt2 from "@/assets/images/noah-ext-2.webp";
import noahExt3 from "@/assets/images/noah-ext-3.webp";
import noahInt1 from "@/assets/images/noah-int-1.webp";
import noahInt2 from "@/assets/images/noah-int-2.webp";
import noahInt3 from "@/assets/images/noah-int-3.webp";
import wagonExt1 from "@/assets/images/stepwagon-ext-1.webp";
import wagonExt2 from "@/assets/images/stepwagon-ext-2.webp";
import wagonExt3 from "@/assets/images/stepwagon-ext-3.webp";
import wagonInt1 from "@/assets/images/stepwagon-int-1.webp";
import wagonInt2 from "@/assets/images/stepwagon-int-2.webp";
import wagonInt3 from "@/assets/images/stepwagon-int-3.webp";
import fitExt1 from "@/assets/images/fit-ext-1.webp";
import fitExt2 from "@/assets/images/fit-ext-2.webp";
import fitExt3 from "@/assets/images/fit-ext-3.webp";
import fitInt1 from "@/assets/images/fit-int-1.webp";
import fitInt2 from "@/assets/images/fit-int-2.webp";
import fitInt3 from "@/assets/images/fit-int-3.webp";
import priusExt1 from "@/assets/images/prius-ext-1.webp";
import priusExt2 from "@/assets/images/prius-ext-2.webp";
import priusExt3 from "@/assets/images/prius-ext-3.webp";
import priusInt1 from "@/assets/images/prius-int-1.webp";
import priusInt2 from "@/assets/images/prius-int-2.webp";
import priusInt3 from "@/assets/images/prius-int-3.webp";
import velfireExt1 from "@/assets/images/velfire-ext-1.webp";
import velfireExt2 from "@/assets/images/velfire-ext-2.webp";
import velfireExt3 from "@/assets/images/velfire-ext-3.webp";
import velfireInt1 from "@/assets/images/velfire-int-1.webp";
import velfireInt2 from "@/assets/images/velfire-int-2.webp";
import velfireInt3 from "@/assets/images/velfire-int-3.webp";
import alphardExt1 from "@/assets/images/alphard-ext-1.webp";
import alphardExt2 from "@/assets/images/alphard-ext-2.webp";
import alphardExt3 from "@/assets/images/alphard-ext-3.webp";
import alphardInt1 from "@/assets/images/alphard-int-1.webp";
import alphardInt2 from "@/assets/images/alphard-int-2.webp";
import alphardInt3 from "@/assets/images/alphard-int-3.webp";
import vezelExt1 from "@/assets/images/vezel-ext-1.webp";
import vezelExt2 from "@/assets/images/vezel-ext-2.webp";
import vezelExt3 from "@/assets/images/vezel-ext-3.webp";
import vezelInt1 from "@/assets/images/vezel-int-1.webp";
import vezelInt2 from "@/assets/images/vezel-int-2.webp";
import vezelInt3 from "@/assets/images/vezel-int-3.webp";
import gla300Ext1 from "@/assets/images/gla300-ext-1.webp";
import gla300Ext2 from "@/assets/images/gla300-ext-2.webp";
import gla300Ext3 from "@/assets/images/gla300-ext-3.webp";
import gla300Int1 from "@/assets/images/gla300-int-1.webp";
import gla300Int2 from "@/assets/images/gla300-int-2.webp";
import gla300Int3 from "@/assets/images/gla300-int-3.webp";
import gla200Ext1 from "@/assets/images/gla200-ext-1.webp";
import gla200Ext2 from "@/assets/images/gla200-ext-2.webp";
import gla200Ext3 from "@/assets/images/gla200-ext-3.webp";
import gla200Int1 from "@/assets/images/gla200-int-1.webp";
import gla200Int2 from "@/assets/images/gla200-int-2.webp";
import gla200Int3 from "@/assets/images/gla200-int-3.webp";

export const allCars: Car[] = [
  {
    slug: "suzuki-landy",
    name: "Suzuki Landy",
    description:
      "The Suzuki Landy is a practical and spacious family van with a 2.0L engine, delivering a balanced blend of power and fuel efficiency. It's designed to offer comfortable and reliable transportation for families, with enough space for passengers and luggage.",
    engine_type: "2.0L 4-cylinder Engine",
    transmission: "Automatic",
    fuel_efficiency: "12.5",
    drive_type: "Front-Wheel Drive",
    acceleration: "0-100 km/h in 10.5 sec",
    top_speed: 180,
    seats: 7,
    mpg: "29.4",
    warranty: "3 years or 100,000 km",
    category: "MPV",
    engine: 1997,
    power: 144,
    torque: 196,
    cover: landy.src,
    brand: "Suzuki",
    interior: {
      description:
        "The Suzuki Landy’s interior is designed for comfort and utility, featuring fabric upholstery and spacious seating for up to seven passengers. It includes a multi-function steering wheel, a touchscreen infotainment system with Bluetooth connectivity, and air conditioning for all rows. Ample legroom and flexible seating configurations make it ideal for long journeys.",
      covers: [
        {
          url: landyInt1.src,
        },
        {
          url: landyInt2.src,
        },
        {
          url: landyInt3.src,
        },
      ],
    },

    exterior: {
      description:
        "The Suzuki Landy sports a simple yet functional design, with a sleek front grille and halogen headlamps for visibility. It comes with sliding doors for easy access to the rear seats, and it rides on 15-inch alloy wheels, emphasizing its family-oriented, practical appeal.",
      covers: [
        {
          url: landyExt1.src,
        },
        {
          url: landyExt2.src,
        },
        {
          url: landyExt3.src,
        },
      ],
    },

    technologies: {
      features: [
        {
          name: "Connectivity",
          description: "Bluetooth, USB ports",
        },
        {
          name: "Advanced Driver Assistance",
          description: "Cruise control, Hill Start Assist, Traction Control",
        },
      ],
    },

    safety_features: {
      features: [
        { name: "Airbags", description: "Front and side airbags" },
        {
          name: "Assistance Systems",
          description:
            "Anti-lock Braking System (ABS), Electronic Brakeforce Distribution (EBD)",
        },
        { name: "Parking", description: "Rear-view camera" },
      ],
    },
  },
  {
    slug: "toyota-noah",
    name: "Toyota Noah",
    description:
      "The Toyota Noah is a versatile MPV known for its spacious interior and dependable performance. Powered by a 2.0L engine, it offers a smooth driving experience, making it a preferred choice for family travel and group outings.",
    engine_type: "2.0L 4-cylinder Engine",
    transmission: "CVT Automatic",
    fuel_efficiency: "13.0",
    drive_type: "Front-Wheel Drive (FWD)",
    acceleration: "0-100 km/h in 9.8 sec",
    top_speed: 175,
    seats: 7,
    mpg: "30.5",
    warranty: "3 years or 100,000 km",
    category: "MPV",
    engine: 1986,
    power: 150,
    torque: 193,
    cover: noah.src,
    brand: "Toyota",
    interior: {
      description:
        "Inside, the Toyota Noah provides comfortable seating for up to eight passengers with premium fabric upholstery. It includes a touchscreen infotainment system with Bluetooth and USB connectivity, as well as a rear air conditioning system. The spacious cabin and configurable seating add convenience and comfort for families.",
      covers: [
        {
          url: noahInt1.src,
        },
        {
          url: noahInt2.src,
        },
        {
          url: noahInt3.src,
        },
      ],
    },

    exterior: {
      description:
        "The Toyota Noah features a modern, streamlined design with a large front grille and LED headlamps for enhanced visibility. The exterior includes sliding doors for convenient access, 16-inch alloy wheels, and roof rails for added storage capacity, making it a practical choice for families on the go.",
      covers: [
        {
          url: noahExt1.src,
        },
        {
          url: noahExt2.src,
        },
        {
          url: noahExt3.src,
        },
      ],
    },

    safety_features: {
      features: [
        { name: "Airbags", description: "Front and side airbags" },
        {
          name: "Assistance Systems",
          description: "Pre-Collision System, Lane Departure Alert",
        },
        {
          name: "Parking",
          description: "Rear-view camera with Parking Assist",
        },
      ],
    },
    technologies: {
      features: [
        {
          name: "Connectivity",
          description: "Bluetooth, USB ports",
        },
        {
          name: "Advanced Driver Assistance",
          description:
            "Adaptive Cruise Control, Automatic High Beam, Road Sign Assist",
        },
      ],
    },
  },
  {
    slug: "honda-stepwagon",
    name: "Honda Stepwagon",
    description:
      "The Honda Stepwagon is a family-friendly MPV equipped with a 1.5L turbocharged engine, offering a blend of efficiency and performance. Its spacious cabin and advanced safety features make it a reliable choice for family transport.",
    engine_type: "1.5L Turbocharged Engine",
    transmission: "CVT Automatic",
    fuel_efficiency: "15.0",
    drive_type: "Front-Wheel Drive (FWD)",
    acceleration: "0-100 km/h in 10.0 sec",
    top_speed: 180,
    seats: 8,
    mpg: "35.3",
    warranty: "3 years or 100,000 km",
    category: "MPV",
    engine: 1496,
    power: 150,
    torque: 203,
    cover: stepwagon.src,
    brand: "Honda",
    interior: {
      description:
        "The Stepwagon’s interior is designed for comfort with cloth upholstery, a 7-inch touchscreen display with Apple CarPlay and Android Auto, and a tri-zone climate control system. Its spacious layout includes foldable rear seats, providing flexibility for transporting passengers and cargo alike.",
      covers: [
        {
          url: wagonInt1.src,
        },
        {
          url: wagonInt2.src,
        },
        {
          url: wagonInt3.src,
        },
      ],
    },

    exterior: {
      description:
        "On the exterior, the Honda Stepwagon showcases a clean design with LED headlights and a bold grille. It’s equipped with 16-inch alloy wheels and dual sliding doors, providing easy access to rear seats, which is ideal for family use.",
      covers: [
        {
          url: wagonExt1.src,
        },
        {
          url: wagonExt2.src,
        },
        {
          url: wagonExt3.src,
        },
      ],
    },

    safety_features: {
      features: [
        { name: "Airbags", description: "Front and side airbags" },
        {
          name: "Assistance Systems",
          description:
            "Collision Mitigation Braking System, Lane Keeping Assist",
        },
        { name: "Parking", description: "Multi-angle rear-view camera" },
      ],
    },
    technologies: {
      features: [
        {
          name: "Connectivity",
          description: "Bluetooth, USB ports, wireless charging",
        },
        {
          name: "Advanced Driver Assistance",
          description: " Adaptive Cruise Control, Traffic Sign Recognition",
        },
      ],
    },
  },

  {
    slug: "honda-fit",
    name: "Honda Fit",
    description:
      "The Honda Fit is a compact and fuel-efficient hatchback powered by a 1.5L engine, known for its versatility and practicality. It combines a spacious interior with a small footprint, making it ideal for urban driving.",
    engine_type: "1.5L 4-cylinder Engine",
    transmission: "CVT Automatic",
    fuel_efficiency: "18.0",
    drive_type: "Front-Wheel Drive (FWD)",
    acceleration: "0-100 km/h in 11.2 sec",
    top_speed: 165,
    seats: 5,
    mpg: "42.4",
    warranty: "3 years or 100,000 km",
    category: "Compact",
    engine: 1498,
    power: 130,
    torque: 155,
    cover: fit.src,
    brand: "Honda",
    interior: {
      description:
        "The Honda Fit’s interior is surprisingly spacious, with Magic Seat configurations that allow for flexible cargo and seating arrangements. It includes a touchscreen infotainment system, Bluetooth connectivity, and air conditioning, making it both practical and comfortable.",
      covers: [
        {
          url: fitInt1.src,
        },
        {
          url: fitInt2.src,
        },
        {
          url: fitInt3.src,
        },
      ],
    },

    exterior: {
      description:
        "The Honda Fit features a compact yet sporty design with halogen headlamps and 15-inch steel wheels. Its aerodynamic shape and rear spoiler give it a modern look, while its small size makes it easy to maneuver in the city.",
      covers: [
        {
          url: fitExt1.src,
        },
        {
          url: fitExt2.src,
        },
        {
          url: fitExt3.src,
        },
      ],
    },

    safety_features: {
      features: [
        { name: "Airbags", description: "Front and side airbags" },
        {
          name: "Assistance Systems",
          description: "Vehicle Stability Assist, Lane Keeping Assist",
        },
        { name: "Parking", description: "Rear-view camera" },
      ],
    },
    technologies: {
      features: [
        {
          name: "Connectivity",
          description: "Bluetooth, USB ports",
        },
        {
          name: "Advanced Driver Assistance",
          description: "Cruise control, Collision Mitigation Braking System",
        },
      ],
    },
  },

  {
    slug: "toyota-prius",
    name: "Toyota Prius",
    description:
      "The Toyota Prius is an iconic hybrid vehicle, powered by a 1.8L engine combined with an electric motor for outstanding fuel efficiency. Known for its eco-friendly design, the Prius provides a smooth and quiet driving experience.",
    engine_type: "1.8L Hybrid Engine",
    transmission: "CVT Automatic",
    fuel_efficiency: "22.0",
    drive_type: "Front-Wheel Drive (FWD)",
    acceleration: "0-100 km/h in 10.5 sec",
    top_speed: 180,
    seats: 5,
    mpg: "51.8",
    warranty: "5 years or 100,000 km",
    category: "Hybrid",
    engine: 1798,
    power: 121,
    torque: 142,
    cover: prius.src,
    brand: "Toyota",
    interior: {
      description:
        "Inside, the Prius offers a high-tech, comfortable cabin with fabric seats, a 7-inch touchscreen with Apple CarPlay and Android Auto, and dual-zone climate control. Its spacious layout and quiet cabin enhance the driving experience for eco-conscious drivers.",
      covers: [
        {
          url: priusInt1.src,
        },
        {
          url: priusInt2.src,
        },
        {
          url: priusInt3.src,
        },
      ],
    },

    exterior: {
      description:
        "The Prius features a futuristic design with sharp lines, LED headlamps, and 15-inch alloy wheels for improved aerodynamics. Its unique shape reflects its hybrid technology and makes a statement on the road.",
      covers: [
        {
          url: priusExt1.src,
        },
        {
          url: priusExt2.src,
        },
        {
          url: priusExt3.src,
        },
      ],
    },

    safety_features: {
      features: [
        { name: "Airbags", description: "Front and side airbags" },
        {
          name: "Assistance Systems",
          description: "Pre-Collision System, Lane Departure Alert",
        },
        { name: "Parking", description: "Rear-view camera with Park Assist" },
      ],
    },
    technologies: {
      features: [
        {
          name: "Connectivity",
          description: "Bluetooth, USB ports, wireless charging",
        },
        {
          name: "Advanced Driver Assistance",
          description: "Adaptive Cruise Control, Road Sign Assist",
        },
      ],
    },
  },

  {
    slug: "toyota-vellfire",
    name: "Toyota Vellfire",
    description:
      "The Toyota Vellfire is a luxurious and spacious MPV, powered by a 2.5L engine, designed for premium comfort and performance. With a high-end interior and advanced features, it’s suited for executive and family transport.",
    engine_type: "2.5L 4-cylinder Engine",
    transmission: "CVT Automatic",
    fuel_efficiency: " 11.0",
    drive_type: "Front-Wheel Drive (FWD)",
    acceleration: "0-100 km/h in 9.5 sec",
    top_speed: 180,
    seats: 7,
    mpg: "25.8",
    warranty: "3 years or 100,000 km",
    category: "MPV",
    engine: 2494,
    power: 167,
    torque: 235,
    cover: velfire.src,
    brand: "Toyota",
    interior: {
      description:
        "The Vellfire’s interior is equipped with leather upholstery, power-adjustable seats, and a 10-inch infotainment system with Apple CarPlay. The cabin offers ambient lighting, dual-zone climate control, and plenty of room for seven passengers, providing a luxurious experience.",
      covers: [
        {
          url: velfireInt1.src,
        },
        {
          url: velfireInt2.src,
        },
        {
          url: velfireInt3.src,
        },
      ],
    },

    exterior: {
      description:
        "The Vellfire showcases a bold exterior with LED headlights, a chrome-accented grille, and 18-inch alloy wheels. Its refined design and dual power-sliding doors add a touch of elegance to its appearance.",
      covers: [
        {
          url: velfireExt1.src,
        },
        {
          url: velfireExt2.src,
        },
        {
          url: velfireExt3.src,
        },
      ],
    },

    safety_features: {
      features: [
        { name: "Airbags", description: "Front and side airbags" },
        {
          name: "Assistance Systems",
          description: "Blind Spot Monitor, Rear Cross-Traffic Alert",
        },
        { name: "Parking", description: "360-degree camera with Park Assist" },
      ],
    },
    technologies: {
      features: [
        {
          name: "Connectivity",
          description: "Bluetooth, USB-C ports, wireless charging",
        },
        {
          name: "Advanced Driver Assistance",
          description: "Adaptive Cruise Control, Lane Tracing Assist",
        },
      ],
    },
  },

  {
    slug: "toyota-alphard",
    name: "Toyota Alphard",
    description:
      "The Toyota Alphard is a top-tier luxury MPV with a 3.5L V6 engine, providing ample power and smooth performance. It’s known for its premium comfort and sophisticated features, ideal for both executives and families.",
    engine_type: "3.5L V6 Engine",
    transmission: "8-speed Automatic",
    fuel_efficiency: "10.0",
    drive_type: "All-Wheel Drive (AWD)",
    acceleration: "0-100 km/h in 8.0 sec",
    top_speed: 210,
    seats: 7,
    mpg: "23.5",
    warranty: "3 years or 100,000 km",
    category: "MPV",
    engine: 3456,
    power: 296,
    torque: 361,
    cover: alphard.src,
    brand: "Toyota",
    interior: {
      description:
        "Inside, the Alphard features premium leather seats, an 8-inch infotainment screen with Apple CarPlay and Android Auto, and tri-zone climate control. The spacious cabin with captain seats in the second row offers a first-class travel experience.",
      covers: [
        {
          url: alphardInt1.src,
        },
        {
          url: alphardInt2.src,
        },
        {
          url: alphardInt3.src,
        },
      ],
    },

    exterior: {
      description:
        "The Alphard has a commanding presence with its large chrome grille, LED headlights, and 18-inch alloy wheels. The sleek lines and dual power-sliding doors add a luxurious touch to this high-end MPV.",
      covers: [
        {
          url: alphardExt1.src,
        },
        {
          url: alphardExt2.src,
        },
        {
          url: alphardExt3.src,
        },
      ],
    },
    safety_features: {
      features: [
        { name: "Airbags", description: "Front, side, and curtain airbags" },
        {
          name: "Assistance Systems",
          description: "Pre-Collision System, Blind Spot Monitor",
        },
        {
          name: "Parking",
          description: "360-degree camera with Intelligent Park Assist",
        },
      ],
    },
    technologies: {
      features: [
        {
          name: "Connectivity",
          description: "Bluetooth, USB-C ports, wireless charging",
        },
        {
          name: "Advanced Driver Assistance",
          description:
            "Adaptive Cruise Control, Lane Departure Alert, Road Sign Assist",
        },
      ],
    },
  },

  {
    slug: "honda-freed",
    name: "Honda Freed",
    description:
      "The Honda Freed is a compact MPV with a 1.5L engine, designed for families seeking efficient and versatile transportation. Its compact size combined with a spacious interior makes it ideal for urban use.",
    engine_type: "1.5L 4-cylinder Engine",
    transmission: "CVT Automatic",
    fuel_efficiency: "16.5",
    drive_type: "Front-Wheel Drive (FWD)",
    acceleration: "0-100 km/h in 12.0 sec",
    top_speed: 160,
    seats: 7,
    mpg: "39.0",
    warranty: "3 years or 100,000 km",
    category: "MPV",
    engine: 1496,
    power: 129,
    torque: 155,
    cover: freed.src,
    brand: "Honda",
    interior: {
      description:
        "The Freed’s interior includes fabric seating, a touchscreen infotainment system, and rear air conditioning. It’s built for practicality, offering flexible seating configurations and ample space for passengers and cargo.",
      covers: [
        {
          url: freedInt1.src,
        },
        {
          url: freedInt2.src,
        },
        {
          url: freedInt3.src,
        },
      ],
    },

    exterior: {
      description:
        "The exterior of the Freed is simple yet modern, with a sleek front grille, halogen headlights, and 15-inch alloy wheels. Sliding doors and a compact design make it easy to maneuver and park in tight spaces.",
      covers: [
        {
          url: freedExt1.src,
        },
        {
          url: freedExt2.src,
        },
        {
          url: freedExt3.src,
        },
      ],
    },

    safety_features: {
      features: [
        {
          name: "Airbags",
          description: "Front and side airbags",
        },
        {
          name: "Assistance Systems",
          description:
            "Collision Mitigation Braking System, Lane Keeping Assist",
        },
        {
          name: "Parking",
          description: "Rear-view camera",
        },
      ],
    },

    technologies: {
      features: [
        {
          name: "Connectivity",
          description: "Bluetooth, USB ports",
        },
        {
          name: "Advanced Driver Assistance",
          description: "Adaptive Cruise Control, Traffic Sign Recognition",
        },
      ],
    },
  },

  {
    slug: "honda-vezel",
    name: "Honda Vezel",
    description:
      "The Honda Vezel is a compact SUV with a 1.5L engine, offering a balance of fuel efficiency and versatility. Its compact size and stylish design make it ideal for city driving and outdoor adventures",
    engine_type: "1.5L 4-cylinder Engine",
    transmission: "CVT Automatic",
    fuel_efficiency: "Estimated at 17.0 km/l",
    drive_type: "Front-Wheel Drive (FWD)",
    acceleration: "0-100 km/h in 11.5 sec",
    top_speed: 175,
    seats: 5,
    mpg: "40.0",
    warranty: "3 years or 100,000 km",
    category: "SUV",
    engine: 1496,
    power: 129,
    torque: 155,
    cover: vezel.src,
    brand: "Honda",
    interior: {
      description:
        "Inside, the Vezel offers a comfortable cabin with cloth upholstery, a 7-inch infotainment screen, and automatic climate control. It also includes versatile Magic Seat configurations, maximizing cargo space when needed.",
      covers: [
        {
          url: vezelInt1.src,
        },
        {
          url: vezelInt2.src,
        },
        {
          url: vezelInt3.src,
        },
      ],
    },

    exterior: {
      description:
        "The Honda Vezel features a sporty exterior with LED headlights, 16-inch alloy wheels, and a modern front grille. The compact SUV design combines functionality with a stylish, urban-friendly look.",
      covers: [
        {
          url: vezelExt1.src,
        },
        {
          url: vezelExt2.src,
        },
        {
          url: vezelExt3.src,
        },
      ],
    },

    safety_features: {
      features: [
        {
          name: "Airbags",
          description: "Front, side, and curtain airbags",
        },
        {
          name: "Assistance Systems",
          description:
            "Lane Keeping Assist, Collision Mitigation Braking System",
        },
        {
          name: "Parking",
          description: "Rear-view camera with Park Assist",
        },
      ],
    },

    technologies: {
      features: [
        {
          name: "Connectivity",
          description: "Bluetooth, USB ports, wireless charging",
        },
        {
          name: "Advanced Driver Assistance",
          description: "Adaptive Cruise Control, Traffic Sign Recognition",
        },
      ],
    },
  },

  {
    slug: "mercedes-benz-gla200",
    name: "Mercedes-Benz GLA200",
    description:
      "The Mercedes-Benz GLA200 (2023) is a sleek and versatile luxury SUV with a 1.3L turbocharged engine and 7G-DCT automatic transmission for both power and efficiency. It features a premium interior with leather seats, dual-zone climate control, and a 10.25-inch MBUX infotainment system. With advanced safety features like Active Brake Assist and Blind Spot Assist, the GLA200 offers a secure and stylish driving experience.",
    engine_type: "1.3L 4-cylinder Turbocharged Engine",
    transmission: "7G-DCT Automatic Transmission",
    fuel_efficiency: "6.0L/100km (approx. 16.7 km/l)",
    drive_type: "Front-Wheel Drive (FWD)",
    acceleration: "0-100 km/h in 8.7 seconds",
    top_speed: 210,
    seats: 5,
    mpg: "39.2",
    warranty: "3 years or 100,000 km (whichever comes first)",
    category: "SUV",
    engine: 1332,
    power: 161,
    torque: 250,
    cover: gla200.src,
    brand: "Mercedes-Benz",
    interior: {
      description:
        "The Mercedes-Benz GLA200 (2023) offers a luxurious interior with premium leather upholstery and adjustable lumbar support for maximum comfort. It features a 10.25-inch touchscreen infotainment system with MBUX, Apple CarPlay, and Android Auto integration, making it easy to stay connected. The dual-zone automatic climate control ensures personalized comfort, while the panoramic sliding sunroof provides a sense of openness. With 435 liters of cargo space, expandable by folding the rear seats, the GLA200 is both stylish and practical.",
      covers: [
        {
          url: gla200Int1.src,
        },
        {
          url: gla200Int2.src,
        },
        {
          url: gla200Int3.src,
        },
      ],
    },

    exterior: {
      description:
        "On the exterior, a striking design with an aggressive front grille and sleek lines that emphasize its sporty character. It rides on 18-inch alloy wheels and is equipped with LED High Performance headlamps and LED tail lights, ensuring visibility and safety while adding to the vehicle’s modern appeal.",
      covers: [
        {
          url: gla200Ext1.src,
        },
        {
          url: gla200Ext2.src,
        },
        {
          url: gla200Ext3.src,
        },
      ],
    },
    safety_features: {
      features: [
        {
          name: "Airbags",
          description: "Front, side, and curtain airbags",
        },
        {
          name: "Assistance Systems",
          description:
            "Assistance Systems: Active Brake Assist, Blind Spot Assist, Lane Keeping Assist",
        },
        {
          name: "Parking",
          description: "Rear-view camera with Park Assist",
        },
      ],
    },

    technologies: {
      features: [
        {
          name: "Connectivity",
          description: "Bluetooth, USB-C ports, wireless charging",
        },
        {
          name: "Advanced Driver Assistance",
          description:
            "Cruise control, Active Distance Assist DISTRONIC, Traffic Sign Assist",
        },
      ],
    },
  },

  {
    slug: "mercedes-benz-glc300",
    name: "Mercedes-Benz GLC300",
    description:
      "The Mercedes-Benz GLC 300 is a premium SUV with a 2.0L turbocharged engine, known for its powerful performance and luxurious features. It combines a stylish exterior with advanced technology for a superior driving experience.",
    engine_type: "2.0L 4-cylinder Turbocharged Engine",
    transmission: "9-speed Automatic Transmission",
    fuel_efficiency: "7.5L/100km (approx. 13.3 km/l)",
    drive_type: "All-Wheel Drive (AWD)",
    acceleration: "0-100 km/h in 6.2 sec",
    top_speed: 240,
    seats: 5,
    mpg: "31.3",
    warranty: "3 years or 100,000 km",
    category: "SUV",
    engine: 1991,
    power: 254,
    torque: 370,
    cover: glc300.src,
    brand: "Mercedes-Benz",
    interior: {
      description:
        "Inside, the GLC 300 offers premium leather upholstery, a 10.25-inch MBUX touchscreen, and dual-zone automatic climate control. It includes a panoramic sunroof and spacious cargo area, providing both luxury and practicality.",
      covers: [
        {
          url: gla300Int1.src,
        },
        {
          url: gla300Int2.src,
        },
        {
          url: gla300Int3.src,
        },
      ],
    },

    exterior: {
      description:
        "The GLC 300 features a bold exterior with a chrome-accented grille, LED High-Performance headlamps, and 19-inch alloy wheels. Its sleek lines and sophisticated design make it stand out as a luxury SUV.",
      covers: [
        {
          url: gla300Ext1.src,
        },
        {
          url: gla300Ext2.src,
        },
        {
          url: gla300Ext3.src,
        },
      ],
    },

    safety_features: {
      features: [
        {
          name: "Airbags",
          description: "Front, side, and curtain airbags",
        },
        {
          name: "Assistance Systems",
          description:
            "Active Brake Assist, Blind Spot Assist, Lane Keeping Assist",
        },
        {
          name: "Parking",
          description: "360-degree camera with Park Assist",
        },
      ],
    },

    technologies: {
      features: [
        {
          name: "Connectivity",
          description: "Bluetooth, USB-C ports, wireless charging",
        },
        {
          name: "Advanced Driver Assistance",
          description:
            "Adaptive Cruise Control, Active Distance Assist DISTRONIC, Traffic Sign Assist",
        },
      ],
    },
  },
];

export const allCategories: Category[] = [
  {
    id: "2",
    name: "MPV",
    cars: [
      {
        slug: "toyota-vellfire",
        name: "Toyota Vellfire",
        engine_type: "2.5L 4-cylinder Engine",
        transmission: "CVT Automatic",
        fuel_efficiency: " 11.0",
        drive_type: "Front-Wheel Drive (FWD)",
        acceleration: "0-100 km/h in 9.5 sec",
        top_speed: 180,
        seats: 7,
        mpg: "25.8",
        warranty: "3 years or 100,000 km",
        category: "MPV",
        engine: 2494,
        power: 167,
        torque: 235,
        cover: velfire.src,
        brand: "Toyota",
      },

      {
        slug: "toyota-alphard",
        name: "Toyota Alphard",
        engine_type: "3.5L V6 Engine",
        transmission: "8-speed Automatic",
        fuel_efficiency: "10.0",
        drive_type: "All-Wheel Drive (AWD)",
        acceleration: "0-100 km/h in 8.0 sec",
        top_speed: 210,
        seats: 7,
        mpg: "23.5",
        warranty: "3 years or 100,000 km",
        category: "MPV",
        engine: 3456,
        power: 296,
        torque: 361,
        cover: alphard.src,
        brand: "Toyota",
      },

      {
        slug: "honda-freed",
        name: "Honda Freed",
        engine_type: "1.5L 4-cylinder Engine",
        transmission: "CVT Automatic",
        fuel_efficiency: "16.5",
        drive_type: "Front-Wheel Drive (FWD)",
        acceleration: "0-100 km/h in 12.0 sec",
        top_speed: 160,
        seats: 7,
        mpg: "39.0",
        warranty: "3 years or 100,000 km",
        category: "MPV",
        engine: 1496,
        power: 129,
        torque: 155,
        cover: freed.src,
        brand: "Honda",
        interior: {
          description: "",
          covers: [
            {
              url: freedInt1.src,
            },
            {
              url: freedInt2.src,
            },
            {
              url: freedInt3.src,
            },
          ],
        },

        exterior: {
          description: "",
          covers: [
            {
              url: freedExt1.src,
            },
            {
              url: freedExt2.src,
            },
            {
              url: freedExt3.src,
            },
          ],
        },

        safety_features: {
          features: [
            {
              name: "Airbags",
              description: "Front and side airbags",
            },
            {
              name: "Assistance Systems",
              description:
                "Collision Mitigation Braking System, Lane Keeping Assist",
            },
            {
              name: "Parking",
              description: "Rear-view camera",
            },
          ],
        },

        technologies: {
          features: [
            {
              name: "Connectivity",
              description: "Bluetooth, USB ports",
            },
            {
              name: "Advanced Driver Assistance",
              description: "Adaptive Cruise Control, Traffic Sign Recognition",
            },
          ],
        },
      },

      {
        slug: "suzuki-landy",
        name: "Suzuki Landy",
        engine_type: "2.0L 4-cylinder Engine",
        transmission: "Automatic",
        fuel_efficiency: "12.5",
        drive_type: "Front-Wheel Drive",
        acceleration: "0-100 km/h in 10.5 sec",
        top_speed: 180,
        seats: 7,
        mpg: "29.4",
        warranty: "3 years or 100,000 km",
        category: "MPV",
        engine: 1997,
        power: 144,
        torque: 196,
        cover: landy.src,
        brand: "Suzuki",
      },
      {
        slug: "toyota-noah",
        name: "Toyota Noah",
        engine_type: "2.0L 4-cylinder Engine",
        transmission: "CVT Automatic",
        fuel_efficiency: "13.0",
        drive_type: "Front-Wheel Drive (FWD)",
        acceleration: "0-100 km/h in 9.8 sec",
        top_speed: 175,
        seats: 7,
        mpg: "30.5",
        warranty: "3 years or 100,000 km",
        category: "MPV",
        engine: 1986,
        power: 150,
        torque: 193,
        cover: noah.src,
        brand: "Toyota",
      },
      {
        slug: "suzuki-landy",
        name: "Honda Stepwagon",
        engine_type: "1.5L Turbocharged Engine",
        transmission: "CVT Automatic",
        fuel_efficiency: "15.0",
        drive_type: "Front-Wheel Drive (FWD)",
        acceleration: "0-100 km/h in 10.0 sec",
        top_speed: 180,
        seats: 8,
        mpg: "35.3",
        warranty: "3 years or 100,000 km",
        category: "MPV",
        engine: 1496,
        power: 150,
        torque: 203,
        cover: stepwagon.src,
        brand: "Honda",
      },
    ],
  },

  {
    id: "3",
    name: "SUV",
    cars: [
      {
        slug: "honda-vezel",
        name: "Honda Vezel",
        engine_type: "1.5L 4-cylinder Engine",
        transmission: "CVT Automatic",
        fuel_efficiency: "Estimated at 17.0 km/l",
        drive_type: "Front-Wheel Drive (FWD)",
        acceleration: "0-100 km/h in 11.5 sec",
        top_speed: 175,
        seats: 5,
        mpg: "40.0",
        warranty: "3 years or 100,000 km",
        category: "SUV",
        engine: 1496,
        power: 129,
        torque: 155,
        cover: vezel.src,
        brand: "Honda",
      },

      {
        slug: "mercedes-benz-gla200",
        name: "Mercedes-Benz GLA200",
        engine_type: " ",
        transmission: " ",
        fuel_efficiency: " ",
        drive_type: " ",
        acceleration: " ",
        top_speed: 0,
        seats: 0,
        mpg: "",
        warranty: "",
        category: "SUV",
        engine: 1332,
        power: 161,
        torque: 250,
        cover: gla200.src,
        brand: "Honda",
      },

      {
        slug: "mercedes-benz-glc300",
        name: "Mercedes-Benz GLC300",
        engine_type: "2.0L 4-cylinder Turbocharged Engine",
        transmission: "9-speed Automatic Transmission",
        fuel_efficiency: "7.5L/100km (approx. 13.3 km/l)",
        drive_type: "All-Wheel Drive (AWD)",
        acceleration: "0-100 km/h in 6.2 sec",
        top_speed: 240,
        seats: 5,
        mpg: "31.3",
        warranty: "3 years or 100,000 km",
        category: "SUV",
        engine: 1991,
        power: 254,
        torque: 370,
        cover: glc300.src,
        brand: "Mercedes-Benz",
      },
    ],
  },

  {
    id: "4",
    name: "Compact",
    cars: [
      {
        slug: "honda-fit",
        name: "Honda Fit",
        engine_type: "1.5L 4-cylinder Engine",
        transmission: "CVT Automatic",
        fuel_efficiency: "18.0",
        drive_type: "Front-Wheel Drive (FWD)",
        acceleration: "0-100 km/h in 11.2 sec",
        top_speed: 165,
        seats: 5,
        mpg: "42.4",
        warranty: "3 years or 100,000 km",
        category: "Compact",
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
        slug: "toyota-prius",
        name: "Toyota Prius",
        engine_type: "1.8L Hybrid Engine",
        transmission: "CVT Automatic",
        fuel_efficiency: "22.0",
        drive_type: "Front-Wheel Drive (FWD)",
        acceleration: "0-100 km/h in 10.5 sec",
        top_speed: 180,
        seats: 5,
        mpg: "51.8",
        warranty: "5 years or 100,000 km",
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
        slug: "toyota-noah",
        name: "Toyota Noah",
        engine_type: "2.0L 4-cylinder Engine",
        transmission: "CVT Automatic",
        fuel_efficiency: "13.0",
        drive_type: "Front-Wheel Drive (FWD)",
        acceleration: "0-100 km/h in 9.8 sec",
        top_speed: 175,
        seats: 7,
        mpg: "30.5",
        warranty: "3 years or 100,000 km",
        category: "MPV",
        engine: 1986,
        power: 150,
        torque: 193,
        cover: noah.src,
        brand: "Toyota",
      },
      {
        slug: "toyota-prius",
        name: "Toyota Prius",
        engine_type: "1.8L Hybrid Engine",
        transmission: "CVT Automatic",
        fuel_efficiency: "22.0",
        drive_type: "Front-Wheel Drive (FWD)",
        acceleration: "0-100 km/h in 10.5 sec",
        top_speed: 180,
        seats: 5,
        mpg: "51.8",
        warranty: "5 years or 100,000 km",
        category: "Hybrid",
        engine: 1798,
        power: 121,
        torque: 142,
        cover: prius.src,
        brand: "Toyota",
      },
      {
        slug: "toyota-vellfire",
        name: "Toyota Vellfire",
        engine_type: "2.5L 4-cylinder Engine",
        transmission: "CVT Automatic",
        fuel_efficiency: " 11.0",
        drive_type: "Front-Wheel Drive (FWD)",
        acceleration: "0-100 km/h in 9.5 sec",
        top_speed: 180,
        seats: 7,
        mpg: "25.8",
        warranty: "3 years or 100,000 km",
        category: "MPV",
        engine: 2494,
        power: 167,
        torque: 235,
        cover: velfire.src,
        brand: "Toyota",
      },

      {
        slug: "toyota-alphard",
        name: "Toyota Alphard",
        engine_type: "3.5L V6 Engine",
        transmission: "8-speed Automatic",
        fuel_efficiency: "10.0",
        drive_type: "All-Wheel Drive (AWD)",
        acceleration: "0-100 km/h in 8.0 sec",
        top_speed: 210,
        seats: 7,
        mpg: "23.5",
        warranty: "3 years or 100,000 km",
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
        slug: "suzuki-landy",
        name: "Honda Stepwagon",
        engine_type: "1.5L Turbocharged Engine",
        transmission: "CVT Automatic",
        fuel_efficiency: "15.0",
        drive_type: "Front-Wheel Drive (FWD)",
        acceleration: "0-100 km/h in 10.0 sec",
        top_speed: 180,
        seats: 8,
        mpg: "35.3",
        warranty: "3 years or 100,000 km",
        category: "MPV",
        engine: 1496,
        power: 150,
        torque: 203,
        cover: stepwagon.src,
        brand: "Honda",
      },

      {
        slug: "honda-fit",
        name: "Honda Fit",
        engine_type: "1.5L 4-cylinder Engine",
        transmission: "CVT Automatic",
        fuel_efficiency: "18.0",
        drive_type: "Front-Wheel Drive (FWD)",
        acceleration: "0-100 km/h in 11.2 sec",
        top_speed: 165,
        seats: 5,
        mpg: "42.4",
        warranty: "3 years or 100,000 km",
        category: "Compact",
        engine: 1498,
        power: 130,
        torque: 155,
        cover: fit.src,
        brand: "Honda",
      },
      {
        slug: "honda-freed",
        name: "Honda Freed",
        engine_type: "1.5L 4-cylinder Engine",
        transmission: "CVT Automatic",
        fuel_efficiency: "16.5",
        drive_type: "Front-Wheel Drive (FWD)",
        acceleration: "0-100 km/h in 12.0 sec",
        top_speed: 160,
        seats: 7,
        mpg: "39.0",
        warranty: "3 years or 100,000 km",
        category: "MPV",
        engine: 1496,
        power: 129,
        torque: 155,
        cover: freed.src,
        brand: "Honda",
      },

      {
        slug: "honda-vezel",
        name: "Honda Vezel",
        engine_type: "1.5L 4-cylinder Engine",
        transmission: "CVT Automatic",
        fuel_efficiency: "Estimated at 17.0 km/l",
        drive_type: "Front-Wheel Drive (FWD)",
        acceleration: "0-100 km/h in 11.5 sec",
        top_speed: 175,
        seats: 5,
        mpg: "40.0",
        warranty: "3 years or 100,000 km",
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
    name: "Mercedes-Benz",
    cars: [
      {
        slug: "mercedes-benz-gla200",
        name: "Mercedes-Benz GLA200",
        engine_type: " ",
        transmission: " ",
        fuel_efficiency: " ",
        drive_type: " ",
        acceleration: " ",
        top_speed: 0,
        seats: 0,
        mpg: "",
        warranty: "",
        category: "SUV",
        engine: 1332,
        power: 161,
        torque: 250,
        cover: gla200.src,
        brand: "Mercedes-Benz",
      },

      {
        slug: "mercedes-benz-glc300",
        name: "Mercedes-Benz GLC300",
        engine_type: "2.0L 4-cylinder Turbocharged Engine",
        transmission: "9-speed Automatic Transmission",
        fuel_efficiency: "7.5L/100km (approx. 13.3 km/l)",
        drive_type: "All-Wheel Drive (AWD)",
        acceleration: "0-100 km/h in 6.2 sec",
        top_speed: 240,
        seats: 5,
        mpg: "31.3",
        warranty: "3 years or 100,000 km",
        category: "SUV",
        engine: 1991,
        power: 254,
        torque: 370,
        cover: glc300.src,
        brand: "Mercedes-Benz",
      },
    ],
  },

  {
    id: "4",
    name: "Suzuki",
    cars: [
      {
        slug: "suzuki-landy",
        name: "Suzuki Landy",
        engine_type: "2.0L 4-cylinder Engine",
        transmission: "Automatic",
        fuel_efficiency: "12.5",
        drive_type: "Front-Wheel Drive",
        acceleration: "0-100 km/h in 10.5 sec",
        top_speed: 180,
        seats: 7,
        mpg: "29.4",
        warranty: "3 years or 100,000 km",
        category: "MPV",
        engine: 1997,
        power: 144,
        torque: 196,
        cover: landy.src,
        brand: "Suzuki",
      },
    ],
  },
];
