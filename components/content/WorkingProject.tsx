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
  {
    projectName: "Meenites",
    type: "Side project",
    status: "In progress",
    timeRanges: "Aug 2023 - Present",
    // siteLink: "https://mroc.netlify.app/",
    projectSummary: "Personal classroom management for teachers and students",
    summary:
      "This application are for freelance teacher to manage their classroom timetable and create online meeting links for their students. This application also have a feature for students to view their classroom timetable and join the online meeting.",
    frontendStack: [
      "Next.js",
      "React Query",
      "Ant Design (antd)",
      "Axios",
      "Dayjs",
      "Lodash",
      "Zustand",
      "Tailwind CSS",
      "TypeScript",
      "Zod",
      "Nextauth.js",
    ],
    backendStack: [
      "Prisma",
      "bcrypt",
      "Next.js api route",
      "JWT",
      "Supabase",
      "Googleapis",
      "Line messaging API",
    ],
  },
];

function WorkingProject() {
  return (
    <div className=" relative box-border flex flex-col gap-8 pb-10  lg:min-h-screen lg:p-4">
      <div className="anchor" id="WorkingProject" />
      <InviewTrigger id={"#WorkingProject"} />
      <p className=" mb-8 text-3xl font-semibold text-slate-800 lg:hidden">
        Project
      </p>
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
          <div key={projectName} className=" flex flex-col gap-1 ">
            <div className=" flex flex-col items-start gap-3 lg:flex-row lg:items-center ">
              {siteLink ? (
                <a href={siteLink} target="_blank">
                  <p className=" text-xl font-semibold text-slate-600 no-underline decoration-2 underline-offset-4 transition-all duration-150 hover:text-blue-500 hover:underline">
                    {projectName} &#8599;
                  </p>
                </a>
              ) : (
                <p className=" text-xl font-semibold text-slate-600 no-underline decoration-2 underline-offset-4  transition-all duration-150">
                  {projectName}
                </p>
              )}

              <div className=" mb-4 flex items-center gap-3 lg:mb-0">
                <p className=" text-sm text-slate-600">{type}</p>
                <p className=" text-sm text-slate-600">{timeRanges}</p>
                <div className=" inline-block rounded-md border border-orange-400 bg-orange-50 px-2 py-1 text-xs  text-orange-400 transition-all duration-150 hover:bg-orange-100">
                  {status}
                </div>
              </div>
            </div>
            <p className=" text-sm font-semibold text-slate-600">
              {projectSummary}
            </p>
            <p className=" text-sm text-slate-600">{summary}</p>
            <div className=" mt-4 flex flex-col gap-2">
              <div className=" text-sm font-semibold text-slate-600">
                Front end
              </div>
              <div className=" flex flex-wrap gap-2">
                {frontendStack.map((stack, index) => (
                  <Chips key={index} label={stack} />
                ))}
              </div>
            </div>
            <div className=" mt-4 flex flex-col gap-2">
              <div className=" text-sm font-semibold text-slate-600">
                Back end
              </div>
              <div className=" flex flex-wrap gap-2">
                {backendStack.map((stack, index) => (
                  <Chips key={index} label={stack} />
                ))}
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  );
}

export default WorkingProject;
