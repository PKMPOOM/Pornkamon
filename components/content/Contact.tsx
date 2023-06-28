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
    <div className=" lg:h-[calc(100vh-80px)] h-screen lg:pt-0 pt-32 relative">
      <div className="anchor" id="Contact" />
      <InviewTrigger id={"#Contact"} />
      <div>
        <p className=" text-3xl font-semibold text-slate-800">
          Interested to working together?
        </p>
        <p>Feels free to message me in any channel</p>
      </div>
      <div className=" flex lg:flex-col mt-5 gap-4">
        <div className=" hover:text-blue-500 text-slate-800 lg:text-slate-500 cursor-pointer transition-all duration-200">
          <a
            className=" gap-3 items-start lg:items-center flex flex-col lg:flex-row "
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
        <div className=" hover:text-blue-500 text-slate-800 lg:text-slate-500 cursor-pointer transition-all duration-200">
          <a
            className=" gap-3 items-start lg:items-center flex flex-col lg:flex-row "
            href="mailto:poom.pornkamon@gmail.com"
          >
            <div>
              <AiOutlineGoogle size={25} />
            </div>
            <p className=" hidden lg:block">poom.pornkamon@gmail.com</p>
          </a>
        </div>
        <div className=" hover:text-blue-500 text-slate-800 lg:text-slate-500 cursor-pointer transition-all duration-200">
          <a
            className=" gap-3 items-start lg:items-center flex flex-col lg:flex-row "
            href="mailto:poom.pornkamon@gmail.com"
          >
            <div>
              <AiOutlineGithub size={25} />
            </div>
            <p className=" hidden lg:block">https://github.com/PKMPOOM</p>
          </a>
        </div>
        <div className=" hover:text-blue-500 text-slate-800 lg:text-slate-500 cursor-pointer transition-all duration-200">
          <a
            className=" gap-3 items-start lg:items-center flex flex-col lg:flex-row "
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
