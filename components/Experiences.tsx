import React from "react";
import About from "./content/About";
import PreviousExperiences from "./content/PreviousExperiences";
import Contact from "./content/Contact";
import WorkingProject from "./content/WorkingProject";

function Experiences() {
  return (
    <div className="text-md flex w-full flex-col lg:w-3/5">
      <About />
      <PreviousExperiences />
      <WorkingProject />
      <Contact />
    </div>
  );
}

export default Experiences;
