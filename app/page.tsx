import Intro from "@/components/intro"
import SectionDivider from "@/components/section-divider"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Experience from "@/components/Experience"
import Contact from "@/components/Contact"


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects/>
      <SectionDivider />
      <Skills/>
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Contact />
    </main>
  )
}
