import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import NavMenu from './components/NavMenu'
import Hero from './components/Hero';
import { profile } from './Data/data';
import ProjectsSection from './components/ProjectsSection';

export default function Home() {
  return (
    <>
      <NavMenu></NavMenu>
      <main>
        <Hero></Hero>
        <AboutSection></AboutSection>
        <ExperienceSection></ExperienceSection>
        <ProjectsSection></ProjectsSection>
      </main>
    </>
  );
}
