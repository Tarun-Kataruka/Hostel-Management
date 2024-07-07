import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className='flex justify-around p-3 shadow-[0px_1px_3px_-2px_rgb(0,0,0)] w-full'>
      <div className="flex items-center gap-3">
        {/* <img src={logo} alt="Logo" /> */}
        <p className='text-violet-900 text-4xl font-semibold'>NRI Hostel</p>
      </div>
      <ul className="flex items-center gap-12 list-none text-gray-700 text-xl font-normal">
        <li className='flex flex-col items-center justify-center gap-1 cursor-pointer'>
          <Link to='/' className={location.pathname === '/' ? 'text-red-700' : ''}>Home</Link>
          {location.pathname === '/' && <hr className="border-none w-4/5 h-1 rounded-lg bg-red-700"></hr>}
        </li>
        <li className='flex flex-col items-center justify-center gap-1 cursor-pointer'>
          <Link to='/contact' className={location.pathname === '/contact' ? 'text-red-700' : ''}>Contact Us</Link>
          {location.pathname === '/contact' && <hr className="border-none w-4/5 h-1 rounded-lg bg-red-700"></hr>}
        </li>
        <li className='flex flex-col items-center justify-center gap-1 cursor-pointer'>
          <Link to='/about' className={location.pathname === '/about' ? 'text-red-700' : ''}>About Us</Link>
          {location.pathname === '/about' && <hr className="border-none w-4/5 h-1 rounded-lg bg-red-700"></hr>}
        </li>
        <li className='flex flex-col items-center justify-center gap-1 cursor-pointer'>
          <Link to='/student-login' className={location.pathname === '/student-login' ? 'text-red-700' : ''}>Student Login</Link>
          {location.pathname === '/student-login' && <hr className="border-none w-4/5 h-1 rounded-lg bg-red-700"></hr>}
        </li>
        {/* <li className='flex flex-col items-center justify-center gap-1 cursor-pointer'>
          <Link to='/admin-login' className={location.pathname === '/admin-login' ? 'text-red-700' : ''}>Admin Login</Link>
          {location.pathname === '/admin-login' && <hr className="border-none w-4/5 h-1 rounded-lg bg-red-700"></hr>}
        </li> */}
      </ul>
      {/* <div className="flex items-center gap-11">
        {localStorage.getItem('auth-token')
          ? <button className='h-14 w-40 outline-none border-solid border-2 rounded-3xl text-slate-600 text-xl font-medium bg-white cursor-pointer hover:bg-orange-500' onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button>
          : <Link to='/login'>
            <button className='h-14 w-40 outline-none border-solid border-2 rounded-3xl text-slate-600 text-xl font-medium bg-white cursor-pointer hover:bg-orange-500'>Login</button></Link>}
      </div> */}
    </div>
  );
}

export default Navbar;
