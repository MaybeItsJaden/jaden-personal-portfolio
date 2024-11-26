"use client";

import { navItems } from "@/app/data";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Page = () => {
  return (
    <main className="relative h-screen w-full snap-y snap-mandatory overflow-x-hidden overflow-y-scroll bg-white">
      <FloatingNav 
        navItems={navItems} 
        className="text-white"
      />
      <div className="snap-start">
        <Hero />
      </div>
      <div className="snap-start">
        <About />
      </div>
      <div className="snap-start">
        <Projects />
      </div>
      <div className="snap-start">
        <Contact />
      </div>
      <div className="snap-align-none">
        <Footer />
      </div>
    </main>
  );
};

export default Page;
