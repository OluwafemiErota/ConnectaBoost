import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-12 px-4 sm:px-6 lg:px-8 gap-10">
      {/* Left Side: Text and Buttons */}
      <div className="flex flex-col gap-6 md:w-1/2">
        <h1 className="text-2xl md:text-5xl font-bold text-[#2D2D2D]">
          Empower Your Growth with <br />
          Affiliate Marketing that Works
        </h1>
        <p className="text-lg text-[#4a4a4a]">
          Connect, promote, and grow with a platform designed to help businesses
          and affiliates achieve success through seamless partnerships and
          real-time performance insights.
        </p>

        {/* Sign Up and Login Buttons */}
        <div className="flex gap-6 items-center">
          <a
            href="/AdvertiserSignup"
            className="py-2 px-6 bg-[#FAB12F] text-white rounded-md text-center text-sm font-medium hover:bg-[#e6a922] transition-all duration-200"
          >
            Increase online Sales
          </a>
          <a
            href="/PublisherSignup"
            className="py-2 px-6 bg-[#133e87] text-white rounded-md text-center text-sm font-medium hover:bg-[#0f2e65] transition-all duration-200"
          >
            Monetize your content
          </a>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src={"/Images/Image2.jpg"}
          alt="Affiliate Marketing"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
