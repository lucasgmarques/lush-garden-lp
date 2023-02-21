import Image from "next/image";
import flowersbg from "../../../public/flowers.svg";
import flowerbg from "../../../public/flower.svg";
import instagram from "../../../public/instagram.svg";
import twitter from "../../../public/twitter.svg";
import facebook from "../../../public/facebook.svg";

export default function Footer() {
  return (
    <footer>
      <div className="bg-green-900 overflow-hidden h-[376px] relative">
        <Image
          className="absolute lg:bottom-[-170px] lg:left-[60px] opacity-10 md:opacity-20"
          src={flowersbg}
          alt="flowers"
        />
        <div className="container flex flex-col items-center justify-center h-full px-8">
          <h3 className="mb-8 text-2xl text-white lg:text-4xl font-latoBlack">
            Feel free to contact us
          </h3>
          <div className="flex gap-4">
            <Image className="h-10" src={instagram} alt="logo of instagram" />
            <Image className="h-10" src={twitter} alt="logo of twitter" />
            <Image className="h-10" src={facebook} alt="logo of facebook" />
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
