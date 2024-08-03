import React from 'react';
import { footerData } from '../../data/footer-links';
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
      <div className='relative w-full py-10 bg-gray-900 text-dark-light-black'>
        <div className='w-10/12 mx-auto'>
          <div className='container grid grid-cols-1 gap-8 mx-auto md:grid-cols-4'>
            <div className='flex flex-col items-center md:items-start'>
              <img src={logo} alt='Logo' className='w-24 h-auto mb-4' />
              <p>{address}</p>
              <div className='flex mt-4 space-x-4'>
                {socialMedia.map((media) => (
                  <Link key={media.id} to={media.url} className='text-white'>
                    <i className={`${media.icon} text-2xl`}></i>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className='mb-4 text-[1.5rem] border-b-[0.1px] pb-5'>Birthdays</h3>
              <ul>
                {birthdays.map((birthday) => (
                  <li key={birthday.id} className='mb-4'>
                    <div className='flex'>
                      <img
                        src={birthday.image}
                        alt={birthday.name}
                        className='mr-4 rounded-full w-14 h-14'
                      />
                      <div>
                        <p className=''>{birthday.name}</p>
                        <p className='text-sm text-gray-400'>{birthday.date}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='mb-4 text-[1.5rem] border-b-[0.1px] pb-5'>Useful Links</h3>
              <ul>
                {usefulLinks.map((link) => (
                  <li key={link.id} className='flex items-center mb-2'>
                    <FaChevronRight className='mr-2 text-gray-400 text-gray-l' />
                    <Link to={link.url} className='hover:underline'>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='mb-4 text-[1.5rem] border-b-[0.1px] pb-5'>School Timings</h3>
              <p className='pb-5 mb-4 border-b-[0.1px]'>
                Summers: {schoolTimings.summer}
              </p>
              <p className='mb-4'>Winters: {schoolTimings.winter}</p>
              <p>Total Visits: {schoolTimings.totalVisits}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-8 text-center text-dark-light-black bg-resp-black'>
        <p>{copyright}</p>
        <p>
          Made with <span className=''>&hearts;</span> by{' '}
          <Link to={developer.url} className='hover:underline'>
            {developer.name}
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
