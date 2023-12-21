import React from "react";
import { useState } from "react";

const Modal2 = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="fixed inset-0 transition-opacity"
        aria-hidden="true"
      ></div>

      <div
        className="fixed inset-0 flex items-center justify-center "
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div className="bg-[#ECEFF1] text-left overflow-hidden shadow-xl w-2/3 p-5 rounded-[25px]">

          <p>lakdfsladfskladskldfsds</p>
          

          
         

        </div>
      </div>
    </div>
  );
};

export default Modal2;
