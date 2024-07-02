import {
  AiFillLinkedin,
  AiOutlineGoogle,
  AiOutlineGithub,
  AiFillPhone,
} from "react-icons/ai";
import React, { FormEvent } from "react";
import "./Content.css";
import InviewTrigger from "../InviewTrigger";

function Contact() {
  return (
    <div className=" relative h-screen pt-32 lg:h-[calc(100vh-80px)] lg:pt-0">
      <div className="anchor" id="Contact" />
      <InviewTrigger id={"#Contact"} />
      <div>
        <p className=" text-3xl font-semibold text-slate-800">
          Interested to working together?
        </p>
        <p>Feels free to message me in any channel</p>
      </div>
      <div className=" mt-5 flex gap-4 lg:flex-col">
        <div className=" cursor-pointer text-slate-800 transition-all duration-200 hover:text-blue-500 lg:text-slate-600">
          <a
            className=" flex flex-col items-start gap-3 lg:flex-row lg:items-center "
            href="https://www.linkedin.com/in/pornkamon-kotemul-6b101a85/"
            target="_blank"
          >
            <div>
              <AiFillLinkedin size={25} />
            </div>
            <p className=" hidden lg:block">
              https://www.linkedin.com/in/pornkamon-kotemul-6b101a85/
            </p>
          </a>
        </div>
        <div className=" cursor-pointer text-slate-800 transition-all duration-200 hover:text-blue-500 lg:text-slate-600">
          <a
            className=" flex flex-col items-start gap-3 lg:flex-row lg:items-center "
            href="mailto:poom.pornkamon@gmail.com"
          >
            <div>
              <AiOutlineGoogle size={25} />
            </div>
            <p className=" hidden lg:block">poom.pornkamon@gmail.com</p>
          </a>
        </div>
        <div className=" cursor-pointer text-slate-800 transition-all duration-200 hover:text-blue-500 lg:text-slate-600">
          <a
            className=" flex flex-col items-start gap-3 lg:flex-row lg:items-center "
            href="mailto:poom.pornkamon@gmail.com"
          >
            <div>
              <AiOutlineGithub size={25} />
            </div>
            <p className=" hidden lg:block">https://github.com/PKMPOOM</p>
          </a>
        </div>
        <div className=" cursor-pointer text-slate-800 transition-all duration-200 hover:text-blue-500 lg:text-slate-600">
          <a
            className=" flex flex-col items-start gap-3 lg:flex-row lg:items-center "
            href="mailto:poom.pornkamon@gmail.com"
          >
            <div>
              <AiFillPhone size={25} />
            </div>
            <p className=" hidden lg:block"> +66613740745</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
