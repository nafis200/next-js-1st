
import Image from 'next/image';
import React from 'react';

export const generateMetadata = async({params})=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const data = await res.json() 
    return {
        title: `Post details ${data.title}`
    }
}

const page = ({params}) => {
   
    return (
        <div>
            <h2 className="text-2xl">{params.id}</h2>
            <Image src="/image/imgonline-com-ua-Transparent-background-dCx8Jbt05t (1).jpg" alt="not shown" height="300" width="300" />
        </div>
    );
};

export default page;