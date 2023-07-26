import React from 'react';
import Image from 'next/image'
import { Fa, FaStar, FaStarHalf } from "react-icons/fa";

const Product = (props) => {
    return (
        <div className='shadow-lg m-5 hover:scale-105 p-5 bg-white'>
            <Image src={props.img} width={300} height={250} alt={props.pname} className="mb-2  rounded" />
            <h2 className="mb-2 text-2xl font-bold">{props.name}</h2>
            <h2 className="mb-2 text-2xl font-semibold">$ {props.price}</h2>
            <div className='flex gap-1'>
                <FaStar className=' text-amber-400'/>
                <FaStar  className=' text-amber-400'/>
                <FaStar  className=' text-amber-400'/>
                <FaStar className=' text-amber-400'/>
                <FaStarHalf  className=' text-amber-400'/>
                <p className='text-grey-900 '>4.99</p>
               

            </div>
            <p className="mb-2">Worldwide shifting available</p>
            <p>Buyers protection possible!</p>
        </div>
    );
};

export default Product;