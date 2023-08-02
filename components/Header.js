
import Link from 'next/link';
import React from 'react';
import {FiSearch,FiShoppingCart} from "react-icons/fi";

const Header = () => {
    return (
        <div>


            <header className='w-screen '>
                <div className='sm:mx-20 flex p-10  flex-col sm:flex-row sm:justify-between items-center'>

                <div className='text-gray-900  text-5xl p-5 sm:p-10 font-bold' >
                    <Link href="/">Influencer Gear</Link>
                </div>
                <div className=' '>
                    <nav className='text-gray-900 text-2xl flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-evenly'>
                        
                        <div className=''>
                        <Link href="/" className='mr-4 sm:mr-10 active:text-pink-700'>Home</Link>
                        <Link href="/" className=' mr-4 sm:mr-10 active:text-pink-700'>Products</Link>
                        <Link href="/" className='mr-4 sm:mr-10 active:text-pink-700'>Sign up</Link>
                        <Link href="/" className='mr-4 sm:mr-10 active:text-pink-700'>Log in</Link>

                        </div>
                        <div className=' p-10  flex sm:flex-none'>
                        <Link href="/" className='mr-4 text-5xl sm:mr-10 text active:text-pink-700'><FiSearch/></Link>
                        <Link href="/" className='active:text-pink-700 text-5xl'><FiShoppingCart/></Link>
                        </div>
                        

                    </nav>
                </div>

                </div>
               
            </header>
                  
        </div>
    );
};

export default Header;