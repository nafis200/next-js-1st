
import React from 'react';

export const generateMetadata = async({params})=>{
    return {
        title: `Post details ${params.id}`
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