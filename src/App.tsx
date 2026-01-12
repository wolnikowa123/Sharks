import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Coaches from "@/components/Coaches";
import Schedule from "@/components/Schedule";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Schedule />
        <Pricing />
        <Testimonials />
        <Coaches />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
