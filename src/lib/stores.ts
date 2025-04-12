export interface Stores {
  id: number;
  name: string;
  logo: string;
  bgColor: string;
  description?: string;
  category?: string;
}
export const stores: Stores[] = [
  {
    id: 1,
    name: "Adore Beauty",
    logo: "/placeholder.svg?height=60&width=60",
    bgColor: "bg-black",
    description: "Adore Beauty",
    category: "Beauty",
  },
  {
    id: 2,
    name: "GEE UP",
    logo: "/placeholder.svg?height=60&width=60",
    bgColor: "bg-purple-500",
    description: "GEE UP",
    category: "Cosmetics",
  },
  {
    id: 3,
    name: "SNEAKERMODE",
    logo: "/placeholder.svg?height=60&width=60",
    bgColor: "bg-white",
    category: "Footwear",
  },
  {
    id: 4,
    name: "TWD 4x4 Melbourne",
    logo: "/placeholder.svg?height=60&width=60",
    bgColor: "bg-black",
    category: "Automotive",
  },
  {
    id: 5,
    name: "MUSCLE REPUBLIC",
    logo: "/placeholder.svg?height=60&width=60",
    bgColor: "bg-red-500",
    category: "Clothing",
  },
  {
    id: 6,
    name: "Interior Secrets",
    logo: "/placeholder.svg?height=60&width=60",
    bgColor: "bg-pink-500",
    category: "Interior",
  },
  {
    id: 7,
    name: "InCharge Automotive",
    logo: "/placeholder.svg?height=60&width=60",
    bgColor: "bg-black",
    category: "Automotive",
  },
];
