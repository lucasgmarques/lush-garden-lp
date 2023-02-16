import { StaticImageData } from "next/image";

import blog1 from "../../public/images/blog-1.png";
import blog2 from "../../public/images/blog-2.png";
import blog3 from "../../public/images/blog-3.png";

type IBlogPosts = {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
  created_at: Date;
};

export const blogPosts: IBlogPosts[] = [
  {
    id: 1,
    image: blog1,
    title: "More productive with an atmosphere of greenery",
    description:
      "An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...",
    created_at: new Date(),
  },
  {
    id: 2,
    image: blog2,
    title: "The benefits of plants in your room",
    description:
      "Plants in your room can bring numerous benefits, such as improved air quality, reduced stress, and increased feelings of well-being....",
    created_at: new Date(),
  },
  {
    id: 3,
    image: blog3,
    title: "Hobbyist plants in the house",
    description:
      "Having hobbyist plants in the house is a great way to bring nature indoors. Not only do they purify the air, but they....",
    created_at: new Date(),
  },
];
