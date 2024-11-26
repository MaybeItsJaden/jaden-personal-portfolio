import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "Hotel Companion SaaS",
      description:
        "A modern platform for hospitality workers to ease the burden of their daily tasks. Features task management, AI-powered chat, and more.",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      gradient: "from-purple-500/20 via-transparent to-transparent",
      icons: [SiNextdotjs, SiTypescript, SiTailwindcss],
      demoUrl: "https://hotel-companion.example.com",
    },
    {
      title: "Coffee Maker Assistant",
      description:
        "A website that assists with how to make espresso coffee, giving basic instructions, troubleshooting, and recipes.",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      gradient: "from-blue-500/20 via-transparent to-transparent",
      icons: [SiNextdotjs, SiTypescript, SiTailwindcss],
      demoUrl: "https://coffee-maker-assistant.example.com",
    },
    {
      title: "Business Website",
      description:
        "Website built for a margarita cart in the city of Las Vegas. Features information about the cart, the menu, inquire about booking, and a way to contact the business.",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      gradient: "from-amber-500/20 via-transparent to-transparent",
      icons: [SiNextdotjs, SiTypescript, SiTailwindcss],
      demoUrl: "https://business-website.example.com",
    },
    {
      title: "AI Savings Calculator",
      description:
        "Smart financial planning tool that leverages AI to analyze income and provide personalized allocation recommendations for retirement savings, expenses, and investments.",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      gradient: "from-emerald-500/20 via-transparent to-transparent",
      icons: [SiNextdotjs, SiTypescript, SiTailwindcss],
      demoUrl: "https://ai-savings-calculator.example.com",
    },
  ];

  return (
    <div className="relative flex h-[100vh] w-full items-center justify-center overflow-hidden">
      {/* Background with grid */}
      <div className="absolute inset-0 z-0 flex h-full w-full items-center justify-center bg-grid-black/[0.1] dark:bg-grid-white/[0.03]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <section
        id="projects"
        className="relative z-10 mx-auto max-w-6xl px-4 py-16"
      >
        <h2 className="mb-12 text-center text-3xl font-bold">
          Featured Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group overflow-hidden bg-gradient-to-br transition-all hover:shadow-lg
                         dark:hover:shadow-zinc-800 ${project.gradient} hover:scale-[1.02]`}
            >
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="mb-4 flex gap-2">
                  {project.icons.map((Icon, i) => (
                    <Icon key={i} className="text-muted-foreground h-5 w-5" />
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    asChild
                    disabled={!project.demoUrl}
                    className="rounded-lg border-2 border-indigo-500 bg-transparent 
                              font-medium text-indigo-600 transition-all
                              duration-300 
                              hover:-translate-y-[2px] hover:bg-indigo-50
                              hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
                  >
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      View Live
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
