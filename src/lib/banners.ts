export interface Banner {
  id: number;
  title: string;
  image: string;
  page: string;
  active: boolean;
  position: "Top" | "Middle" | "Bottom";
}

export const initialBanners: Banner[] = [
  {
    id: 1,
    title: "Summer Promotion",
    image: "/placeholder.svg?height=200&width=800&text=Summer+Promotion+Banner",
    page: "Home",
    active: true,
    position: "Top",
  },
  {
    id: 2,
    title: "New Giveaway",
    image: "/placeholder.svg?height=200&width=800&text=New+Giveaway+Banner",
    page: "Giveaways",
    active: true,
    position: "Middle",
  },
  {
    id: 3,
    title: "Special Offer",
    image: "/placeholder.svg?height=200&width=800&text=Special+Offer+Banner",
    page: "Discounts",
    active: false,
    position: "Bottom",
  },
];
