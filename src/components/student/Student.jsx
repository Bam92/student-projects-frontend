import React from "react";

function Student() {
  return (
    <section className="flex  justify-center mt-56 min-[680px]:mt-24  max-[680px]:-mx-10 max-[680px]:overflow-y-hidden p-8 max-[680px]:pb-20">
      <section className="flex relative">
        <div className="w-[200px] absolute right-80 max-[680px]:right-56 top-36">
          <img src="im.jpg" alt="" className=" rounded-3xl shadow-xl" />
        </div>
        <div className="w-[200px] absolute top-36 right-20">
          <img src="im1.jpg" alt="" className=" rounded-3xl shadow-xl" />
        </div>
        <div className="w-[200px] absolute  top-0 right-72">
          <img src="im2.jpg" alt="" className=" rounded-3xl shadow-xl" />
        </div>
        <div className="w-[200px] absolute  top-0 right-12">
          <img src="im3.jpg" alt="" className=" rounded-3xl shadow-xl" />
        </div>
      </section>
      <section className="w-[35%] max-[680px]:pt-12">
        <h2 className=" text-3xl max-[680px]:text-lg font-bold">
          Rencontrez nos diplômés qui ont réalisé leur rêve emploi dans la
          technologie
        </h2>
        <span className="text-[gray] text-sm max-[680px]:hidden">
          Découvrez les parcours de nos 25 diplômés de tous horizons vers de
          nouvelles carrières dans la tech.
        </span>
      </section>
      <section className="flex relative">
        <div className="w-[200px] absolute left-80 top-36">
          <img src="im2.jpg" alt="" className=" rounded-3xl shadow-xl" />
        </div>
        <div className="w-[200px] absolute top-36 left-20">
          <img src="im4.jpg" alt="" className=" rounded-3xl shadow-xl" />
        </div>
        <div className="w-[200px] absolute top-0 left-72">
          <img src="im5.jpg" alt="" className=" rounded-3xl shadow-xl" />
        </div>
        <div className="w-[200px] absolute top-0 left-12">
          <img src="im3.jpg" alt="" className=" rounded-3xl shadow-xl" />
        </div>
      </section>
    </section>
  );
}

export default Student;
