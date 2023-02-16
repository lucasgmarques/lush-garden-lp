import Image from "next/image";
import flowersbg from "../../../../public/flowers.svg";
import flowerbg from "../../../../public/flower.svg";

export default function Footer() {
  return (
    <footer>
      <div className="bg-green-900 overflow-hidden h-[376px] relative">
        <Image
          className="absolute lg:bottom-[-170px] lg:left-[60px] opacity-20"
          src={flowersbg}
          alt="flowers"
        />
        <div className="flex items-center justify-center h-full">
          <h3 className="text-4xl text-white font-latoBlack">
            Feel free to contact us
          </h3>
          <div></div>
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
