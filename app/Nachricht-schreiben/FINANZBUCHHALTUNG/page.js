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
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};
 

function page() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className="w-[80%] mx-auto">
      <div className=" bg-white">
        <div className="flex items-center justify-between mb-3">
          <div className="flex">
            <button className="text-[#B3B3B3] bg-[#F8F9FA] p-2 mx-2">
              ungelesen
            </button>
            <button className="text-[#B3B3B3] bg-[#F8F9FA] p-2 mx-2">
              erledigt
            </button>
          </div>
          <div>
            <button className="text-[#B3B3B3] bg-[#F8F9FA] p-2 mx-2">
              Zur Checkliste
            </button>
          </div>
        </div>

        <button className="text-[#3AB3B3] border-2 border-[#3AB3B3] text-center p-2 w-[94%] mx-[3%]">
          Neues Thema beginnen
        </button>
      </div>
      {/* Users */}

    

  
        <Accordion  open={open === 1} animate={CUSTOM_ANIMATION} className="mt-10 bg-white px-2">
          <AccordionHeader onClick={() => handleOpen(1)} className="flex justify-start gap-5 ">  
           <div class="relative  inline-flex items-center justify-center w-14 h-14 overflow-hidden rounded-full bg-gray-300">
              <span class="font-medium text-[#3AB3B3] ">AR</span>
            </div>
            <div className="flex  flex-col">
              <span>Fehlende Unterlagen</span>
  
              <span className="text-[#00000033]">
                von Asia Roushdy am 11.03.21 12:50
              </span>
            </div>
             </AccordionHeader>
             
          <AccordionBody  className="font-bold text-lg mx-3">
          Guten Tag, Bi Belege hochladen Am 1. Juni war der geplante
                  Fertigstellungstermin für den letztmaligen Jahresabschluss.
          </AccordionBody>
        </Accordion>
  
  
        <Accordion  open={open === 2} animate={CUSTOM_ANIMATION} className=" bg-white px-2">
          <AccordionHeader onClick={() => handleOpen(2)} className="flex justify-start gap-5 ">  
           <div class="relative  inline-flex items-center justify-center w-14 h-14 overflow-hidden rounded-full bg-gray-300">
              <span class="font-medium text-[#3AB3B3] ">AR</span>
            </div>
            <div className="flex  flex-col">
              <span>Fehlende Unterlagen</span>
  
              <span className="text-[#00000033]">
                von Asia Roushdy am 11.03.21 12:50
              </span>
            </div>
             </AccordionHeader>
             
          <AccordionBody  className="font-bold text-lg mx-3">
          Guten Tag, Bi Belege hochladen Am 1. Juni war der geplante
                  Fertigstellungstermin für den letztmaligen Jahresabschluss.
          </AccordionBody>
        </Accordion>
  
  
    <div className="bg-white pt-10">
      
      
        <UserDetails name={"Alexa Liras"} email={"alexa@simmmple.com"}   img={"https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}/>
      
    </div>

    </div>
  );
}

export default page;
