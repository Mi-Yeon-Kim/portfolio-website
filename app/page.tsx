import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import NavMenu from './components/NavMenu'
import Hero from './components/Hero';
import { profile } from './Data/data';

export default function Home() {
  return (
    <>
      <NavMenu></NavMenu>
      <Hero content={profile.person.title}></Hero>
      <AboutSection></AboutSection>
      <ExperienceSection></ExperienceSection>
    </>
  );
}
