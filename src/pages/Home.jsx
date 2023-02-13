import React from 'react';
import CardArticle from '../components/cardArticle/cardArticle';
import Hero from "../components/hero/Hero";
import NavBar from "../components/NavBar/NavBar";
import ProjetSection from "../components/projet/ProjetSection";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <NavBar />
      <Hero />
      <ProjetSection />
      <CardArticle/>
    </div>
  );
}
