"use client";
import { useState } from "react";
import { useStore } from "@/Store/useStore";

type dataSectionProps = {
  id: number;
  title: string;
  link: string;
  active: boolean;
  href: string;
};

function Nav() {
  const initData = [
    { id: 1, title: "About", link: "About", href: "#About" },
    {
      id: 2,
      title: "Experiences",
      link: "Experiences",
      href: "#Experiences",
    },
    {
      id: 3,
      title: "Working Project",
      link: "WorkingProject",
      href: "#WorkingProject",
    },
    {
      id: 4,
      title: "Contact",
      link: "Contact",
      href: "#Contact",
    },
  ];

  const [ActiveAnchor, setActiveAnchor] = useStore((state) => [
    state.ActiveAnchor,
    state.setActive,
  ]);

  return (
    <ul className="mt-6 w-52 hidden lg:block">
      {initData.map((items, index) => {
        const active = items.href === ActiveAnchor;
        return (
          <a
            key={index}
            href={items.href}
            onClick={() => {
              setActiveAnchor(items.href);
            }}
          >
            <li className="group flex items-center gap-2 cursor-pointer py-1">
              <span
                className={`w-[30px] h-[1px] 
                group-hover:w-[50px] group-hover:bg-slate-800  
                ${active ? "w-[50px]" : "w-[30px]"}
                ${
                  active ? " bg-slate-800" : " bg-slate-500"
                } left-10  bottom-1.5 transition-all duration-100`}
              />

              <p
                className={`transition-all duration-100 font-semibold  
                    ${active ? "text-slate-800" : "text-slate-500"}
                      group-hover:text-slate-800`}
              >
                {items.title}
              </p>
            </li>
          </a>
        );
      })}
    </ul>
  );
}

export default Nav;
