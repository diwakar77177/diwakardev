import Navigation from '@/components/Portfolio/Navigation';
import HeroSection from '@/components/Portfolio/HeroSection';
import AboutSection from '@/components/Portfolio/AboutSection';
import ExperienceSection from '@/components/Portfolio/ExperienceSection';
import ProjectsSection from '@/components/Portfolio/ProjectsSection';
import SkillsSection from '@/components/Portfolio/SkillsSection';
import ContactSection from '@/components/Portfolio/ContactSection';
import Footer from '@/components/Portfolio/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
