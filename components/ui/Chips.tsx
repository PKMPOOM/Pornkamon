import React from "react";
type ChipsProps = {
  key: number;
  label: string;
};
const Chips = ({ key, label }: ChipsProps) => {
  return (
    <div
      key={key}
      className=" bg-slate-50 px-4 py-2 rounded-full text-xs hover:bg-sky-100 transition-all duration-300 cursor-pointer "
    >
      {label}
    </div>
  );
};

export default Chips;
