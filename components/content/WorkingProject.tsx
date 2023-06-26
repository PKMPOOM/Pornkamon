import React from "react";
import "./Content.css";
import InviewTrigger from "../InviewTrigger";
import Chips from "../ui/Chips";

const Project = [
  {
    projectName: "Mroc",
    type: "Side project",
    status: "In progress",
    timeRanges: "Mar 2023 - Present",
    siteLink: "https://mroc.netlify.app/",
    projectSummary:
      "A software that have strong qualitative & quantitative research features",
    summary:
      " I aim to enhance my coding proficiency by actively participating in the redesign process of our company's software using the React framework, encompassing both the front-end and back-end development aspects.",
    frontendStack: [
      "React",
      "React Query",
      "React Beautiful DnD",
      "Ant Design (antd)",
      "Axios",
      "Chart.js",
      "Dayjs",
      "Lodash",
      "React Router DOM",
      "Zustand",
      "Tailwind CSS",
      "TypeScript",
      "Vite",
    ],
    backendStack: [
      "Prisma",
      "SendGrid",
      "bcrypt",
      "Express",
      "JWT",
      "Cockroach db",
    ],
  },
];

function WorkingProject() {
  return (
    <div className=" min-h-screen p-4 relative">
      <a className="anchor" id="WorkingProject" />
      <InviewTrigger id={"#WorkingProject"} />
      {Project.map(
        ({
          backendStack,
          frontendStack,
          projectName,
          status,
          summary,
          timeRanges,
          type,
          projectSummary,
          siteLink,
        }) => (
          <div key={projectName} className=" flex flex-col gap-1">
            <div className=" flex gap-3 items-center">
              <a href={siteLink} target="_blank">
                <p className=" text-xl font-semibold text-slate-500 hover:text-blue-500 transition-all duration-150 no-underline hover:underline underline-offset-4 decoration-2">
                  {projectName} &#8599;
                </p>
              </a>

              <p className=" text-sm text-slate-500">{type}</p>
              <p className=" text-sm text-slate-500">{timeRanges}</p>
              <div className=" text-xs text-orange-400 px-2 border border-orange-400 py-1 rounded-md bg-orange-50 cursor-pointer hover:bg-orange-100 transition-all duration-150 inline-block">
                {status}
              </div>
            </div>
            <p className=" text-sm font-semibold text-slate-500">
              {projectSummary}
            </p>
            <p className=" text-sm text-slate-500">{summary}</p>
            <div className=" mt-4 flex flex-col gap-2">
              <div className=" text-sm text-slate-500 font-semibold">
                Front end
              </div>
              <div className=" flex flex-wrap gap-2">
                {frontendStack.map((stack, index) => (
                  <Chips key={index} label={stack} />
                ))}
              </div>
            </div>
            <div className=" mt-4 flex flex-col gap-2">
              <div className=" text-sm text-slate-500 font-semibold">
                Back end
              </div>
              <div className=" flex flex-wrap gap-2">
                {backendStack.map((stack, index) => (
                  <Chips key={index} label={stack} />
                ))}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default WorkingProject;
