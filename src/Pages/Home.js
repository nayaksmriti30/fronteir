import React from "react";
import Banner from "../components/Banner";
import Body from "./Body";
import VideoScroll from "../components/VideoScroll";

function Home() {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <VideoScroll />
      <Body />
    </div>
  );
}

export default Home;
