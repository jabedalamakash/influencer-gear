import Image from 'next/image';
import React from 'react';
import Btn from './Btn';


const Banner = () => {
    return (
        <div className='w-screen '>
          
            <div className=' container flex-col-reverse flex sm:flex-row items-center p-20 mx-auto justify-center'>
                <div className='sm:w-1/2 text-center sm:text-left mx-auto p-5 mr-[40px] mt-20 sm:mt-0 '>
                <h1 className='text-5xl  font-bold sm:w-[500px] mb-5'>Share Your Journey as Influencer</h1>
                <p className='text-xl  sm:w-[300px] font-thin mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aliquid quas aperiam fugit, quam eos.</p>
                <Btn name="Prebook Now"/>

                </div>

                <div className=' w-full sm:w-1/2 flex items-center justify-center mx-auto '>
                <Image src="/circle.svg" height={600} width={600}  alt="bg-img" className='bg-cover relative h-auto w-auto'/>
                <Image src="/main-camera.png" height={500} width={440} alt="content" className='bg-content z-3 w-[70%] sm:w-[30%] absolute '/>

            </div>

            </div>
        </div>
    );
};

export default Banner;