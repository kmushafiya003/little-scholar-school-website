import React, { useState } from "react";
import { fqa } from "../../data/Admission/fqa";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { motion, AnimatePresence } from "framer-motion";

function FQA() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (id) => {
    setOpenQuestion((prev) => (prev === id ? null : id));
  };

  const variants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
  };

  return (
    <section className="relative w-full">
      <div className="flex justify-center w-10/12 mx-auto py-24">
        <div className="flex flex-col justify-center gap-2  xxl:w-9/12 lg:w-full lg:gap-0 smd:w-fulldxs:w-full dxs:gap-0">
          {fqa.map((data, index) => (
            <div key={data.id} className="relative inline-block w-full text-justify">
              <div className="flex pt-[5px]">
                <button
                  className={`px-3 py-2  inline-flex font-semibold justify-between w-full lg:text-[1.2rem] dxs:text-[1rem] shadow-sm ring-1 ring-inset ring-black ${
                    openQuestion === data.id
                      ? "bg-desaturated-blue text-white"
                      : "bg-white"
                  } ${
                    index === 0
                      ? "rounded-t-xl"
                      : index === fqa.length - 1
                      ? "rounded-b-xl"
                      : ""
                  }`}
                  onClick={() => toggleQuestion(data.id)}
                >
                  {data.question}
                  <span className='text-[1.5rem] '><ChevronDownIcon
                    aria-hidden="true"
                    className={`font-medium translate-x-3 h-7 w-9 transition-transform duration-400 ${
                      openQuestion === data.id ? "rotate-180" : "rotate-0"
                    }`}
                  /> </span>
                </button>
              </div>
              <AnimatePresence initial={false}>
                {openQuestion === data.id && (
                  <motion.div
                    key={data.id}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={variants}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                  >
                    <div className="py-1">
                      <span className="block px-5 py-5 font-light">
                        {data.answer}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FQA;
