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
      <div className="flex min-h-screen w-full snap-start snap-always flex-col overflow-x-hidden">
        <div className="flex-grow">
          <Contact />
        </div>
        <div className="flex-shrink-0">
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Page;
