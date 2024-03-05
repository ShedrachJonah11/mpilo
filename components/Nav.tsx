import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../public/mpilo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@nextui-org/react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const pathname = usePathname() || "/";

  return (
    <div className="absolute px-4 md:px-16 py-10 w-full z-50 bg-none">
      <div className="flex items-center justify-between px-4 py-2">
        <Link href="/">
          <h1>
            <Image src={logo} alt="logo" />
          </h1>
        </Link>
        {isMobile ? (
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        ) : (
          <div className="flex items-center space-x-6">
            <Link href="/">
              <h1 className="text-white font-light">Home</h1>
            </Link>
            <Link href="">
              <h1 className="text-white font-light">About</h1>
            </Link>
            <Link href="">
              <h1 className="text-white font-light">Product</h1>
            </Link>
            <Link href="/#Pricing">
              <h1
                className={`${
                  pathname.includes("/#Pricing") && "text-white"
                } text-white font-light`}
              >
                Pricing
              </h1>
            </Link>
            <Link href="">
              <h1 className="text-white font-light">Contact</h1>
            </Link>
            <Link href={""}>
              <Button
                radius="full"
                className="bg-[#F74D4D] px-6 text-white text-md"
              >
                Get Started
              </Button>
            </Link>
          </div>
        )}
      </div>
      {isMenuOpen && (
        <div className="px-4 py-2">
          <Link href="/">
            <h1 className="text-black mr-6">Home</h1>
          </Link>
          <Link href="">
            <h1 className="text-black mr-6">About us</h1>
          </Link>
          <Link href="/#Pricing">
            <h1 className={`${pathname.includes("/#Pricing") && "text-black"}`}>
              Pricing
            </h1>
          </Link>
          <Link href="/auth/login" className="text-black font-semibold mr-4">
            <h1>Login</h1>
          </Link>
          <Link href="/auth/create">
            <h1 className="bg-[#008080] text-white px-6 py-2 rounded-md font-semibold">
              Get Started
            </h1>
          </Link>
        </div>
      )}
    </div>
  );
}
