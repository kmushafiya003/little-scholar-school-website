import React from 'react'
import { VscPassFilled } from 'react-icons/vsc'

const admissionProcedure = {
  title: 'REGISTRATION AND ADMISSION PROCEDURE AND CRITERION',
  steps: [
    'Procure prospectus/admission form from the school office on any working day between 9:30 am and 1:00 pm OR Use the Online Admission form available on our official website. <a href="https://littlescholars-kashipur.com/" target="_blank"  rel="noopener noreferrer" class="font-bold text-gray-1 hover:underline hover:text-black">www.littlescholars-kashipur.com</a>',
    'Submit the dully filled form at the school office OR on the online admission link and obtain/generate receipt.',
    'For classes Nursery – IX, birth certificate, school’s report card and TC are mandatory.',
    'Date and time of Subjective Aptitude Assessment(SAA) shall be intimated either telephonically or at the registered email of the candidate.',
    'No SAA for classes Pre Nursery, Nursery, KG and I.',
    'Admission to classes 10 and 12 are given only in transfer cases with TC from previous school as well as all dues clearance slip from the concerned authority.',
    'For new admission except class Nursery admission is on the basis of admission test in the Maths, English, Hindi & Science.',
    'For old student, minimum of 33% marks in grand total (excluding practical marks), which include half yearly, UTs/PTs and Annual Exams are mandatory for admission.'
  ]
}

const AdmissionProcedure = () => {
  return (
    <section className='relative w-full'>
      <div className='w-10/12 mx-auto'>
        <h2 className='mb-4 text-[2.2rem] font-semibold mt-20'>
          {admissionProcedure.title}
        </h2>
        {/* ----------- small underline ----------- */}
        <div className='w-[70px] h-1 bg-black mb-10'></div>

        <ul className='flex flex-col font-light gap-y-3 text-gray-l'>
          {admissionProcedure.steps.map((step, index) => (
            <li key={index} className='flex gap-x-2'>
              <span className='mt-[10px]'>
                {' '}
                <VscPassFilled className='text-dark-blue' />
              </span>

              <span
                className='leading-7'
                dangerouslySetInnerHTML={{ __html: step }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default AdmissionProcedure
