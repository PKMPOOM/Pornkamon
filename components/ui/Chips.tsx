import React from "react";
type ChipsProps = {
  key: number;
  label: string;
};
const Chips = ({ key, label }: ChipsProps) => {
  return (
    <div
      key={key}
      className=" bg-slate-50 px-4 py-2 font-normal rounded-full  text-slate-800 text-xs hover:bg-white border border-white hover:border-slate-300 transition-all duration-300 "
    >
      {label}
    </div>
  );
};

export default Chips;
