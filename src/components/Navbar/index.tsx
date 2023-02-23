import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import logo from "../../../public/logo.svg";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const handleCloseMenu = () => setIsNavOpen(false);

  const links = [
    { id: 1, href: "#home", label: "Home" },
    { id: 2, href: "#about", label: "About" },
    { id: 3, href: "#product", label: "Planters" },
    { id: 4, href: "#cta", label: "Contact" },
  ];

  return (
    <header className="w-full bg-green-900 h-28 ">
      <div className="flex items-center justify-between w-full h-full max-w-screen-xl px-8 mx-auto">
        <Image src={logo} alt="logo of website" />
        {/* button to open menu */}
        <div
          className="cursor-pointer md:hidden lg:hidden xl:hidden"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          {!isNavOpen ? (
            <HiBars3BottomRight
              size={40}
              color={"#ffffff"}
              style={{
                position: "relative",
                zIndex: 99999,
              }}
            />
          ) : (
            <HiOutlineXMark
              size={40}
              color={"#ffffff"}
              style={{
                position: "relative",
                zIndex: 99999,
              }}
            />
          )}
        </div>
        {/* menu mobile */}
        {isNavOpen && (
          <div className="absolute top-0 right-0 z-10 w-full h-screen overflow-hidden bg-green-900">
            <ul className="flex flex-col items-center justify-center h-full gap-5">
              {links.map(({ id, href, label }) => (
                <li key={id}>
                  <Link
                    className="p-4 text-2xl text-white md:text-lg lg:text-lg hover:text-green-500"
                    href={href}
                    scroll={false}
                    onClick={handleCloseMenu}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <button className="px-10 py-1 text-2xl text-white transition duration-200 ease-in-out border border-white rounded-lg hover:bg-white hover:text-white hover:border-white">
                Call us
              </button>
            </ul>
          </div>
        )}
        <nav className="hidden md:flex lg:flex">
          <ul className="flex items-center gap-5">
            {links.map(({ id, href, label }) => (
              <li key={id}>
                <Link
                  className="p-4 text-white md:text-base lg:text-lg hover:text-green-500"
                  href={href}
                  scroll={false}
                >
                  {label}
                </Link>
              </li>
            ))}
            <button className="px-10 py-1 text-white transition duration-200 ease-in-out border border-white rounded-lg lg:text-lg md:text-base hover:bg-green-500 hover:text-white hover:border-green-500">
              Call us
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
}
