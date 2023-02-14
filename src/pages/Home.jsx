import React from "react";
import Footer from "../components/footer/Footer";

import Hero from "../components/hero/Hero";
import NavBar from "../components/NavBar/NavBar";
import ProjetSection from "../components/projet/ProjetSection";
import Student from "../components/student/Student";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 ">
      <NavBar />
      <Hero />
      <Student />
      <ProjetSection />
      <Footer />
    </div>
  );
}
