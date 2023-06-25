import React from "react";
import "./Content.css";
import InviewTrigger from "../InviewTrigger";

function WorkingProject() {
  return (
    <div className=" h-screen bg-slate-50 outline outline-1 outline-red-300 relative">
      <a className="anchor" id="WorkingProject" />
      <InviewTrigger id={"#WorkingProject"} />
      Project
    </div>
  );
}

export default WorkingProject;
