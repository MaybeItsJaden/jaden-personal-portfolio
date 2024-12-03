import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Spotlight } from "./ui/Spotlight";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";
import Image from "next/image";
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
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      {/* Spotlights and background remain unchanged */}
      <div>
        <Spotlight
          className="right-[15%] top-[40%] h-[30vh] w-[30vw]"
          fill="#B8860B"
        />
        <Spotlight
          className="right-[25%] top-[30%] h-[35vh] w-[35vw]"
          fill="#4B0082"
        />
        <Spotlight
          className="left-[85%] top-[35%] h-[30vh] w-[30vw]"
          fill="#B8860B"
        />
        <Spotlight
          className="left-[95%] top-[45%] h-[35vh] w-[35vw]"
          fill="#1A1A1A"
        />
      </div>

      <div className="absolute inset-0 z-0 flex h-full w-full items-center justify-center bg-grid-black/[0.1] dark:bg-grid-white/[0.03]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <section
        id="about"
        className="relative z-10 mx-auto w-full max-w-7xl px-4 py-8 sm:py-12"
      >
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          {/* Left Column - Photo and Quick Info */}
          <div className="flex flex-col gap-6">
            <div className="relative aspect-square overflow-hidden rounded-2xl border-2 border-neutral-200 dark:border-neutral-800">
              <Image
                src="/selfie.JPG"
                alt="Jaden Bento"
                fill
                className="object-cover"
                priority
              />
            </div>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h1 className="text-4xl font-bold">Jaden</h1>
                <p className="text-muted-foreground">Software Developer</p>
                <p className="text-muted-foreground mt-2 text-sm">
                  📍 California, USA
                </p>

                <div className="mt-4 flex gap-4">
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                  >
                    <FaLinkedin className="h-6 w-6" />
                  </a>
                </div>
                {/*
                <Button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700">
                  Download Resume
                </Button>
                */}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Main Content */}
          <div className="flex flex-col gap-6">
            {/* Summary Card */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="mb-4 text-xl font-semibold">
                  Professional Summary
                </h2>
                <p className="text-muted-foreground">
                  Software Developer with a unique background in automotive
                  leadership and digital marketing. Passionate about creating
                  intuitive user experiences and solving complex problems
                  through code. Currently pursuing a BS in Computer Science
                  while building real-world applications.
                </p>
              </CardContent>
            </Card>

            {/* Education and Map Row */}
            <div className="grid grid-cols-2 gap-6">
              {/* Education Card */}
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                    <FaGraduationCap className="h-6 w-6 text-purple-500" />
                    Education
                  </h2>
                  <div>
                    <h3 className="text-lg font-medium">
                      Southern New Hampshire University
                    </h3>
                    <p className="text-muted-foreground">
                      BS in Computer Science
                    </p>
                    <p className="text-sm text-purple-500">
                      Expected March 2026
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Map Card */}
              <a
                href="https://www.google.com/maps/?q=San%20Francisco%2C%20California%2C%20United%20States"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full transition-transform hover:scale-[1.02]"
              >
                <Card className="relative h-full overflow-hidden bg-white/80 backdrop-blur-sm">
                  <Image
                    src="/SanFranciscoMap.jpg"
                    alt="San Francisco Map"
                    fill
                    className="object-cover"
                  />
                </Card>
              </a>
            </div>

            {/* Technologies Grid */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                  <FaCode className="h-6 w-6 text-blue-500" />
                  Technical Skills
                </h2>
                <div className="grid grid-cols-4 gap-4">
                  {technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center gap-2 rounded-lg p-3"
                    >
                      <div className="group relative transition-all hover:-translate-y-0.5">
                        <tech.icon
                          className={`h-8 w-8 ${tech.color} transition-all duration-200 group-hover:drop-shadow-lg`}
                          title={tech.name}
                        />
                      </div>
                      <span className="text-center text-xs font-medium">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
