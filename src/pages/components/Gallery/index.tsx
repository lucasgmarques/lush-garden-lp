import Image from "next/image";

import image1 from "../../../../public/images/image-1.png";
import image2 from "../../../../public/images/image-2.png";
import image3 from "../../../../public/images/image-3.png";
import image4 from "../../../../public/images/image-4.png";
import image5 from "../../../../public/images/image-5.png";

export default function Gallery() {
  return (
    <section className="py-8 lg:py-24">
      <h2 className="mb-10 text-2xl text-center text-green-900 lg:mb-8 md:text-4xl font-latoRegular lg:text-4xl">
        Our Gallery View
      </h2>
      <div className="grid grid-flow-col-dense grid-rows-2 gap-4 md:grid-cols-2 lg:grid-cols-2 md:gap-x-2 md:gap-y-2 lg:gap-x-2 lg:gap-y-2">
        <Image
          src={image1}
          alt="an image"
          className="object-cover w-full h-full row-span-2 "
        />
        <Image
          src={image2}
          alt="an image"
          className="object-cover w-full h-full "
        />
        <Image
          src={image3}
          alt="an image"
          className="object-cover w-full h-full "
        />
        <Image
          src={image4}
          alt="an image"
          className="object-cover w-full h-full col-span-1 "
        />
        <Image
          src={image5}
          alt="an image"
          className="object-cover w-full h-full bject-cover "
        />
      </div>
    </section>
  );
}
