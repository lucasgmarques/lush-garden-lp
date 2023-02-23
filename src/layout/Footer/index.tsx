import Image from "next/image";
import flowersbg from "../../../public/flowers.svg";
import flowerbg from "../../../public/flower.svg";
import instagram from "../../../public/instagram.svg";
import twitter from "../../../public/twitter.svg";
import facebook from "../../../public/facebook.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="bg-green-900 overflow-hidden h-[376px] relative">
        <Image
          className="absolute lg:bottom-[-170px] lg:left-[60px] opacity-10 md:opacity-20"
          src={flowersbg}
          alt="flowers"
        />
        <div className="flex flex-col items-center justify-center h-full max-w-xl px-8 mx-auto ">
          <h3 className="mb-8 text-2xl text-white lg:text-4xl font-latoBlack">
            Feel free to contact us
          </h3>
          <div className="flex gap-4">
            <Link href="https://instagram.com">
              <Image
                className="h-10 transition hover:-translate-y-1"
                src={instagram}
                alt="logo of instagram"
              />
            </Link>
            <Link href="https://twitter.com">
              <Image
                className="h-10 transition hover:-translate-y-1"
                src={twitter}
                alt="logo of twitter"
              />
            </Link>
            <Link href="https://facebook.com">
              <Image
                className="h-10 transition hover:-translate-y-1"
                src={facebook}
                alt="logo of facebook"
              />
            </Link>
          </div>
          <nav></nav>
        </div>
        <Image
          className="absolute lg:bottom-[-50px] lg:right-[60px] opacity-20"
          src={flowerbg}
          alt="flowers"
        />
      </div>
      <div className="w-full p-2 text-center text-white bg-dark-900">
        <p>Copyright &copy; 2022 Lush. All rights reserved.</p>
      </div>
    </footer>
  );
}
