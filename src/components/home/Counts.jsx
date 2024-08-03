import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const Counts = () => {
  const targetNumber = 1130;
  const [student, setStudent] = useState(0); // Initialize with 0

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 700;
      const increment = targetNumber / (duration / 10);

      const timer = setInterval(() => {
        start += increment;

        if (start >= targetNumber) {
          clearInterval(timer);
          start = targetNumber;
        }

        setStudent(Math.ceil(start));
      }, 10);

      return () => clearInterval(timer); // Correct cleanup function
    }
  }, [inView, targetNumber]);

  return (
    <section className="w-full   text-white bg-parallax relative ">

      {/* ---------------- black overlay screen ----------------- */}
      <div className='absolute top-0 right-0 left-0 bottom-0 bg-black opacity-50 z-1'></div>

      {/* -------------- container ------------------ */}
      <div
        ref={ref}
        className="xlg:w-[30%] smd:w-[40%] sm:w-[50%] xs:w-[60%] w-[70%] xmd:py-12 py-16  mx-auto flex  gap-y-8 justify-between relative z-2"
      >
        <div className="flex flex-col items-center gap-y-5">
          <p className="text-5xl font-semibold">{student}</p>
          <p className="text-[16px] font-light">Happy Students</p>
        </div>

        <div className="flex flex-col items-center gap-y-5">
          <p className="text-5xl font-semibold">65</p>
          <p className="text-[16px] font-light">Our Staff</p>
        </div>
      </div>
    </section>
  );
};

export default Counts;
