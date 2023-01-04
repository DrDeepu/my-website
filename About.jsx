import React from "react";
import Common from "./Common";
import web  from "../src/images/img10.jpeg";

function About() {
  return (
    <>
      <Common text="Welcome to " btn="Contact Us" visit="/contact" img={web} />
    </>
  );
}

export default About;
