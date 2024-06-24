
"use client"
import { SessionProvider, useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname()
    const router = useRouter()
    const seasion = useSession()
    console.log(seasion)
    
    const links = [
        {
            title:'Home',
            path:'/'
        },
        {
            title:'About',
            path:'/about'
        },
        {
            title:'dashboard',
            path:'/dashboard'
            // group er moddhe dashboard taw /group/dashboard na diye just dashboard dilei kaj korbe
        },
        {
            title:'category',
            path:'/category'
        },
        {
            title:'Post',
            path:'/posts'
        },
        {
            title:'meals',
            path:'/meals'
        }
    ]
    const handlelogin = ()=>{
        router.push('/api/auth/signin')
    }

    const handlelogout = ()=>{
         router.push('/api/auth/signout')
    }
    if(pathName.includes("dashboard"))
    return <div className='bg-red-400 p-4'>I am  dashboard navbar</div>

    return (
        <div>
        <nav className='flex justify-between'>
          <ul className='gap-4 p-4 space-x-3'>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            {
                links.map(link=><Link className={`${
                  pathName === link.path && "text-red-400" 
                }`} key={link.path} href={link.path}>{link.title}</Link>)
            }
          </ul>
          {
            seasion.status === 'unauthenticated' ? <button onClick={handlelogin} className='btn'>Login</button> : <button className='btn' onClick={handlelogout}>Logout</button>
          }
          <h6>
           {
            seasion?.data?.user?.name
           }
          </h6>
        </nav>
        </div>
    );
};

export default Navbar;
