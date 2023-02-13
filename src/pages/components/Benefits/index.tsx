import Card from "@/components/Card";
import Image from "next/image";

import bgBenefits from "../../../../public/images/bg-image.png";
import timeConsuming from "../../../../public/time-cosuming.svg";
import growSprout from "../../../../public/grow-sprout.svg";
import temperature from "../../../../public/temperature.svg";
import pruning from "../../../../public/pruning.svg";

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
    <section className="flex flex-col items-stretch gap-1 lg:flex-row lg:py-14">
      <div className="flex-1">
        <Image
          src={bgBenefits}
          alt="An image of plants over the table"
          className="hidden object-cover w-full md:block lg:rounded-r-lg"
        />
      </div>
      <div className="grid flex-1 gap-4 px-2 py-2 lg:py-0 lg:px-2 lg:gap-2 md:grid-cols-2 lg:grid-cols-2">
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
