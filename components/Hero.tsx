import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-between gap-2 relative py-6 px-4 md:px-8 mx-6 bg-[#C1BAA1] gap-6 md:flex-col sm:flex-col basis-[35/100] hero-image">
      <div className="flex flex-col gap-4 justify-between">
        <div>
          <h1 className="text-5xl font-bold">
            Empower Your <span className="text-[#FFF]">Growth </span> With{" "}
            <br /> Affliate Marketing that works
          </h1>
          <p className="">
            Connect, promote, and grow with a platform designed to help
            businesses and affiliates achieve success through seamless
            partnerships and real-time performance insights
          </p>
        </div>

        <a
          href="/sign up"
          className="w-28 py-3 px-2.5 bg-[#FAB12F] text-white button-yellow rounded-md text-center text-xs font-light inline-block"
        >
          Sign Up
        </a>
        <a
          href="/log in"
          className="w-28 py-3 px-2.5 bg-[#133e87] text-white button-blue rounded-md text-center text-xs font-light inline-block"
        >
          Login
        </a>
      </div>
      <div className="hero-image basis-[3/5]">
        <Image
          src={"/src/Img/Image2.jpg"}
          width={400}
          height={400}
          alt="Image-logo"
          className="rounded-[6px]"
        />
      </div>
    </div>
  );
};

export default Hero;
