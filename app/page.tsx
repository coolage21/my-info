import Image from "next/image";
import Introduction from '@/components/sections/Introduction/Introduction';
import Competencies from '@/components/sections/Competencies/Competencies';
import Skills from '@/components/sections/Skills/Skills';
import Projects from '@/components/sections/Projects/Projects';
import History from '@/components/sections/History/History';
import Contact from '@/components/sections/Contact/Contact';

export default function Home() {
  return (
    <main className="main">
      <Introduction/>
      <Competencies/>
      <Skills/>
      <Projects/>
      <History/>
      <Contact/>
    </main>
  );
}
