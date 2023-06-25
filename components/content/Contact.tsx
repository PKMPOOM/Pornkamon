import React from "react";
import "./Content.css";
import InviewTrigger from "../InviewTrigger";

function Contact() {
  return (
    <div className=" h-screen bg-slate-50 outline outline-1 outline-red-300 relative">
      <a className="anchor" id="Contact" />
      <InviewTrigger id={"#Contact"} />
      contact
    </div>
  );
}

export default Contact;
