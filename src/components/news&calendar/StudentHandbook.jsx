import React from "react";
import { FaCircleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const StudentHandbook = () => {
  return (
    <section className="relative w-full py-20 bg-bg-light">
      {/* ----------- container -------------- */}
        <div className="flex flex-col w-10/12 py-6 mx-auto text-justify gap-y-16">
        {/* --------------------- upper part ------------------- */}

        <div className="flex flex-col gap-y-8">
          {/* ----------- heading ----------- */}

          <div className="flex flex-col gap-y-3 ">
            <h1 className="uppercase text-[32px] font-semibold text-resp-black  ">
              Event and Activity Participation Forms Hub
            </h1>

            {/* ----------- small underline ----------- */}
            <div className="w-[75px] h-1 bg-black"></div>
          </div>

          {/* --------- pdf link ---------- */}

          <a
            href="https://littlescholars-kashipur.com/pdf/hand_book/Students_Hand_Book.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center cursor-pointer gap-x-2 arrow-container"
          >
            <span className="text-lg text-red arrow-icon">
              <FaCircleRight />
            </span>
            <span className="underline text-[17px] font-semibold text-resp-black">
              Students Handbook 2024-25
            </span>
          </a>
        </div>

        {/* ----------- bottom part ---------- */}

        <div className="flex flex-col gap-y-6">
          <p className="pl-4 font-light">
            This page offers instant updates on the latest upcoming events and
            is designed to streamline the registration process, making it easy
            for students and parents to sign up for various exciting happenings
            at our school.
          </p>

          {/* ----------- table --------- */}

          <div>
            <table className="w-full border border-black">
              <thead className="border border-b-2 border-black">
                <th className="px-4 py-3 text-lg font-normal text-left border-t border-l border-r border-gray-200 text-resp-black">
                
                  SL.NO.
                </th>
                <th className="px-4 py-3 text-lg font-normal text-left border-t border-l border-r border-gray-200 text-resp-black">
                  FORMS
                </th>
                <th className="px-4 py-3 text-lg font-normal text-left border-t border-l border-r border-gray-200 text-resp-black">
                  APPLY
                </th>
              </thead>

              <tbody className="font-light k">
                <tr className="transition-all duration-300 hover:bg-light-grey">
                  <td className="px-4 py-3 text-left border border-gray-200 text-resp-black ">
                    1
                  </td>
                  <td className="px-4 py-3 text-left border border-gray-200 text-resp-black ">
                    Summer Camp Consent
                  </td>
                  <td className="px-4 py-3 text-left border border-gray-200 text-resp-black ">
                    <Link
                      to="/summer-consent-form"
                      className="flex items-center cursor-pointer gap-x-2 arrow-container"
                    >
                      <span className="text-red arrow-icon">
                        <FaCircleRight />
                      </span>
                      <span className="text-lg font-semibold text-resp-black">
                        fill
                      </span>
                    </Link>
                  </td>
                </tr>

                <tr className="transition-all duration-300 hover:bg-light-grey">
                  <td className="px-4 py-3 text-left border border-gray-200 text-resp-black ">
                    2
                  </td>
                  <td className="px-4 py-3 text-left border border-gray-200 text-resp-black ">
                    Summer Camp (open for all)
                  </td>
                  <td className="px-4 py-3 text-left border border-gray-200 text-resp-black ">
                    <Link
                      to="/summer-camp-form"
                      className="flex items-center cursor-pointer gap-x-2 arrow-container"
                    >
                      <span className="text-red arrow-icon">
                        <FaCircleRight />
                      </span>
                      <span className="text-lg font-semibold text-resp-black">
                        fill
                      </span>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default StudentHandbook;
