'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Input } from '../(ui)/Input';
import { CiSearch } from "react-icons/ci";
import { useMediaQuery } from '@/hooks/useMediaQuery';

type NavLink = {
    name: string;
    href: string;
    isActive: boolean;
}

const navLinks: NavLink[] = [
    { name: 'Explore', href: '/', isActive: true },
    { name: 'Trending', href: '/trending', isActive: false },
    { name: 'Popular', href: '/popular', isActive: false },
    { name: 'Kids', href: '/kids', isActive: false },
    { name: 'Liked', href: '/liked', isActive: false },
];

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('Explore');
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleActiveLink = (linkName: string) => {
    setActiveLink(linkName);
  };

  return (
    <div className='w-full px-4 md:px-6 py-4 bg-background/60 shadow-md z-50'>
      
      {/* Desktop Layout - Everything in one row */}
      {!isMobile && (
        <div className='flex items-center justify-between gap-8'>
          
          {/* Logo */}
          <div className="logo shrink-0">
            <Link href='/' className='block bg-gradient-primary px-4 py-2 rounded-md font-ubuntu font-semibold outline-0 whitespace-nowrap'>
              Stream TV
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className='shrink-0'>
            <ul className='flex gap-6 font-ubuntu'>
              {navLinks.map((link) => (
                <li 
                  key={link.name} 
                  className={`text-base font-medium transition-colors whitespace-nowrap text-[1em] letter-spacing-[0.03em] ${
                    activeLink === link.name 
                      ? 'text-primary' 
                      : 'text-foreground/70 hover:text-primary'
                  }`}
                >
                  <Link href={link.href} onClick={() => handleActiveLink(link.name)}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Search Box - Desktop */}
          <div className="search-box flex-1 max-w-md relative">

            <span className='absolute top-1/2 -translate-y-1/2 left-3'>
              <CiSearch size='20' />
            </span>

            <Input placeholder='Search 50,000+ movies and series' className='pl-10 pr-4 py-2 border-primary font-maven text-base w-full'/>
          </div>

        </div>
      )}

      {/* Mobile Layout - Logo & Search on top, Links below */}
      {isMobile && (
        <div className='flex flex-col gap-4'>
          
          {/* Top Row: Logo and Search */}
          <div className='flex items-center gap-4'>
            
            {/* Logo */}
            <div className="logo shrink-0">
              <Link href='/' className='block bg-gradient-primary px-4 py-2 rounded-md font-ubuntu font-semibold outline-0 text-sm whitespace-nowrap'>
                Stream TV
              </Link>
            </div>

            {/* Search Box - Mobile (full width) */}
            <div className="search-box flex-1 relative">
              <span className='absolute top-1/2 -translate-y-1/2 left-2'>
                <CiSearch size='18' />
              </span>
              <Input 
                placeholder='Search...' 
                className='pl-9 pr-3 py-2 border-primary font-maven text-sm w-full' 
              />
            </div>

          </div>

          {/* Bottom Row: Navigation Links */}
          <nav className='w-full'>
            <ul className='flex flex-wrap gap-3 justify-start'>
              {navLinks.map((link) => (
                <li 
                  key={link.name} 
                  className={`text-sm font-medium transition-colors ${
                    activeLink === link.name 
                      ? 'text-primary' 
                      : 'text-foreground/70 hover:text-primary'
                  }`}
                >
                  <Link href={link.href} onClick={() => handleActiveLink(link.name)}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      )}

    </div>
  );
}

export default NavBar;