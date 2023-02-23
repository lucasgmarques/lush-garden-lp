import Card from "@/components/Card";
import Image from "next/image";

import bgBenefits from "../../../public/images/bg-image.png";
import timeConsuming from "../../../public/time-cosuming.svg";
import growSprout from "../../../public/grow-sprout.svg";
import temperature from "../../../public/temperature.svg";
import pruning from "../../../public/pruning.svg";

const benefitsCards = [
  {
    id: 1,
    title: "Quality Product",
    description:
      "Our flowers are of the highest quality, carefully selected and sourced from reputable",
    image: timeConsuming,
  },
  {
    id: 2,
    title: "Always Fresh",
    description:
      "Our flowers are always fresh, handpicked and delivered promptly for maximum longevity and enjoyment.",
    image: growSprout,
  },
  {
    id: 3,
    title: "Work Smart",
    description:
      "We work smart, using innovative techniques and technology to streamline our processes",
    image: temperature,
  },
  {
    id: 4,
    title: "Excelent Service",
    description:
      "We pride ourselves on providing excellent service, going above and beyond to meet our customers' needs",
    image: pruning,
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="flex flex-col gap-1 lg:flex-row lg:pb-16">
      <div className="flex flex-col items-center justify-center gap-8 px-4 py-16 mx-auto text-center bg-green-900 lg:w-5/12 lg:px-16">
        <h2 className="text-2xl text-white lg:text-4xl font-latoRegular">
          All of benefits in one place!
        </h2>
        <p className="text-base leading-relaxed text-white lg:text-lg font-latoRegular">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
          cupiditate quaerat nam voluptate totam error quo facilis maiores
          expedita! Esse.
        </p>
        <button className="px-6 py-2 text-green-900 transition bg-white rounded-md hover:bg-green-500 hover:text-white">
          Check it out!
        </button>
      </div>
      <div className="grid flex-1 gap-4 px-4 py-2 lg:py-0 lg:px-2 lg:gap-2 md:grid-cols-2 lg:grid-cols-2">
        {benefitsCards.map(({ id, image, description, title }) => (
          <Card
            key={id}
            title={title}
            description={description}
            image={image}
            bordered={true}
          />
        ))}
      </div>
    </section>
  );
}
