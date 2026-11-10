"use client";

import React, { useState } from "react";
import { ScrollProgress } from "../src/components/ScrollProgress";
import { Navbar } from "../src/components/Navbar";
import { Hero } from "../src/components/Hero";
import { About } from "../src/components/About";
import { Projects } from "../src/components/Projects";
import { ProjectModal } from "../src/components/ProjectModal";
import { TechMarquee } from "../src/components/TechMarquee";
import { Journey } from "../src/components/Journey";
import { Certificates } from "../src/components/Certificates";
import { Contact } from "../src/components/Contact";
import { Footer } from "../src/components/Footer";
import { ProjectItem, PROJECTS } from "../src/lib/data";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  const handleNavigateProject = (index: number) => {
    setSelectedProject(PROJECTS[index]);
  };

  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        <Hero />
        <About />
        <Projects onSelectProject={(proj) => setSelectedProject(proj)} />

        <section id="skills" className="py-16 relative overflow-hidden">
          <div className="max-w-[1180px] mx-auto px-6">
            <TechMarquee />
            <Journey />
          </div>
        </section>

        <Certificates />

        <Contact />
      </main>

      <Footer />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNavigate={handleNavigateProject}
      />
    </>
  );
}
