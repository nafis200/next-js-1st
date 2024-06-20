

import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const links = [
        {
            title:'Home',
            path:'/'
        },
        {
            title:'About',
            path:'/about'
        }
    ]
    return (
        <div>
        <nav>
          <h6>Logo</h6>
          <ul className='gap-4 p-4 space-x-3'>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            {
                links.map(link=><Link key={link.path} href={link.path}>{link.title}</Link>)
            }
          </ul>
        </nav>
        </div>
    );
};

export default Navbar;
