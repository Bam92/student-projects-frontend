import React from "react";
import { useState } from "react";
import CardProjet from "../cardProjet/CardProjet";

function ProjetSection() {
  const tech = ["HTML/CSS", "Javascript", "React", "Node", "Fullstack"];
  const [isActive, setActive] = useState({
    keyAct: 0,
  });
  return (
    <section className="  flex-col justify-center items-center   flex-center mt-24 max-[680px]:mt-0">
      <h2 className="  text-[#263238] font-bold text-[30px]">Nos Projets</h2>
      <section className="  mb-9">
        <div className="flex mx-auto w-1/2 max-[680px]:w-[90vw] max-[680px]:mx-auto max-[680px]:mt-[5%] mt-[2%] max-[680px]:text-[12px] z-50   justify-between p-1 rounded-full shadow-lg items-center bg-[#303030]">
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
      <section className="flex max-[680px]:flex-col gap-6 justify-between items-center">
        <CardProjet />
        <CardProjet />
        <CardProjet />
      </section>
    </section>
  );
}

export default ProjetSection;
