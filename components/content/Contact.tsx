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
    <div className=" h-[calc(100vh-80px)]   relative">
      <a className="anchor" id="Contact" />
      <InviewTrigger id={"#Contact"} />
      <div>
        <p className=" text-3xl font-semibold text-slate-800">
          Interested in working together?
        </p>
        <p>Feels free to message me in any channel</p>
      </div>
      <div className=" flex flex-col mt-5 gap-4">
        <div className=" hover:text-blue-500 text-slate-500 cursor-pointer transition-all duration-200">
          <a
            className=" flex gap-3 items-center"
            href="https://www.linkedin.com/in/pornkamon-kotemul-6b101a85/"
            target="_blank"
          >
            <AiFillLinkedin size={25} />
            https://www.linkedin.com/in/pornkamon-kotemul-6b101a85/
          </a>
        </div>
        <div className=" hover:text-blue-500 text-slate-500 cursor-pointer transition-all duration-200">
          <a
            className=" flex gap-3 items-center"
            href="mailto:poom.pornkamon@gmail.com"
          >
            <AiOutlineGoogle size={25} /> poom.pornkamon@gmail.com
          </a>
        </div>
        <div className=" hover:text-blue-500 text-slate-500 cursor-pointer transition-all duration-200">
          <a
            className=" flex gap-3 items-center"
            href="https://github.com/PKMPOOM"
            target="_blank"
          >
            <AiOutlineGithub size={25} /> https://github.com/PKMPOOM
          </a>
        </div>
        <div className=" hover:text-blue-500 text-slate-500 cursor-pointer transition-all duration-200">
          <a className=" flex gap-3 items-center" href="tel:+66613740745">
            <AiFillPhone size={25} /> +66613740745
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
