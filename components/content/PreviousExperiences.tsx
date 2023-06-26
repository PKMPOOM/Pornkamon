import React from "react";
import "./Content.css";
import InviewTrigger from "../InviewTrigger";
import Chips from "../ui/Chips";
interface Experience {
  title: string;
  company: string;
  jobType: string;
  timeRanges: string;
  summary: string;
  responsibilities: string[];
}

const ExperiencedData: Experience[] = [
  {
    title: "UXUI Designer",
    company: "Insightrix Communities",
    jobType: "Freelance",
    timeRanges: "Apr 2021 - Present",
    summary:
      "Experienced Freelance UX/UI Designer with expertise in coordinating designs for sprint planning meetings and leading a large Angular to React redesign project. Skilled in creating user-friendly yet functional designs, utilizing the Palantir design template for React redesigns, and building design systems for improved consistency.",
    responsibilities: [
      "Coordinate designs for each sprint planning meeting",
      "Lead Angular to React redesign project",
      "Utilize Palantir design template for React redesigns",
      "Create user-friendly yet functional designs",
      "Build design system for improved consistency",
    ],
  },
  {
    title: "Graphic Designer & Video Editor",
    company: "Accor",
    jobType: "Full-time",
    timeRanges: "Oct 2018 - Apr 2021",
    summary:
      "Creative Graphic Designer & Video Editor with a focus on visual identities, collateral design, and layout design. Collaborated with teams to create visually compelling materials, including brochures, leaflets, menus, digital ads, and website assets. Conducted photography and videography, supported hotel promotions, and ensured brand consistency.",
    responsibilities: [
      "Coordinate with team for hotel promotions and timelines",
      "Create brochures, leaflets, and menus",
      "Work on digital ads and website assets",
      "Conduct photography and videography",
      "Develop visual identities and collateral designs",
      "Design layouts for brochures and leaflets",
    ],
  },
  {
    title: "Graphic Designer",
    company: "The Dhara Dhevi Chiang Mai",
    jobType: "Full-time",
    timeRanges: "Jul 2018 - Oct 2018",
    summary:
      "Graphic Designer experienced in creating signage, leaflets, and brochures for sales and operations. Collaborated with team members on hotel promotions, conducted photography, and developed visual identities. Focused on collateral design and layout design to support marketing efforts.",
    responsibilities: [
      "Cooperate with team for hotel promotion and timeline",
      "Design signage, leaflets, and brochures",
      "Conduct photography",
      "Create visual identities",
      "Work on collateral design",
      "Design layouts for brochures and leaflets",
    ],
  },
  {
    title: "Freelance Designer",
    company: "Self-employed",
    jobType: "Freelance",
    timeRanges: "Nov 2017 - Present",
    summary:
      "Versatile Freelance Designer skilled in photography, photo editing, videography, and graphic design. Proficient in WordPress, Adobe XD, and Adobe Illustrator. Providing creative solutions and high-quality visual assets for diverse projects.",
    responsibilities: [
      "Work on freelance design projects",
      "Perform photography",
      "Engage in photo editing and retouching",
      "Create videography content",
      "Work on graphic design projects",
    ],
  },
];

function PreviousExperiences() {
  return (
    <div className="relative">
      <a className="anchor" id="Experiences" />
      <InviewTrigger id={"#Experiences"} />
      {ExperiencedData.map((items, index) => (
        <div
          key={items.title}
          className="group flex gap-4 mb-10 border border-white hover:border-slate-200 hover:shadow-md  p-4 rounded-lg transition-all duration-300"
        >
          <div className=" w-3/12 font-normal text-sm text-slate-500 transition-all duration-300 group-hover:text-slate-800">
            {items.timeRanges}
          </div>
          <div className=" w-9/12">
            <div className=" text-slate-500 transition-all duration-300 text-xl group-hover:text-slate-800 font-semibold">
              {items.title}
              <span className="text-sm pl-2 font-normal">
                {items.company} - {items.jobType}
              </span>
            </div>
            <div className=" text-slate-500 mt-4 transition-all duration-300 group-hover:text-slate-800 text-sm">
              {items.summary}
            </div>

            <ul className=" mt-4">
              {items.responsibilities.map((skill, index) => (
                <li
                  key={index}
                  className=" text-slate-500 mb-1 transition-all duration-300 group-hover:text-slate-800 text-sm"
                >
                  - {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PreviousExperiences;
