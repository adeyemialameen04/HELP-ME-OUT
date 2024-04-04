import { Button } from "@/components/ui/button";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="container max-w-full py-20">
      <Hero />
    </main>
  );
}
