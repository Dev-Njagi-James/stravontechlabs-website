import Hero from './components/hero'
import InHouseProjects from './components/in-house'
import Solutions from './components/solutions'
import WhyChooseStravon from './components/why_choose'
import ClientStories from './components/client_stories'
import CtaSection from './components/cta_section'
export default function Home() {
  return (
    <>
      <Hero />
      {/*<InHouseProjects/> */}
      <Solutions />
      <WhyChooseStravon />
      <ClientStories />
      <CtaSection />
    </>
  );
}