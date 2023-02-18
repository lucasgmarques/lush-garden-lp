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

export const productsData: IProducts[] = [
  { id: 1, image: product1, title: "Cactus Plant", price: 8 },
  { id: 2, image: product2, title: "Orquidea Plant", price: 16 },
  { id: 3, image: product3, title: "Girasol Plant", price: 16 },
  { id: 4, image: product3, title: "Girasol Plant", price: 16 },
  { id: 5, image: product3, title: "Girasol Plant", price: 16 },
  { id: 6, image: product3, title: "Girasol Plant", price: 16 },
  { id: 7, image: product3, title: "Girasol Plant", price: 16 },
  { id: 8, image: product3, title: "Girasol Plant", price: 16 },
];
