"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import UserDetails from "@/app/components/UserDetails";
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

function Allgemeines() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className="w-[80%] mx-auto bg-[#F8F9FA]">
      <div className=" bg-white p-10 mb-5">
        <div className="text-end">
          <button className="text-[#3AB3B3] font-bold  bg-[#F8F9FA] px-4  py-2">
            Zur den Nachrichten
          </button>
        </div>
      </div>

      <div className="bg-white text-center p-5">
        <svg
          width="435"
          height="402"
          viewBox="0 0 435 402"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M43.5113 -44.3687C44.6883 -55.3515 54.5459 -63.3007 65.5287 -62.1236L418.355 -24.3088C429.338 -23.1317 437.287 -13.2742 436.11 -2.29141L389.86 429.241C388.683 440.224 378.825 448.173 367.843 446.996L15.0159 409.182C4.03308 408.004 -3.916 398.147 -2.7389 387.164L43.5113 -44.3687Z"
            fill="#D9D9D9"
          />
        </svg>

        <h1 className="text-center text-[#D8D8D8] text-3xl py-10">Es Liegen aktuell keine Aufgaben vor.</h1>
      </div>
    </div>
  );
}

export default Allgemeines;
