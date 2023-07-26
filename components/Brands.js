import Image from 'next/image';
import React from 'react';

const Brands = () => {
    return (
        <div className='sm:mx-20  '>
            <div className='container gap-5 mx-auto p-10 border-y mb-20 flex flex-wrap items-center justify-evenly '>
                <Image src="/Alibaba.svg" height={70} width={80} alt="Alibaba"/>
                <Image src="/Amazon.svg" height={70} width={80} alt="Amazon"/>
                <Image src="/daraz.svg" height={70} width={80} alt="daraz"/>
                <Image className="" src="/Ebay.svg" height={70} width={80} alt="Ebay"/>
                <Image src="/rakuten.svg" height={70} width={80} alt="rakuten"/>
                <Image src="/walmart.svg" height={70} width={80} alt="walmart"/>
                
                <Image src="/Target.svg" height={70} width={80} alt="target"/>
            </div>
        </div>
    );
};

export default Brands;