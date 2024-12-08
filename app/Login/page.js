"use client";

import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "@/components/footer";
import Link from "next/link"; // Import Link

const LoginPage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#EBEAFF] py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl font-bold text-[#2D2D2D] mb-4">
              Welcome Back!
            </h1>
            <p className="text-lg text-[#4a4a4a] mb-4">
              Log in to your ConnectaBoost account to manage campaigns, track
              performance, and more.
            </p>
          </div>

          {/* Hero Image */}
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/Images/Hero-Login.jpg"
              alt="Login Illustration"
              width={500}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <h2 className="text-2xl font-bold text-center text-[#2D2D2D] mb-8">
          How Can We Help?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Publisher Card */}
          <div className="bg-[#F8F8F8] p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-2 text-[#2D2D2D]">
              Am I a Publisher?
            </h3>
            <p className="text-[#4a4a4a] mb-4">
              Log in to access your account, start promoting advertisers, and
              earn commissions effortlessly.
            </p>
            <Link href="/PublisherLogin">
              <button className="bg-[#1D72B8] text-white py-2 px-4 rounded-lg hover:bg-[#155A92]">
                Login
              </button>
            </Link>
          </div>

          {/* Advertiser Card */}
          <div className="bg-[#F8F8F8] p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-2 text-[#2D2D2D]">
              Am I an Advertiser?
            </h3>
            <p className="text-[#4a4a4a] mb-4">
              Log in to your ConnectaBoost account to supercharge your affiliate
              program, drive more sales, and achieve unmatched revenue growth.
            </p>
            <Link href="/AdvertiserLogin">
              <button className="bg-[#1D72B8] text-white py-2 px-4 rounded-lg hover:bg-[#155A92]">
                Login
              </button>
            </Link>
          </div>

          {/* Agency Card */}
          <div className="bg-[#F8F8F8] p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-2 text-[#2D2D2D]">
              Am I an Agency?
            </h3>
            <p className="text-[#4a4a4a] mb-4">
              Log in to collaborate with us in managing and optimizing your
              clients&apos; digital marketing campaigns and strategies.
            </p>
            <Link href="/AgencyLogin">
              <button className="bg-[#1D72B8] text-white py-2 px-4 rounded-lg hover:bg-[#155A92]">
                Login
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default LoginPage;
