import React from 'react';
import { Link } from 'react-router-dom';
import fac from './facebook.png'
import twit from './x-social-media-white-icon.webp'
import linkde from './linkedin.png'
import tel from './telegram.png'
const Footer = () => {
    return (
      <>
        <footer className="bg-slate-950 flex justify-between h-48 mt-20 text-yellow-300">
          <div className="ml-28 mt-10">
            <p className='text-center text-yellow-300'> Follow For More </p>
            <ul className="flex max-w-96 mt-8">
              <Link to="" className="mx-7">
                <img src={fac} alt="" />
              </Link>
              <Link to="" className="mx-7">
                <img src={twit} alt=""/>
              </Link>
              <Link to="" className="mx-7">
                <img src={linkde} alt="" />
              </Link>
              <Link to="" className="mx-7">
                <img src={tel} alt="" />
              </Link>
            </ul>
          </div>
          <div className="mx-20 mt-10">Our Team</div>
                <div className="mr-32 mt-10">send message
                </div>
        </footer>
      </>
    );
}
 
export default Footer;