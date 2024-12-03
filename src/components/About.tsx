import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Spotlight } from "./ui/Spotlight";
import {
  FaGraduationCap,
  FaCode,
  FaGithub,
  FaLinkedin,
  FaServer,
  FaToolbox,
  FaLaptopCode,
} from "react-icons/fa6";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

export default function About() {
  const technologies = {
    frontend: [
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
      { icon: SiTailwindcss, name: "Tailwind", color: "text-[#38B2AC]" },
    ],
    backend: [
      { icon: SiPython, name: "Python", color: "text-[#3776AB]" },
      { icon: SiPostgresql, name: "PostgreSQL", color: "text-[#336791]" },
      { icon: SiMongodb, name: "MongoDB", color: "text-[#47A248]" },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="relative flex min-h-screen w-full items-start justify-center overflow-hidden py-16 lg:items-center">
      {/* Spotlights and background */}
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
        <motion.div
          className="grid gap-8 lg:grid-cols-[1fr_2fr]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Column - Photo and Quick Info */}
          <motion.div className="flex flex-col gap-6" variants={itemVariants}>
            <div className="relative mx-auto aspect-square w-full max-w-[300px] overflow-hidden rounded-2xl border-2 border-neutral-200 dark:border-neutral-800 lg:w-full">
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
                    href="https://www.linkedin.com/in/maybeitsjaden/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-700 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                  >
                    <FaLinkedin className="h-8 w-8" />
                  </a>
                </div>

                <div className="mt-6 space-y-2">
                  <h3 className="text-md font-medium text-neutral-600 dark:text-neutral-400">
                    Currently Working On
                  </h3>
                  <p className="text-sm">
                    Creating projects for my portfolio and learning new
                    technologies.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Main Content */}
          <div className="flex flex-col gap-6">
            {/* Story Card */}
            <motion.div variants={itemVariants}>
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
            </motion.div>

            {/* Education and Map Row */}
            <div className="grid gap-6 sm:grid-cols-2">
              <motion.div variants={itemVariants}>
                <Card className="h-full bg-white/80 backdrop-blur-sm">
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
              </motion.div>

              {/* Map Card with hover effect */}
              <motion.div variants={itemVariants}>
                <a
                  href="https://www.google.com/maps/?q=San%20Francisco%2C%20California%2C%20United%20States"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                >
                  <Card className="relative h-full overflow-hidden bg-white/80 backdrop-blur-sm">
                    <Image
                      src="/SanFranciscoMap.jpg"
                      alt="San Francisco Map"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity hover:opacity-100">
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-lg font-semibold">
                          San Francisco Bay Area
                        </p>
                        <p className="text-sm">
                          Available for local & remote opportunities
                        </p>
                      </div>
                    </div>
                  </Card>
                </a>
              </motion.div>
            </div>

            {/* Technologies Grid */}
            <motion.div variants={itemVariants}>
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold">
                    <FaCode className="h-5 w-5 text-blue-500" />
                    Technical Skills
                  </h2>

                  {/* Frontend */}
                  <div className="mb-4">
                    <h3 className="mb-2 flex items-center gap-2 text-sm font-medium">
                      <FaLaptopCode className="h-4 w-4 text-indigo-500" />
                      Frontend Development
                    </h3>
                    <div className="grid grid-cols-4 gap-2 sm:grid-cols-7">
                      {technologies.frontend.map((tech) => (
                        <div
                          key={tech.name}
                          className="group flex flex-col items-center"
                        >
                          <div className="relative transition-all hover:-translate-y-0.5">
                            <tech.icon
                              className={`h-6 w-6 ${tech.color} transition-all duration-200 group-hover:drop-shadow-lg`}
                              title={tech.name}
                            />
                          </div>
                          <span className="mt-1 text-center text-[10px] font-medium">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Backend */}
                  <div>
                    <h3 className="mb-2 flex items-center gap-2 text-sm font-medium">
                      <FaServer className="h-4 w-4 text-emerald-500" />
                      Backend Development
                    </h3>
                    <div className="grid grid-cols-4 gap-2 sm:grid-cols-7">
                      {technologies.backend.map((tech) => (
                        <div
                          key={tech.name}
                          className="group flex flex-col items-center"
                        >
                          <div className="relative transition-all hover:-translate-y-0.5">
                            <tech.icon
                              className={`h-6 w-6 ${tech.color} transition-all duration-200 group-hover:drop-shadow-lg`}
                              title={tech.name}
                            />
                          </div>
                          <span className="mt-1 text-center text-[10px] font-medium">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
