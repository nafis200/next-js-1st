
import React from 'react';

const page = ({params}) => {
   
    return (
        <div>
            <h2 className="text-2xl">{params.id}</h2>
        </div>
    );
};

export default page;