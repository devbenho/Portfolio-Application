import Hero from '@/components/hero';
import About from '@/components/about';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Learning from '@/components/learning';
import BlogPreview from '@/components/blog-preview';
import Contact from '@/components/contact';

export default async function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Learning />
      <BlogPreview />
      <Contact />
    </div>
  );
}