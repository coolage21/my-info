import Image from "next/image";
import Introduction from '@/components/sections/Introduction/Introduction';
import Competencies from '@/components/sections/Competencies/Competencies';
import Skills from '@/components/sections/Skills/Skills';
import Projects from '@/components/sections/Projects/Projects';

export default function Home() {
  return (
    <main className="main">
      <Introduction/>
      <Competencies/>
      <Skills/>
      <Projects/>
    </main>
  );
}
