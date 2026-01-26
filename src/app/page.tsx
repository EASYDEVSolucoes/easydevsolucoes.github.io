

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Lazy load below-the-fold components
const Services = dynamic(() => import("@/components/Services"), { ssr: true });
const About = dynamic(() => import("@/components/About"), { ssr: true });
const Mission = dynamic(() => import("@/components/Mission"), { ssr: true });
const Partners = dynamic(() => import("@/components/Partners"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });
const Process = dynamic(() => import("@/components/Process"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: true });

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <Mission />
        <Testimonials />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
