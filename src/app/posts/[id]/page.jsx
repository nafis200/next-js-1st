
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
        </div>
    );
};

export default page;