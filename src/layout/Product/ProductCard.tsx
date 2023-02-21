import { formatCurrency } from "@/utils/formatCurrency";
import Image, { StaticImageData } from "next/image";

type ProductCardProps = {
  image: StaticImageData;
  title: string;
  price: number;
};

export default function ProductCard({ image, price, title }: ProductCardProps) {
  return (
    <article className="overflow-hidden border rounded-lg border-[rgba(0,0,0,0.08)]">
      <Image src={image} alt={title} className="object-cover h-48" />
      <div className="flex flex-col justify-between p-4">
        <div className="flex justify-between">
          <h3 className="text-lg text-green-500 font-latoBlack">{title}</h3>
          <p className="mb-2 text-lg text-green-500 font-latoBlack">
            {formatCurrency(price)}
          </p>
        </div>
        <p className="mb-8 text-blue-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          dolor, ut commodi iusto earum cum? Illo dolore sapiente necessitatibus
          perferendis.
        </p>
        <button className="w-full p-2 text-green-900 transition duration-200 ease-in border border-green-500 rounded-lg hover:text-white hover:bg-green-900">
          Buy Now
        </button>
      </div>
    </article>
  );
}
