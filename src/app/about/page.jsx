
import Aboutroute from '@/components/Aboutroute';
import Nafis from '@/components/Nafis';
import React from 'react';
import { Headland_One } from 'next/font/google';
// import { redirect } from 'next/navigation';

const headlan =  Headland_One({weight:['400'],subsets:['latin']})

export const metadata = {
    title: "About data",
    description: "miles",
  };

  const getTime = async()=>{
    const res = await fetch(`http://localhost:3000/time`,{cache:'no-store'})
    const data = await res.json()
    // if(data){
    //    redirect('/meals')
    // }
    return data.currentTime

    // const res = await fetch(`http://localhost:3000/time`,{next:{revalidate:5}})
  }

const Aboutpage = async() => {
    const currentTime = await getTime()
    return (
        <div className={`${headlan.className}`}>
             <Aboutroute></Aboutroute>
            <Nafis></Nafis>
            <h2 className='text-center p-6'>{currentTime}</h2>
        </div>
    );
};

export default Aboutpage;