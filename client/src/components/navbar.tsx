import { Outlet } from 'react-router-dom';
import {
  FaUserAstronaut,
  FaFacebook,
  FaInstagram,
  FaTwitch,
  FaTwitter,
} from 'react-icons/fa';

export default function Navbar() {
  return (
    <div className='font-sans'>
      <div className='z-10 flex justify-between items-baseline px-4 w-screen py-8  text-white font-bold bg-[#2a2753] sticky top-0 '>
        <div className='text-2xl flex gap-x-4'>
          <FaTwitter />
          <FaFacebook />
          <FaInstagram />
          <FaTwitch />
        </div>
        <h1 className='text-5xl'>Blogs</h1>
        <span className='text-3xl'>
          <FaUserAstronaut />
        </span>
      </div>
      <Outlet />
    </div>
  );
}
