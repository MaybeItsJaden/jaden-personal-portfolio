import Footer from "@/components/Footer";
import LeftPanel from "@/components/left-panel";
import ProjectsPanel from "@/components/projects-panel";

export default function Projects() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center">
      {/* Pattern */}
      <div className="absolute inset-0 z-0 bg-white dark:bg-neutral-950" />
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white via-white/90 to-white dark:from-neutral-950 dark:via-neutral-950/90 dark:to-neutral-950" />
      <div className="container relative z-20 flex w-full flex-col items-center justify-center gap-6 px-6 xl:flex-row xl:gap-10">
        {/* Left Panel */}
        <LeftPanel />
        {/* Right Panel */}
        <ProjectsPanel />
        {/* Footer for Mobile */}
        <div className="flex pb-6 xl:hidden">
          <Footer />
        </div>
      </div>
    </main>
  );
}
