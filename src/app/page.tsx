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
    <main className="fixed inset-0 h-screen w-full snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scroll-smooth">
      <FloatingNav navItems={navItems} className="text-white" />
      <div className="min-h-screen w-full snap-start snap-always overflow-x-hidden">
        <Hero />
      </div>
      <div className="min-h-screen w-full snap-start snap-always overflow-x-hidden">
        <About />
      </div>
      <div className="min-h-screen w-full snap-start snap-always overflow-x-hidden">
        <Projects />
      </div>
      <div className="min-h-screen w-full snap-start snap-always overflow-x-hidden">
        <Contact />
      </div>
      <div className="snap-align-none overflow-x-hidden">
        <Footer />
      </div>
    </main>
  );
};

export default Page;
