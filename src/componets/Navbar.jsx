import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { BsCartFill, BsBookmarkFill } from 'react-icons/bs';
import { FaUserFriends, FaWallet } from 'react-icons/fa';
import { IoIosHelpCircle } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi'; // Replaced TbTruckDelivery with GiHamburgerMenu
import { MdFavorite } from 'react-icons/md'; // Replaced MdHelp with MdFavorite

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/* Left side */}
      <div className='flex items-center'>
        <div onClick={() => setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Super <span className='font-bold'>Teast</span>
        </h1>
      </div>

      {/* Search Input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Search foods'
        />
      </div>

      {/* Cart button */}
      <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
        <BsCartFill size={20} className='mr-2' /> Cart
      </button>

      {/* Mobile Menu Overlay */}
      {nav && <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0 transition-opacity duration-300'></div>}

      {/* Side drawer menu */}
      <div className={`fixed top-0 ${nav ? 'left-0' : 'left-[100%]'} w-[300px] h-screen bg-white z-10 duration-300 transition-transform`}>
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
          Super <span className='font-bold'>Teast</span>
        </h2>
        <nav>
          <ul className='flex flex-col p-4 text-gray-800'>
            <li className='text-xl py-4 flex'><GiHamburgerMenu size={25} className='mr-4' />Menu</li>
            <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4' /> Favorites</li>
            <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4' /> Wallet</li>
            <li className='text-xl py-4 flex'><IoIosHelpCircle size={25} className='mr-4' /> Help</li>
            <li className='text-xl py-4 flex'><BsBookmarkFill size={25} className='mr-4' /> Offers</li>
            <li className='text-xl py-4 flex'><BsCartFill size={25} className='mr-4' /> My Orders</li>
            <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
