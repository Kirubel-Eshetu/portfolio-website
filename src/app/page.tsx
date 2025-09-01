import { Hero } from "@/components/Hero";
import { AboutSection } from "@/sections/About";
import { SkillsSection } from "@/sections/Skills";
import { ProjectsSection } from "@/sections/Projects";
import { ExperienceSection } from "@/sections/Experience";
import { EducationSection } from "@/sections/Education";
import { BlogSection } from "@/sections/Blog";
import { ContactSection } from "@/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
}
