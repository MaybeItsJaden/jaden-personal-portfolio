import { Button } from "@/components/ui/button";
import { Spotlight } from "./ui/Spotlight";
import { FaGraduationCap, FaBriefcase, FaCode } from "react-icons/fa6";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiPython,
} from "react-icons/si";

export default function About() {
  const technologies = [
    { icon: SiHtml5, name: "HTML5", color: "text-[#E34F26]" },
    { icon: SiCss3, name: "CSS3", color: "text-[#1572B6]" },
    { icon: SiJavascript, name: "JavaScript", color: "text-[#F7DF1E]" },
    { icon: SiTypescript, name: "TypeScript", color: "text-[#3178C6]" },
    { icon: SiReact, name: "React", color: "text-[#61DAFB]" },
    {
      icon: SiNextdotjs,
      name: "Next.js",
      color: "text-[#000000] dark:text-white",
    },
    { icon: SiPython, name: "Python", color: "text-[#3776AB]" },
  ];

  return (
    <div className="relative flex h-[100vh] w-full items-center justify-center overflow-hidden">
      {/* Spotlights positioned within bounds */}
      <div>
        <Spotlight
          className="right-[15%] top-[40%] h-[30vh] w-[30vw]"
          fill="#B8860B" // Dark goldenrod
        />
        <Spotlight
          className="right-[25%] top-[30%] h-[35vh] w-[35vw]"
          fill="#4B0082" // Indigo
        />
        <Spotlight
          className="left-[85%] top-[35%] h-[30vh] w-[30vw]"
          fill="#B8860B" // Dark goldenrod
        />
        <Spotlight
          className="left-[95%] top-[45%] h-[35vh] w-[35vw]"
          fill="#1A1A1A" // Rich black
        />
      </div>

      {/* Background with grid */}
      <div className="absolute inset-0 z-0 flex h-full w-full items-center justify-center bg-grid-black/[0.1] dark:bg-grid-white/[0.03]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <section
        id="about"
        className="relative z-10 mx-auto max-w-4xl px-4 py-16 text-center"
      >
        <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl">
          About Me
        </h1>
        <div className="text-muted-foreground space-y-12 text-lg">
          <div className="flex flex-col items-center gap-4">
            <h2 className="flex items-center gap-2 text-2xl font-semibold">
              <FaGraduationCap className="h-6 w-6 text-purple-500" />
              <span>Education</span>
            </h2>
            <div>
              <h3 className="text-xl font-medium">
                Computer Science Student at SNHU
              </h3>
              <p className="mt-2 text-base">
                Pursuing Bachelor's of Science in Computer Science
                <span className="text-purple-500"> (Expected March 2026)</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <h2 className="flex items-center gap-2 text-2xl font-semibold">
              <FaBriefcase className="h-6 w-6 text-amber-500" />
              <span>Professional Background</span>
            </h2>
            <div>
              <p className="text-base leading-relaxed">
                Bringing a unique blend of experience from automotive
                leadership, digital marketing, and hospitality management. Seven
                years in automotive retail taught me strategic planning and team
                leadership, while marketing agency work provided deep insights
                into SEO and digital campaigns.
              </p>
              <p className="mt-4 text-base leading-relaxed">
                Currently in hospitality, where I've spent three years
                developing strong user empathy and problem-solving skills -
                crucial abilities I now apply to creating intuitive software
                solutions and enhanced user experiences.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="flex items-center justify-center gap-2 text-2xl font-semibold">
              <FaCode className="h-6 w-6 text-blue-500" />
              <span>Programming Languages & Technologies</span>
            </h2>
            <div className="grid grid-cols-4 gap-6 md:grid-cols-7">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center gap-2 transition-transform hover:scale-110"
                >
                  <tech.icon
                    className={`h-8 w-8 ${tech.color}`}
                    title={tech.name}
                  />
                  <span className="text-xs font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-base leading-relaxed">
              Building full-stack solutions while exploring AI integration and
              blockchain technologies.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <a href="#contact" aria-label="Contact me">
              <Button size="lg">Get in Touch</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
