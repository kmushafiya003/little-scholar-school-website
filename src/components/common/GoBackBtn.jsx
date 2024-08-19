import React from 'react'
import { FaCircleLeft } from "react-icons/fa6";

const GoBackBtn = ({handler}) => {
  return (
    <button className='arrow-container text-black  flex items-center gap-x-3 w-max' onClick={handler}>

        <span className='arrow-icon text-dark-blue text-lg'><FaCircleLeft/></span>
        <span className='font-semibold'>Go Back</span>


    </button>
  )
}

export default GoBackBtn