import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import HowItWorks from "./components/home/HowItWorks";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <div className="container w-full flex flex-col gap-10 px-0 py-20">
        <Hero />
        <div className="full-width bg-[#f4f6f8] h-[80px]"></div>
        <Features />
        <div className="full-width bg-[#f4f6f8] h-[80px]"></div>
        <HowItWorks />
      </div>
      <Footer />
    </main>
  );
}
