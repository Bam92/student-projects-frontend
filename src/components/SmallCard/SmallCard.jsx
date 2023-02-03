import React from "react";

function SmallCard({ title, num, icon }) {
  return (
    <div
      className="ontainer w-[220px] h-[162px] p-6 gap-2 bg-white flex  shadow-md  rounded-lg transform 
    transition hover:shadow-2xl"
    >
      <div className="flex-col">
        <span> {icon} </span>
        <span className="text-bold text-[24px]">
          {num}
          {title}
        </span>
      </div>
    </div>
  );
}

export default SmallCard;
