import React from "react";
import Common from "./Common";
import web from "../src/images/img1.webp";

function Home() {
  return (
    <>
      <Common
        text="Grow your business with "
        btn="Get Started"
        visit="/services"
        img={web}
      />
    </>
  );
}

export default Home;
