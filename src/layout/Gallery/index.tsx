import Image from "next/image";
import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import image1 from "../../../public/images/image-1.png";
import image2 from "../../../public/images/image-2.png";
import image3 from "../../../public/images/image-3.png";
import image4 from "../../../public/images/image-4.png";
import image5 from "../../../public/images/image-5.png";

const NextJsImage = (image: any, offset: any, rect: any) => {
  const width = Math.round(
    Math.min(rect.width, (rect.height / image.height) * image.width)
  );
  const height = Math.round(
    Math.min(rect.height, (rect.width / image.width) * image.height)
  );

  return (
    <div style={{ position: "relative", width, height }}>
      <Image
        fill
        alt=""
        src={image}
        loading="eager"
        placeholder="blur"
        draggable={false}
        sizes={
          typeof window !== "undefined"
            ? `${Math.ceil((width / window.innerWidth) * 100)}vw`
            : `${width}px`
        }
      />
    </div>
  );
};

const slides = [image1, image2, image3, image4, image5];

export default function Gallery() {
  const [open, setOpen] = useState(false);

  return (
    <section id="gallery" className="py-[60px] lg:pb-16">
      <h2 className="mb-10 text-2xl text-center text-green-900 lg:mb-8 md:text-4xl font-latoRegular lg:text-4xl">
        Our Gallery View
      </h2>
      <div className="grid grid-flow-row gap-1 mb-4 md:grid-flow-col">
        <Image
          src={image1}
          alt="an image"
          className="object-cover w-full h-64 col-span-2 row-span-2 md:h-full lg:h-full"
        />
        <Image
          src={image2}
          alt="an image"
          className="object-cover object-center w-full h-full"
        />
        <Image
          src={image3}
          alt="an image"
          className="object-cover object-center w-full h-full"
        />
        <Image
          src={image4}
          alt="an image"
          className="object-cover object-center w-full h-full"
        />
        <Image
          src={image5}
          alt="an image"
          className="object-cover object-center w-full h-full"
        />

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          render={{ slide: NextJsImage }}
          plugins={[Thumbnails]}
        />
      </div>

      <button
        className="flex items-center justify-center px-6 py-2 mx-auto text-lg text-white transition bg-green-900 rounded-md w-60 hover:bg-green-500"
        onClick={() => setOpen(true)}
      >
        Ver fotos
      </button>
    </section>
  );
}
