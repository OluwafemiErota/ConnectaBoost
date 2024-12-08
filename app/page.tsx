"use client";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import "../styles/style.css";

export default function Home() {
  return (
    <div className="overflow-clip inset-0 top-0 z-[-2] h-full w-full bg-[#fafafa] bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">
      <Navbar />
      <main className="md-pb-10">
        <Hero />
      </main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}
