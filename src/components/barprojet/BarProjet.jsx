import React from "react";

import { useState } from "react";
function BarProjet() {
  const tech = ["HTML/CSS", "Javascript", "React", "Node", "Fullstack"];
  const [isActive, setActive] = useState({
    keyAct: 0,
  });
  return (
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
  );
}

export default BarProjet;
