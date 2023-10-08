import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2'>
      <div className="logo mx-5">
        <Image width={200} height={40} src="/logo.png" alt="" />
      </div>
      <div className="nav">
        <ul className='flex items-center space-x-2 font-bold md:text-x'>
          <li><Link href={'/'} passHref>Tshirts</Link></li>
          <li> <Link href={'/'} passHref>Hoodies</Link></li>
          <li><Link href={'/'} passHref>Stickers</Link></li>
          <li><Link href={'/'} passHref>Mugs</Link> </li>
        </ul>
      </div>
      <div className="cart absolute right-0 top-4 mx-5">
        <AiOutlineShoppingCart className='text-xl md:text-3x1' />
      </div>
    </div>
  );
};

export default Navbar;
