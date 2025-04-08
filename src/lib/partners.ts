interface Partner {
  name: string;
  logo: string;
  category: string;
  code: string;
  url: string;
  id: string;
  isPopular?: boolean;
}

export const partners: Partner[] = [
  {
    id: "1",
    name: "Hopkins",
    logo: "/img/hopkins_img.png",
    category: "Automotive",
    code: "LMCT+",
    url: "https://hopkins.com.au",
    isPopular: true,
  },
  {
    id: "2",
    name: "Ultra Tune",
    logo: "/img/hopkins_img.png",
    category: "Automotive",
    code: "LMCT+",
    url: "https://hopkins.com.au",
    isPopular: true,
  },
  {
    name: "MyDeal",
    logo: "/img/hopkins_img.png",
    category: "Automotive",
    code: "LMCT+",
    id: "3",
    url: "https://hopkins.com.au",
    isPopular: true,
  },
];
