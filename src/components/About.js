import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>When I was a kid, I wanted to be a Circus performer.  This isn't that.  But it pays the bills so....I guess it's fine.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
