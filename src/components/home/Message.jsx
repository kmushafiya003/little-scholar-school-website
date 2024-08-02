import React, { useState } from 'react'
import MessageOne from '../common/MessageOne';
import MessageTwo from '../common/MessageTwo';
import { message1, message2 } from '../../data/message-data';

function Buttton() {
  const [state, setstate] = useState("Firstcard");
  return (
    <section className='relative w-full'>
      <div className='w-10/12 mx-auto'>
        <div className='flex md:flex-col lg:flex-row'>
          <div className='flex flex-col text-white'>
            <button className='text-lg bg-primary-crocus-purple' onClick={() => setstate("Firstcard")}>Founder</button>
            <button onClick={() => setstate("Secondcard")}>Principal</button>
          </div>
          {state === "Firstcard" && <MessageOne data={message1} cardIndex={1} />}
          {state === "Secondcard" && <MessageTwo data={message2} cardIndex={2} />}
        </div>
      </div>
    </section >
  )
}

export default Buttton