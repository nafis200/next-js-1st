
import Aboutroute from '@/components/Aboutroute';
import Nafis from '@/components/Nafis';
import React from 'react';
import { Headland_One } from 'next/font/google';

const headlan =  Headland_One({weight:['400'],subsets:['latin']})

export const metadata = {
    title: "About data",
    description: "miles",
  };

const Aboutpage = () => {
    return (
        <div className={`${headlan.className}`}>
             <Aboutroute></Aboutroute>
            <Nafis></Nafis>
        </div>
    );
};

export default Aboutpage;