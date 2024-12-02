"use client";
import AnimatedShinyText from "@/components/ui/demos/animated-shiny-text";
import "./CSS/style.css";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink, Element } from "react-scroll";

export default function Home() {
  return (
    <div className="overflow-clip inset-0 top-0 z-[-2] h-full w-full bg-[#fafafa] bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">
      <Element
        name="top"
        className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 xl:w-4/5 2xl:w-[68%] bg-white flex items-center justify-between py-6 px-4 md:px-8 mx-6"
      >
        <Link href={"/"}>
          <Image
            src={"/Logo/Logo.jpeg"}
            alt="Logo"
            width={100}
            height={100}
            className="w-28 rounded-full"
          />
        </Link>
        <div className="absolute right-1/2 translate-x-1/2 transform">
          <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-sm cursor-pointer">
            <Link href={"/About"} className="hover:text-blue-500">
              About
            </Link>
            <Link href={"/Affliates"} className="hover:text-blue-500">
              Affliates
            </Link>
            <Link href={"/Advertisers"} className="hover:text-blue-500">
              Advertisers
            </Link>
            <Link href={"/Businesses"} className="hover:text-blue-500">
              Businesses
            </Link>
            <Link
              href={"/Sign Up"}
              className="w-28 py-3 px-2.5 bg-[#FAB12F] text-white button-yellow rounded-md text-center text-xs font-light"
            >
              Sign Up
            </Link>
            <Link
              href={"/Log in"}
              className="w-28 py-3 px-2.5 bg-[#133e87] text-white button-blue rounded-md text-center text-xs font-light"
            >
              Log in
            </Link>
          </div>
        </div>
      </Element>

      <main className="md-pb-10">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
          <AnimatedShinyText />
        </div>
      </main>
    </div>
  );
}
