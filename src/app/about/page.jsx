
import Aboutroute from '@/components/Aboutroute';
import Nafis from '@/components/Nafis';
import React from 'react';

export const metadata = {
    title: "About data",
    description: "miles",
  };

const Aboutpage = () => {
    return (
        <div>
             <Aboutroute></Aboutroute>
            <Nafis></Nafis>
        </div>
    );
};

export default Aboutpage;