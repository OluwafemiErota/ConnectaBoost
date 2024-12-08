"use client"; // Add this line at the top

import Image from "next/image";
import Navbar from "../../components/Navbar.tsx";
import Footer from "@/components/footer.js";
import Link from "next/link"; // Import Link from next/link

const GettingStarted = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#EBEAFF] py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl font-bold text-[#2D2D2D] mb-4">
              Getting Started with Affiliate Marketing
            </h1>
            <p className="text-lg text-[#4a4a4a] mb-4">
              Join our affiliate network to promote, earn, and grow with us.
              Here’s how you can get started.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/Images/Hero-section-img.jpg"
              alt="Affiliate Marketing"
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
              Join our network to start promoting our advertisers and earn
              commissions.
            </p>
            <Link href="/PublisherSignup">
              <button className="bg-[#1D72B8] text-white py-2 px-4 rounded-lg hover:bg-[#155A92]">
                Sign Up
              </button>
            </Link>
          </div>

          {/* Advertiser Card */}
          <div className="bg-[#F8F8F8] p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-2 text-[#2D2D2D]">
              Am I an Advertiser?
            </h3>
            <p className="text-[#4a4a4a] mb-4">
              Kickstart your ConnectaBoost affiliate program to enhance your
              sales and maximize revenue growth.
            </p>
            <Link href="/AdvertiserSignup">
              <button className="bg-[#1D72B8] text-white py-2 px-4 rounded-lg hover:bg-[#155A92]">
                Get in Touch
              </button>
            </Link>
          </div>

          {/* Agency Card */}
          <div className="bg-[#F8F8F8] p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-2 text-[#2D2D2D]">
              Am I an Agency?
            </h3>
            <p className="text-[#4a4a4a] mb-4">
              Work with us to manage digital marketing activities for your
              clients.
            </p>
            <Link href="/AgencySignup">
              <button className="bg-[#1D72B8] text-white py-2 px-4 rounded-lg hover:bg-[#155A92]">
                Speak to Our Team
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

export default GettingStarted;
