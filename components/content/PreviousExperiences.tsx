import InviewTrigger from "../InviewTrigger";
import "./Content.css";
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
    <div className="relative mb-10">
      <div className="anchor" id="Experiences" />
      <InviewTrigger id={"#Experiences"} />
      <p className=" mb-8 text-3xl font-semibold text-slate-800 lg:hidden">
        Experiences
      </p>
      {ExperiencedData.map((items, index) => (
        <div
          key={items.title}
          className="group mb-10 flex flex-col gap-2 rounded-lg border border-hidden transition-all duration-300 lg:flex-row lg:gap-4 lg:p-4  lg:hover:border-slate-200 lg:hover:bg-white/50 lg:hover:shadow-md lg:hover:backdrop-blur-lg"
        >
          <div className=" flex items-center gap-4 text-sm font-normal text-slate-600 transition-all duration-300 lg:w-3/12 lg:items-start lg:group-hover:text-slate-800">
            <p className=" ">{items.timeRanges}</p>
            <div className=" h-[1px] w-7 flex-1 bg-slate-300 lg:hidden"></div>
          </div>
          <div className=" lg:w-9/12 ">
            <div className=" flex flex-col items-start text-xl font-semibold text-slate-600 transition-all duration-300 lg:flex-row lg:items-center lg:group-hover:text-slate-800">
              {items.title}
              <span className="text-sm font-normal lg:pl-2">
                {items.company} - {items.jobType}
              </span>
            </div>
            <div className=" mt-4 text-sm text-slate-600 transition-all duration-300 lg:group-hover:text-slate-800">
              {items.summary}
            </div>

            <ul className=" mt-4">
              {items.responsibilities.map((skill, index) => (
                <li
                  key={index}
                  className=" mb-1 text-xs text-slate-600 transition-all duration-300 lg:text-sm lg:group-hover:text-slate-800"
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
