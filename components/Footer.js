import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaDribbble, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className='bg-slate-900 text-center p-10 text-white'>
                <h2 className='text-3xl font-bold mb-5'>Influencer Gear</h2>
                <p className='text-lg font-thin mb-5'>Copyright© 2023 Influencer Gear</p>
                <p className='text-lg font-thin mb-5'>All Rights Reserved</p>
                <div className='flex items-center gap-10 justify-center'>
                  <Link href=""><FaInstagram size={30}/></Link>
                  <Link href=""><FaDribbble size={30}/></Link>  
                  <Link href=""><FaTwitter size={30}/></Link>  
                  <Link href=""><FaYoutube size={30}/></Link>    
                </div>
            </footer>
        </div>
    );
};

export default Footer;