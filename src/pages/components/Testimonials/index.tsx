import avatar1 from "../../../../public/avatar-1.svg";
import avatar2 from "../../../../public/avatar-2.svg";
import avatar3 from "../../../../public/avatar-3.svg";
import TestimonialCard from "./TestimonialCard";
import { TestimonialCardProps } from "./types";

const people: TestimonialCardProps[] = [
  {
    id: 1,
    title: "Jessica Watson",
    image: avatar1,
    description:
      "“Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service.”",
  },
  {
    id: 2,
    title: "Kate Szu",
    image: avatar2,
    description:
      "“Great service, beautiful flowers, timely delivery. Highly recommend.”",
  },
  {
    id: 3,
    title: "Grace",
    image: avatar3,
    description:
      "“I am very happy with my purchase from this website, the plants were healthy and arrived on time.”",
  },
];

export default function Testimonials() {
  return (
    <section className="container p-8 mx-auto lg:p-24">
      <h2 className="mb-10 text-2xl text-center text-green-900 lg:mb-8 md:text-4xl font-latoRegular lg:text-4xl">
        What do they say about us
      </h2>

      <div className="grid gap-4 lg:gap-20 md:grid-cols-2 lg:grid-cols-3">
        {people.map((person) => (
          <TestimonialCard {...person} />
        ))}
      </div>
    </section>
  );
}
