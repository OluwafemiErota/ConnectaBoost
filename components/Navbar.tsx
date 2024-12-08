import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/Images/Logo.jpeg"
                alt="Logo"
                width={50}
                height={50}
                className="rounded-full cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-grow justify-center space-x-6">
            <Link href="/About" className="text-gray-700 hover:text-blue-500">
              About
            </Link>
            <Link
              href="/Affiliates"
              className="text-gray-700 hover:text-blue-500"
            >
              Affiliates
            </Link>
            <Link
              href="/Advertisers"
              className="text-gray-700 hover:text-blue-500"
            >
              Advertisers
            </Link>
            <Link
              href="/Businesses"
              className="text-gray-700 hover:text-blue-500"
            >
              Businesses
            </Link>
          </div>

          {/* Login/Signup Buttons */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/gettingStarted" // Link to SignUp page
              className="py-2 px-4 bg-[#FAB12F] text-white rounded-md hover:bg-[#e6a922]"
            >
              Sign Up
            </Link>
            <Link
              href="/Login"
              className="py-2 px-4 bg-[#133e87] text-white rounded-md hover:bg-[#0f2e65]"
            >
              Log In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none "
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-25 left-0 w-full bg-white shadow-lg md:hidden">
            <div className="flex flex-col space-y-4 py-4 px-6">
              <Link
                href="/About"
                className="text-gray-700 hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/Affiliates"
                className="text-gray-700 hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Affiliates
              </Link>
              <Link
                href="/Advertisers"
                className="text-gray-700 hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Advertisers
              </Link>
              <Link
                href="/Businesses"
                className="text-gray-700 hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Businesses
              </Link>
              <Link
                href="/gettingStarted" // Link to SignUp page
                className="py-3 px-4 bg-[#FAB12F] text-white rounded-md text-center hover:bg-[#e6a922]"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
              <Link
                href="/Login"
                className="py-3 px-4 bg-[#133e87] text-white rounded-md text-center hover:bg-[#0f2e65]"
                onClick={() => setIsMenuOpen(false)}
              >
                Log In
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
