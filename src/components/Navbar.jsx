
"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname()
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
                links.map(link=><Link className={`${
                  pathName === link.path && "text-red-400" 
                }`} key={link.path} href={link.path}>{link.title}</Link>)
            }
          </ul>
        </nav>
        </div>
    );
};

export default Navbar;
