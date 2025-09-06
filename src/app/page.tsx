import { HeroSection } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { SkillsSection } from '@/components/sections/skills'
import { ProjectsSection } from '@/components/sections/projects'
import { BlogsSection } from '@/components/sections/blogs'
import { ContactSection } from '@/components/sections/contact-static'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <BlogsSection />
      <ContactSection />
    </div>
  )
}
