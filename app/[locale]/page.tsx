import Image from "next/image";
import Introduction from "@/components/sections/Introduction/Introduction";
import Strength from "@/components/sections/Strength/Strength";
import Skills from "@/components/sections/Skills/Skills";
import About from "@/components/sections/About/About";
import Contact from "@/components/sections/Contact/Contact";
import Projects from "@/components/sections/Projects/Projects";
import TopButton from "@/components/common/TopButton/TopButton";

export default function Home() {
  return (
    <main className="main">
      <Introduction />
      <About />
      <Skills />
      {/* <Strength /> */}
      <Projects />
      <Contact />
      <TopButton isShow={true} />
    </main>
  );
}
