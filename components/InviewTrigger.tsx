"use client";

import React from "react";
import { InView } from "react-intersection-observer";
import { useStore } from "@/Store/useStore";

function InviewTrigger({ id }: { id: string }) {
  const setActiveAnchor = useStore((state) => state.setActive);

  return (
    <InView
      as="div"
      className=" absolute top-2/4 left-2/4 "
      onChange={(inView, entry) => {
        if (inView === true) {
          setActiveAnchor(id);
        }
      }}
    />
  );
}

export default InviewTrigger;
