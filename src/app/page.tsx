import CTA from "@/components/home/CTA";
import FAQs from "@/components/home/FAQs";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Integrations from "@/components/home/Integrations";
import Intro from "@/components/home/Intro";
import LogoTicker from "@/components/home/LogoTicker";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoTicker />
      <Intro />
      <Features />
      <Integrations />
      <FAQs />
      <CTA />
    </>
  );
}
