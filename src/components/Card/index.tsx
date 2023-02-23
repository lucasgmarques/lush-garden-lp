import Image from "next/image";

type CardProps = {
  image: string;
  title: string;
  description: string;
  colored?: string;
  bordered?: boolean;
};

export default function Card({
  image,
  description,
  title,
  colored,
  bordered = true,
}: CardProps) {
  return (
    <div
      className={
        colored
          ? `${colored} p-4 lg:py-4 lg:px-12 lg:text-left text-center rounded-lg`
          : `lg:text-left text-center lg:py-4 lg:px-12 ${
              bordered && "rounded-lg border-1 border-[rgba(0,0,0,0.08)] border"
            }  p-4 lg:p-12 `
      }
    >
      <Image
        className="w-full h-20 mb-8 text-center lg:h-32 lg:mb-4 lg:m-0"
        src={image}
        loading="lazy"
        alt=""
      />
      <div className="">
        <h4
          className={
            colored ? "text-white mb-2 text-xl" : "mb-2 text-xl text-green-900"
          }
        >
          {title}
        </h4>
        <p className={colored ? "text-white" : "text-dark-900"}>
          {description}
        </p>
      </div>
    </div>
  );
}
