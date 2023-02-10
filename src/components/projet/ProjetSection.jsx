import React from "react";
import { useState } from "react";
import CardProjet from "../cardProjet/CardProjet";

function ProjetSection() {
  const tech = [
    "HTML/CSS",
    "Javascript",
    "React js ",
    "Node js",
    "Fullstack",
    "Specialisation",
  ];
  const [isActive, setActive] = useState({
    keyAct: 0,
  });
  return (
    <section className="  flex-col justify-center items-center flex-center mt-48">
      <section className="  mb-9">
        <div className="flex mx-auto w-1/2 justify-between p-1 rounded-full shadow-lg items-center bg-[#303030]">
          {tech &&
            tech.map((techno, key) => (
              <span
                onClick={() => {
                  setActive({ keyAct: key });
                }}
                className={
                  isActive.keyAct === key
                    ? "bg-[#D92950] text-white p-1 px-3 rounded-full"
                    : "text-white hover:bg-[#d9294f9a] p-1 px-3 rounded-full"
                }
                key={key}
              >
                {techno}
              </span>
            ))}
        </div>
      </section>
      <section className="flex justify-between items-center">
        <CardProjet />
        <CardProjet />
        <CardProjet />
      </section>
    </section>
  );
}

export default ProjetSection;
