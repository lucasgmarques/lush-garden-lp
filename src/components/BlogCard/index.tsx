import { formatDate } from "@/utils/formatDate";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { HiArrowLongRight, HiCalendar } from "react-icons/hi2";

type BlogPostsProps = {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
  created_at: Date;
};

export default function BlogCard({
  id,
  created_at,
  description,
  image,
  title,
}: BlogPostsProps) {
  return (
    <article className="overflow-hidden rounded-t-lg">
      <Image
        className="object-cover w-full h-48 mb-4 lg:h-64"
        src={image}
        alt="blog image"
      />
      <div>
        <h3 className="mb-1 text-xl text-green-900 font-latoBlack">{title}</h3>
        <p className="h-fit lg:[72px] mb-2 text-base text-dark-900">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <p className="flex items-center gap-2 opacity-80">
            <HiCalendar />
            {formatDate(created_at)}
          </p>
          <Link
            className="flex items-center gap-2 text-green-900 transition font-latoBlack hover:-translate-y-1"
            href={`/posts/${id}`}
          >
            Read more
            <HiArrowLongRight />
          </Link>
        </div>
      </div>
    </article>
  );
}
