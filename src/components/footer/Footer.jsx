import React from "react";
import Gda from "../../assets/GDA_Project.svg";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-white flex flex-col justify-center  gap-6 max-[680px]:w-[100%]  ">
      <section className="flex justify-between items-center ">
        <div id="logo">
          <img src={Gda} alt="" className="w-[155.22px] h-[23.66px]" />
        </div>
        <div className="flex justify-center items-center min-[680px]:gap-32">
          <h3 className="max-[680px]:hidden">Prêt à demarrer ?</h3>
          <button className="bg-[#D92950] text-white font-bold px-3 p-2 rounded-md">
            Commencer
          </button>
        </div>
      </section>
      <hr />
      <section className="flex justify-between max-[680px]:flex-wrap items-center">
        <div className="flex flex-col justify-center items-start min-[680px]:gap-20 ">
          <h3>Recevez les dernières nouvelles de nous</h3>
          <div className="flex ">
            <input
              type="text"
              placeholder="Votre adresse mail"
              className="px-3 p-2 bg-gray-200 max-[680px]:w-[75%] focus:outline-none  appearance-none bg-transparent border-none "
            />
            <button className="bg-[#D92950] text-white font-bold px-3 p-2 rounded-md">
              S’abonner
            </button>
          </div>
        </div>
        <div
          id="nosProject"
          className=" flex flex-col justify-start text-left gap-2 max-[680px]:mt-6"
        >
          <h3 className="text-[#D92950]">Nos Projets</h3>
          <ul className="flex flex-col gap-2">
            <li>HTML/CSS</li>
            <li>Javascript</li>
            <li>FullStack</li>
            <li>Spécialisation</li>
          </ul>
        </div>
        <div
          id="aPropos"
          className=" flex flex-col justify-start text-left gap-2 max-[680px]:mt-6"
        >
          <h3 className="text-[#D92950]">A Propos</h3>
          <ul className="flex flex-col gap-2">
            <li>Notre blog</li>
            <li>Etudiant</li>
            <li>Partenaires</li>
            <li>Nos projets</li>
          </ul>
        </div>
        <div
          id="aide"
          className=" flex flex-col justify-start text-left gap-2 max-[680px]:mt-6"
        >
          <h3 className="text-[#D92950] min-[680px]:-mt-14">Aide</h3>
          <ul className="flex flex-col gap-2">
            <li>FAQs</li>
            <li>Nous contater</li>
          </ul>
        </div>
      </section>
      <section
        id="termeCondition"
        className="flex justify-between items-center mt-12"
      >
        <div>
          <span>Termes & Conditions</span>
          <span>Privacy Policy</span>
        </div>
        <div className="flex justify-between items-center gap-3">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </section>
    </footer>
  );
}

export default Footer;
