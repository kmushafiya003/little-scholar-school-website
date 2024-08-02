import React, { useState } from 'react';
import MessageOne from '../common/MessageOne';
import MessageTwo from '../common/MessageTwo';
import { message1, message2 } from '../../data/message-data';

function Button() {
  const [state, setState] = useState("Firstcard");

  const getButtonClass = (buttonState) => {
    return state === buttonState ? 'bg-light-blue' : 'bg-dark-blue';
  };

  return (
    <section className='relative w-full '>
      <div className='w-10/12 mx-auto'>
        <div className='flex border lg:pr-5 lg:pl-5 xmd:flex-col xl:flex-row rounded-3xl xmd:items-center xl:items-start dxs:flex-col dxs:items-center dxs:pl-0 dxs:pr-0 bg-light-black'>
          <div className='flex flex-col pt-12 text-white space-normal'>
            <button
              className={`flex justify-start text-lg w-64 p-1 rounded-md pl-3 ${getButtonClass("Secondcard")}`}
              onClick={() => setState("Firstcard")}
            >
              Founder
            </button>
            <button
              className={`flex justify-start text-lg w-64 p-1 rounded-md pl-3 ${getButtonClass("Firstcard")}`}
              onClick={() => setState("Secondcard")}
            >
              Principal
            </button>
          </div>
          {state === "Firstcard" && <MessageOne data={message1} cardIndex={1} />}
          {state === "Secondcard" && <MessageTwo data={message2} cardIndex={2} />}
        </div>
      </div>
    </section>
  );
}

export default Button;
