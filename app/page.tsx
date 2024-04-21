import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Projects from "@/components/projects";
import '../public/css/styles.css';
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import CareerPlan from "@/components/career-plan";

export default function Home() {
  return (
    <main className="flex flex-col px-4 items-center mt-12">
      <Intro />
      <About />
      <CareerPlan />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  )
}

