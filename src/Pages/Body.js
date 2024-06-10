import React from "react";
import stars from "../assets/img/stars.mp4";
import cap1 from "../assets/img/Capa_1.png";
import cap2 from "../assets/img/Capa_2.png";
import cap3 from "../assets/img/Capa_3.png";

const demo = [
  {
    img:  cap1 ,
    caption: "No code Studio",
    para: "Enables creating 3D assets and items, constructing worlds with customizable physics and permissions.",
  },
  {
    img:  cap2 ,
    caption: "Cobox Universe",
    para: "Build anything from customizable avatar-based social spaces to virtual stores.",
  },
  {
    img:    cap3 ,
    caption: "Yodha Ai Power",
    para: "An advanced Artificial Intelligence designed to empower creators, game developers, and digital artists.",
  },
];
function Body() {
  return (
    <>
    
      <div class="bg-body ">
        <div className="absolute">
          <video src={stars} autoPlay loop muted className="brightness-50 " />
        </div>

        <div className="py-10 container mx-auto">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
            {demo.map((item) => (
              <div className="card p-6 text-center text-white">
                <div class="triangle-right"></div>
                <div class="triangle-left"></div>
                <div class="up"></div>
                <div class="down"></div>

                <img src={item.img} alt="" className="m-auto py-8"/>
                <h3 className="text-[24px] font-bold ">{item.caption}</h3>
                <p className="text-[20px] pt-4 pb-6">{item.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
