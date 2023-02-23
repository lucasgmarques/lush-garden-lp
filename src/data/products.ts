import { StaticImageData } from "next/image";

type IProducts = {
  id: number;
  image: StaticImageData;
  title: string;
  price: number;
};

import product1 from "../../public/images/cactus.jpg";
import product2 from "../../public/images/orquidea.jpg";
import product3 from "../../public/images/girasol.jpg";
import product4 from "../../public/images/anyse.jpg";
import product5 from "../../public/images/astec.jpg";
import product6 from "../../public/images/begonia.jpg";
import product7 from "../../public/images/larkspur.jpg";
import product8 from "../../public/images/samambaia.jpg";

export const productsData: IProducts[] = [
  { id: 1, image: product1, title: "Cactus Plant", price: 8 },
  { id: 2, image: product2, title: "Orchid Plant", price: 16 },
  { id: 3, image: product3, title: "Girasol Plant", price: 16 },
  { id: 4, image: product4, title: "Anyse Plant", price: 16 },
  { id: 5, image: product5, title: "Astec Plant", price: 16 },
  { id: 6, image: product6, title: "Begonia Plant", price: 16 },
  { id: 7, image: product7, title: "Larkspur Plant", price: 16 },
  { id: 8, image: product8, title: "Samambaium Plant", price: 16 },
];
