import Image from 'next/image';
import React from 'react';
import Btn from './Btn';

const Join = () => {
    return (
        <main>

            <div className='w-full mb-20 sm:p-20 p-10 mx-auto justify-center flex flex-col-reverse sm:flex-row  items-center'>

                <div className='w-full sm:w-1/2 '>
                    <Image src="/gear.png" width={400} height={200} alt="gear" className='sm:object-left object-center sm:mx-20 mx-auto mt-10 sm:mt-0 p-5 h-auto w-auto'/>



                </div>

                <div className='w-full sm:w-1/2 text-center sm:text-left'>
                    <h2 className='text-3xl sm:text-5xl  font-bold mb-10'>Featured Products at one place</h2>
                    <p className='text-lg sm:mr-[300px] font-thin mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur atque nostrum accusamus ad cupiditate sint quasi distinctio numquam rerum. Placeat sunt aliquam iure debitis iste.</p>
                    <Btn className="object-center" name="Join now"/>


                </div>
            </div>


        </main>
    );
};

export default Join;