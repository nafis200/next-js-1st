
import React from 'react';

const getPosts = async()=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json() 
    return data
}

const page = async() => {
     const postData = await getPosts()
    return (
        <div>
            <h6>All post</h6>
            <div className='grid grid-cols-3 gap-6'>
              {
                 postData?.slice(0,20)?.map((post)=>(
                    <div key={post.userId} className='border-4 border-red-400'>
                      <h6>{post.title}</h6>
                      <h6>{post.description}</h6>
                    </div>
                 ))
              }
            </div>
        </div>
    );
};

export default page;