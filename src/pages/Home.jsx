import React from 'react';
import CardArticle from '../components/cardArticle/cardArticle';
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import NavBar from "../components/NavBar/NavBar";
import ProjetSection from "../components/projet/ProjetSection";
import TechProject from '../components/techProject/TechProject';

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <NavBar />
      <Hero />
      <TechProject/>
      <ProjetSection />
      <CardArticle/>
      <Footer />
    </div>
  );
}
