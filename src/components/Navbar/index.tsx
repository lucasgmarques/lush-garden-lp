import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import logo from "../../../public/logo.svg";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  return (
    <header className="w-full max-w-screen-xl mx-auto h-28 ">
      <div className="flex items-center justify-between w-full h-full px-8">
        <Image src={logo} alt="logo of website" />
        {/* button to open menu */}
        <div
          className="cursor-pointer"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          {!isNavOpen ? (
            <HiBars3BottomRight
              size={40}
              color={"#ffffff"}
              style={{
                zIndex: 99999,
              }}
            />
          ) : (
            <HiOutlineXMark
              size={40}
              color={"#ffffff"}
              style={{
                zIndex: 99999,
              }}
            />
          )}
        </div>
        {/* menu mobile */}
        {isNavOpen && (
          <div className="absolute top-0 right-0 w-full h-screen overflow-hidden bg-green-900 z-1">
            <ul className="flex flex-col items-center justify-center h-full gap-5">
              <li>
                <Link
                  className="p-4 text-2xl text-white md:text-lg lg:text-lg hover:text-green-900"
                  href={"/home"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="p-4 text-2xl text-white md:text-lg lg:text-lg hover:text-green-900"
                  href={"/about"}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className="p-4 text-2xl text-white md:text-lg lg:text-lg hover:text-green-900"
                  href={"/home"}
                >
                  Planters
                </Link>
              </li>
              <li>
                <Link
                  className="p-4 text-2xl text-white md:text-lg lg:text-lg hover:text-green-900"
                  href={"/home"}
                >
                  Contact
                </Link>
              </li>
              <button className="px-10 py-1 text-2xl text-white transition duration-200 ease-in-out border border-white rounded-lg hover:bg-green-900 hover:text-white hover:border-green-900">
                Call us
              </button>
            </ul>
          </div>
        )}
        <nav className="hidden md:flex lg:flex">
          <ul className="flex items-center gap-5">
            <li>
              <Link
                className="p-4 text-white md:text-lg lg:text-lg hover:text-green-900"
                href={"/home"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="p-4 text-white md:text-lg lg:text-lg hover:text-green-900"
                href={"/about"}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                className="p-4 text-white md:text-lg lg:text-lg hover:text-green-900"
                href={"/home"}
              >
                Planters
              </Link>
            </li>
            <li>
              <Link
                className="p-4 text-white md:text-lg lg:text-lg hover:text-green-900"
                href={"/home"}
              >
                Contact
              </Link>
            </li>
            <button className="px-10 py-1 text-white transition duration-200 ease-in-out border border-white rounded-lg hover:bg-green-900 hover:text-white hover:border-green-900">
              Call us
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
}
