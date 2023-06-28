import React from "react";
import styles from "../styles/Navbar.module.css";
import homeStyles from "../styles/Home.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <header className='text-gray-600 body-font'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <Link
            href={"/"}
            className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
          >
            <img
              src={"/app_logo.jpg"}
              alt='SastaMart'
              className={homeStyles.app_logo}
            />
            <span className='ml-3 text-xl'>SastiCart</span>
          </Link>
          <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
            <a className='mr-5 hover:text-gray-900'>First Link</a>
            <a className='mr-5 hover:text-gray-900'>Second Link</a>
            <a className='mr-5 hover:text-gray-900'>Third Link</a>
            <a className='mr-5 hover:text-gray-900'>Fourth Link</a>
          </nav>
          <button className='lg:mt-2 xl:mt-0 flex-shrink-0 flex items-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded'>
            Button
            <svg
              fill='none'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              className='w-4 h-4 ml-1 mt-1'
              viewBox='0 0 24 24'
            >
              <path d='M5 12h14M12 5l7 7-7 7'></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
