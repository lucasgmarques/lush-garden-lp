import Image from "next/image";
import TestimonialCardProps from "../../@types/types";

export function TestimonialCard({
  title,
  description,
  image,
}: TestimonialCardProps) {
  return (
    <article className="p-8 rounded-lg bg-grey-100">
      <header className="flex items-center gap-8 mb-4">
        <Image src={image} alt="user avatar" />
        <h3 className="text-green-900 font-latoBlack">{title}</h3>
      </header>
      <p className="leading-8 text-dark-900">{description}</p>
    </article>
  );
}
