
import Link from 'next/link';
import React from 'react';
import { HiOutlineShoppingCart, HiSearch } from "react-icons/hi";

const Header = () => {
    return (
        <div>


            <header className='w-screen '>
                <div className='sm:mx-20 flex p-10  flex-col sm:flex-row sm:justify-between items-center'>

                <div className='text-gray-900  text-3xl p-5 sm:p-10 font-bold' >
                    <Link href="/">Influencer Gear</Link>
                </div>
                <div className=' '>
                    <nav className='text-gray-900 text-xl flex  items-center justify-center sm:justify-evenly'>
                        <Link href="/" className='mr-4 sm:mr-10 active:text-pink-700'>Home</Link>
                        <Link href="/" className=' mr-4 sm:mr-10 active:text-pink-700'>Products</Link>
                        <Link href="/" className='mr-4 sm:mr-10 active:text-pink-700'>Sign up</Link>
                        <Link href="/" className='mr-4 sm:mr-10 active:text-pink-700'>Log in</Link>
                        <Link href="/" className='mr-4 sm:mr-10 active:text-pink-700'><HiSearch size={25}/></Link>
                        <Link href="/" className='active:text-pink-700'><HiOutlineShoppingCart size={25}/></Link>

                    </nav>
                </div>

                </div>
               
            </header>
                  
        </div>
    );
};

export default Header;