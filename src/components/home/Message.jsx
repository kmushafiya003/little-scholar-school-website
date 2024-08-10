import React, { useState } from "react";
import { message1, message2 } from "../../data/common/message-data";
import MessageTemplate from "../common/MessageTemplate";

function Message() {
  const [state, setState] = useState("Firstcard");

  const getButtonClass = (buttonState) => {
    return state === buttonState ? "bg-light-blue" : "bg-dark-blue";
  };

  return (
    <section className="relative w-full py-28 bg-parallax">
      {/* <------------black overlay screen-------------> */}
      <div className="absolute top-0 bottom-0 left-0 right-0 z-10 bg-black opacity-40"></div>
      <div className="relative z-20 w-10/12 mx-auto">
        {/* -------------- heading ----------------- */}

        <div className="relative flex flex-col text-white gap-y-5">
          <h1 className="uppercase text-[2.3rem] font-semibold ">Message's</h1>

          {/* ----------- small underline ----------- */}
          <div className="w-[70px] h-1 bg-white mb-10"></div>
        </div>

        {/* ------------- filter part --------------- */}
        <div className="flex border xxl:pr-1 xxl:pl-10 xl:pl-10 xmd:flex-col xl:flex-row rounded-3xl xmd:items-center xl:items-start dxs:flex-col dxs:items-center dxs:pl-0 dxs:pr-0 bg-light-black">
          <div className="flex flex-col text-white xl:pt-8 space-normal dxs:pt-2 ">
            <button
              className={`flex justify-start text-lg w-64 p-1 rounded-md pl-3  ${getButtonClass(
                "Secondcard"
              )}`}
              onClick={() => setState("Firstcard")}
            >
              Founder
            </button>
            <button
              className={`flex justify-start text-lg w-64 p-1 rounded-md pl-3 ${getButtonClass(
                "Firstcard"
              )}`}
              onClick={() => setState("Secondcard")}
            >
              Principal
            </button>
          </div>
          {state === "Firstcard" && (
            <MessageTemplate data={message1} cardIndex={1} />
          )}
          {state === "Secondcard" && (
            <MessageTemplate data={message2} cardIndex={2} />
          )}
        </div>
      </div>
    </section>
  );
}

export default Message;
