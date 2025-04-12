export interface Partner {
  id: number;
  name: string;
  category: string;
  logo: string;
  isPopular?: boolean;
  discount?: string;
  discountText?: string;
  promoCode?: string;
  description?: string;
  tags?: string[];
  storeAddress?: string;
  email?: string;
  phone?: string;
  facebook?: string;
  instagram?: string;
  website?: string;
  hasMap?: string;
  url?: string;
}

export const partners: Partner[] = [
  {
    id: 1,
    name: "ShoeGrab - Asics Quantum",
    category: "Apparel, Retail",
    logo: "/partner_img/shoegrab-application.png",
    isPopular: true,
    discount: "20%",
    discountText:
      "20% OFF Asics Quantum Collection - must use link and code provided",
    promoCode: "LMCTASICS",
    description:
      "ShoeGrab Australia is a unique Sneaker Marketplace 100% Australian owned and operated since 2013. Prior to the launch of this site, (Nov, 2018) ShoeGrab was, and still is, a revolutionary business model.",
    tags: ["Apparel", "Shoes", "Sneakers"],
    storeAddress:
      "ONLINE STORE - 4/165 Canterbury road Bankstown NSW 2200, AUS WIDE, AU",
    email: "info@shoegrab.com.au",
    phone: "1300 888 888",
    facebook: "https://facebook.com/shoegrab",
    instagram: "https://instagram.com/shoegrab",
    website: "https://shoegrab.com.au",
    hasMap: "/img/map.png",
    url: "https://shoegrab.com.au",
  },
  {
    id: 2,
    name: "InCharge Automotive",
    category: "Paint & Panel Repair, Automotive",
    logo: "/partner_img/elite-application.png",
    isPopular: true,
    discount: "15%",
    promoCode: "LMCTAUTO15",
    description:
      "InCharge Automotive is a leading automotive repair shop in Melbourne, offering a range of services to help keep your vehicle in top condition.",
    tags: ["Automotive", "Repair", "Service"],
    url: "https://inchargeautomotive.com.au",
  },
  {
    id: 3,
    name: "MyDeal",
    category: "Furniture & Homeware, Electronics & Appliances",
    logo: "/partner_img/autobarn-application.png",
    isPopular: true,
    discount: "10%",
    promoCode: "LMCTDEAL10",
    tags: ["Furniture", "Electronics", "Homeware"],
    url: "https://mydeal.com.au",
  },
  {
    id: 4,
    name: "TWD 4x4 Melbourne",
    category: "Workshops, Automotive",
    logo: "/partner_img/twd-application.png",
    isPopular: true,
    discount: "20%",
    promoCode: "LMCT4X4",
    tags: ["Automotive", "4x4", "Workshops"],
    url: "https://twd4x4.com.au",
  },
  {
    id: 5,
    name: "TWD 4x4 Melbourne",
    category: "Workshops, Automotive",
    logo: "/partner_img/twd-application.png",
    isPopular: true,
    discount: "20%",
    promoCode: "LMCT4X4",
    tags: ["Automotive", "4x4", "Workshops"],
    url: "https://twd4x4.com.au",
  },
  {
    id: 5,
    name: "TWD 4x4 Melbourne",
    category: "Workshops, Automotive",
    logo: "/partner_img/twd-application.png",
    isPopular: true,
    discount: "20%",
    promoCode: "LMCT4X4",
    tags: ["Automotive", "4x4", "Workshops"],
    url: "https://twd4x4.com.au",
  },
];
