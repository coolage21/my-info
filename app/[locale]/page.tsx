import Image from "next/image";
import Introduction from "@/components/sections/Introduction/Introduction";
import Strength from "@/components/sections/Strength/Strength";
import Skills from "@/components/sections/Skills/Skills";
import Projects from "@/components/sections/Projects/Projects";
import History from "@/components/sections/History/History";
import Contact from "@/components/sections/Contact/Contact";
import TopButton from "@/components/common/TopButton/TopButton";

export default function Home() {
  return (
    <main className="main">
      {/* <Introduction />
      <Strength />
      <Skills />
      <History />
      <Projects />
      <Contact /> */}
      <TopButton isShow={true} />
    </main>
  );
}
