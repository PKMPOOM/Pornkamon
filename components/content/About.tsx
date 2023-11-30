import React from "react";
import "./Content.css";
import InviewTrigger from "../InviewTrigger";
import Chips from "../ui/Chips";

type SkillData = {
  category: string;
  skills: string[];
};

const skillsData: SkillData[] = [
  {
    category: "Development",
    skills: [
      "WordPress",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Relational database",
    ],
  },
  {
    category: "Design",
    skills: [
      "Photoshop",
      "Illustrator",
      "Lightroom",
      "Adobe XD",
      "Figma",
      "InDesign",
    ],
  },
  {
    category: "UXUI",
    skills: [
      "Wireframing",
      "Prototyping",
      "User Experience Design",
      "Problem Solving",
      "Design Thinking",
      "Presentation",
    ],
  },
];

function About() {
  return (
    <div className="relative text-slate-600  mb-20">
      <div className="anchor" id="About" />
      <InviewTrigger id={"#About"} />

      <p className=" mb-4">
        I am a UX/UI Designer with a strong focus on web development. Currently
        working as a
        <span className=" font-bold text-slate-800">
          {` Freelance UX/UI Designer at Insightrix Communities`}
        </span>
        , I specialize in coordinating designs for sprint planning meetings and
        leading large-scale redesign projects.
        <br />
        <br />
        With knowledge in front-end development and CSS,
        <span className=" font-bold text-slate-800">
          {` I create user-friendly designs `}
        </span>
        while transitioning from Angular to React. Additionally, I have built
        design systems for improved consistency. As a self-employed designer, I
        have honed my skills in Adobe XD, Figma, and WordPress, delivering
        intuitive interfaces and visually compelling assets. My passion lies in
        creating exceptional user experiences, conducting research, and
        performing usability testing for optimal results. designs.
      </p>
      <div className="flex flex-col gap-4">
        {skillsData.map((items) => (
          <div key={items.category}>
            <div className=" text-sm font-semibold w-32">{items.category}</div>
            <div className=" flex flex-wrap gap-2 my-1 ">
              {items.skills.map((items, index) => (
                <Chips key={index} label={items} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
