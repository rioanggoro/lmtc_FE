// Define the Partner type
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
  facebook?: string;
  instagram?: string;
  website?: string;
  hasMap?: boolean;
}

// This is a sample data structure for the partners
// You can replace this with your actual data
export const partners: Partner[] = [
  {
    id: 1,
    name: "ShoeGrab - Asics Quantum",
    category: "Apparel, Retail",
    logo: "/img/hopkins_img.png",
    isPopular: true,
    discount: "20%",
    discountText:
      "20% OFF Asics Quantum Collection - must use link and code provided",
    promoCode: "LMCTASICS",
    description:
      "ShoeGrab Australia is a unique Sneaker Marketplace 100% Australian owned and operated since 2013. Prior to the launch of this site, (Nov, 2018) ShoeGrab was, and still is, a revolutionary business model. With a strong focus on developing and maintaining a humanised, warm and sincere customer experience, ShoeGrab aims to provide customers with a distinct selection of sneakers and apparel. Rewinding back to 2013, ShoeGrab empowered itself through Social Media, quickly becoming a go-to store for unique and distinctive sneakers, made available to the public at affordable prices. Pertaining towards this curated collection of sneakers, customers within Sydney were able to enjoy personalised delivery service, whereby our products were hand delivered by our very own sales consultants. Our inherent passion for sneakers and personalised delivery service allowed us to forge relationships and connect with our customers.",
    tags: ["Apparel", "Shoes", "Sneakers"],
    storeAddress:
      "ONLINE STORE - 4/165 Canterbury road Bankstown NSW 2200, AUS WIDE, AU",
    email: "info@shoegrab.com.au",
    facebook: "https://facebook.com/shoegrab",
    instagram: "https://instagram.com/shoegrab",
    website: "https://shoegrab.com.au",
    hasMap: true,
  },
  {
    id: 2,
    name: "InCharge Automotive",
    category: "Paint & Panel Repair, Automotive",
    logo: "/img/hopkins_img.png",
    isPopular: true,
    discount: "15%",
    promoCode: "LMCTAUTO15",
    tags: ["Automotive", "Repair", "Service"],
  },
  {
    id: 3,
    name: "MyDeal",
    category: "Furniture & Homeware, Electronics & Appliances",
    logo: "/img/hopkins_img.png",
    isPopular: true,
    discount: "10%",
    promoCode: "LMCTDEAL10",
    tags: ["Furniture", "Electronics", "Homeware"],
  },
  {
    id: 4,
    name: "TWD 4x4 Melbourne",
    category: "Workshops, Automotive",
    logo: "/img/hopkins_img.png",
    isPopular: true,
    discount: "20%",
    promoCode: "LMCT4X4",
    tags: ["Automotive", "4x4", "Workshops"],
  },
];
