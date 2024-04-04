import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import HowItWorks from "./components/home/HowItWorks";

export default function Home() {
  return (
    <main className="w-full">
      <div className="container w-full flex flex-col gap-10 px-0 py-20">
        <Hero />
        <Features />
        <HowItWorks />
      </div>
    </main>
  );
}
