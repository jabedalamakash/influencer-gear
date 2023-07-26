import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const Btn = (props) => {
    return (
        <div>
            <button className='bg-pink-600 text-center text-white px-3 py-2 rounded-full'>{props.name }</button>
        </div>
    );
};

export default Btn;