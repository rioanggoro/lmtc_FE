export interface Banner {
  id: number;
  title: string;
  image: string;
  page: string;
  active: boolean;
}

export const initialBanners: Banner[] = [
  {
    id: 1,
    title: "Summer Promotion",
    image: "https://statik.tempo.co/data/2024/06/20/id_1311774/1311774_720.jpg",
    page: "Dashboard",
    active: true,
  },
  {
    id: 2,
    title: "New Giveaway",
    image: "https://statik.tempo.co/data/2024/06/20/id_1311774/1311774_720.jpg",
    page: "Membership",
    active: true,
  },
  {
    id: 3,
    title: "Special Offer",
    image: "https://statik.tempo.co/data/2024/06/20/id_1311774/1311774_720.jpg",
    page: "Dashboard",
    active: false,
  },
];
