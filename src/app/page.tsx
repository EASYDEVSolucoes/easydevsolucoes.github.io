"use client";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Mission from "@/components/Mission";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Navbar from "@/components/Navbar";

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
