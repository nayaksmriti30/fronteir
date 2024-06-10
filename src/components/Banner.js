import React from "react";
import arrow from "../assets/img/arrow.png";
import cursor from "../assets/img/coursor.png";
import scroll from "../assets/img/scroll.png";
import Header from "./Header";
import VideoScroll from "./VideoScroll";
function Banner() {
  return (
    <>
      <div className="bg-img py-8">
        <div className="overlay"></div>
        <div className="container mx-auto">
          <Header />
          <div className="grid lg:grid-cols-2 py-12">
            <div >
              <div className="relative">
              <h1 className="text-[100px] text-white font-bold">Welcome <br/> to the Next Frontier</h1>
              <img src={cursor} className="ml-2 w-8 h-8 absolute left-1/2 bottom-0" alt="Logo" />
              </div>
             
              <div className="inline-block relative mt-4">
                <div class="rainbow  !px-20 !py-4">
                  LET'S BEGIN NOW
                  <img src={arrow} className="ml-2 w-6 h-4" alt="Logo" />
                </div>

                <div class="warning">
                  <p>
                    ⚠️ Your browser does not support{" "}
                    <a href="https://web.dev/css-individual-transform-properties/">
                      @property
                    </a>{" "}
                    so the animation won’t work
                    <br />
                    Please use Chrome.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold text-[28px] px-28 py-10">Collaborate, create freely, and own virtual land. Join us in building an entirely new world together. <img src={scroll} className="mr-12 float-right mt-24" alt="Logo" /></h3>
              
            </div>
            
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Banner;
