import { StaticImageData } from "next/image";

export type TestimonialCardProps = {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
};
