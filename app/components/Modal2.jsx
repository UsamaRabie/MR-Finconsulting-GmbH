import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Modal2 = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="fixed inset-0 transition-opacity" aria-hidden="true"></div>

          <motion.div
            className="fixed inset-0 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-[#ECEFF1] text-left overflow-hidden shadow-xl w-2/3 p-5 rounded-[25px]"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p>lakdfsladfskladskldfsds</p>

              <div className="flex justify-end mt-5">
                <button
                  className="rounded-[25px] py-4 px-8 bg-[#3AB3B3] text-white transition-all duration-200 hover:bg-[#329a9a]"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal2;
