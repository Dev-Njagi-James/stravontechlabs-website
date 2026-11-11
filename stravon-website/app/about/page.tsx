
import Hero from './components/hero'
import Points from './components/points'
import TechnologySections from './components/technology_section'
import StorySection from './components/storySection'
import CtaSection from './components/cta_section'
import ContactForm from './components/contact'
export default function About() {
   return (
     <>
       <Hero />
       <Points />
       <TechnologySections />
       <StorySection />
       <div className="contact-section">
         <ContactForm />
       </div>
       <CtaSection />
     </>
   );
}