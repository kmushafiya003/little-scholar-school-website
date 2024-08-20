import React from 'react';
import { footerData } from '../../data/common/footer-data';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';


const Footer = () => {
  const {
    logo,
    address,
    socialMedia,
    birthdays,
    usefulLinks,
    schoolTimings,
    copyright,
    developer,
  } = footerData;

 

  return (
    <footer>
      <div className='relative w-full pt-20 pb-10 bg-bright-black text-dark-light-black '>
        <div className='w-10/12 mx-auto'>
          <div className='container grid grid-cols-1 gap-8 mx-auto md:grid-cols-4'>
            <div className='flex flex-col items-center md:items-start'>
              <img src={logo} alt='Logo' className='w-32 h-auto mb-4' />
              <p className='font-light'>{address}</p>
              <div className='flex mt-4 space-x-4'>
                {socialMedia.map((media) => (
                  <Link key={media.id} to={media.url} className='text-white group'>
                    <div className='text-lg w-max p-2 rounded-md bg-dark-blue group-hover:bg-resp-black group-hover:scale-90 transition-all duration-300'>
                    {media.icon}
                    </div>
              
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className='mb-6 text-[1.5rem] border-b-[3px] border-border-2 border-opacity-25 pb-5'>Birthdays</h3>
              <ul className='flex flex-col gap-y-3 h-[250px] overflow-y-scroll'>
                {birthdays.map((birthday) => (
                  <li key={birthday.id} className='mb-4 '>
                    <div className='flex'>
                      <img
                        src={birthday.image}
                        alt={birthday.name}
                        className='mr-4 rounded-full w-14 h-14'
                      />
                      <div>
                        <p className=''>{birthday.name}</p>
                        <p className='text-sm text-gray-400 font-light'>{birthday.date}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='mb-6 text-[1.5rem] border-b-[3px] border-border-2 border-opacity-25 pb-5'>Useful Links</h3>
              <ul className='flex flex-col gap-y-3'>
                {usefulLinks.map((link) => (
                  <li key={link.id} className='flex items-center mb-2'>
                    <FaChevronRight className='mr-2 text-dark-blue text-sm' />
                    <Link to={link.url} className='hover:text-white transition-colors duration-200'>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='mb-6 text-[1.5rem] border-b-[3px] border-border-2 border-opacity-25 pb-5'>School Timings</h3>
              <p className='pb-5 mb-2 border-b-[0.1px] border-border-2 border-opacity-25  font-light'>
                Summers: {schoolTimings.summer}
              </p>
              <p className='mb-4 font-light'>Winters: {schoolTimings.winter}</p>
              <p className='font-light'>Total Visits: {schoolTimings.totalVisits}</p>
            </div>
          </div>
        </div>
      </div>
      <div className=' py-4 text-center font-light text-dark-light-black bg-resp-black'>
        <p>{copyright}</p>
        <p>
          Made with <span className=''>&hearts;</span> by{' '}
          <Link to={developer.url} className='hover:underline font-medium'>
            {developer.name}
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
