import React from 'react'
import { IoMdHome, IoMdSettings } from "react-icons/io";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaFolder, FaBookmark } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import Link from 'next/link';
import { IconType } from 'react-icons/lib';

type IconName = "Home" | "Movies" | "Series" | "Watch List";

const iconMap: Record<IconName, IconType> = {
    "Home": IoMdHome,
    "Movies": BiSolidMoviePlay,
    "Series": FaFolder,
    "Watch List": FaBookmark
};


type SideNavLink = {
    name: IconName;
    href: string;
    isActive: boolean;
}

const sideNavLinks: SideNavLink[] = [
    { name: 'Home', href: '/', isActive: true },
    { name: 'Movies', href: '/movies', isActive: false },
    { name: "Series", href: '/series', isActive: false },
    { name: "Watch List", href: "/watchlist", isActive: false }
]

const SideNav = () => {
  return (
    <>
      <div className="side-nav fixed top-20 bottom-0 left-0 w-64 pt-6 overflow-y-auto bg-background backdrop-blur-sm hidden md:block z-40 scrollbar-hide">
        <ul className='list-none align-center items-center space-y-1 p-4'>
            {sideNavLinks.map((link, index) => {
                const IconComponent = iconMap[link.name];
                return (
                  <li key={index}>
                    <button                
                      className={`
                        w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 cursor-pointer mb-4
                        ${link.isActive 
                            ? 'bg-primary/20 text-primary font-medium shadow-inner' 
                            : 'text-foreground/80 hover:bg-muted hover:text-foreground'
                            }
                        `}>
                      <IconComponent size={20} className={link.isActive ? 'text-primary' : 'text-muted-foreground/80'} />
                      <span className="text-sm">{link.name}</span>
                    </button>
                  </li>
                )
            })}
        </ul>

        <div className="bottom-links absolute bottom-10 left-0 w-full px-4 space-y-4 flex flex-col">
          <Link href='/settings' className='flex items-center gap-4 hover:bg-muted hover:text-foreground w-full space-x-3 p-3 rounded-lg transition-all duration-200 cursor-pointer'>
            <IoMdSettings size={20} />
            <span>Settings</span>
          </Link>

          <Link href="/profile" className='flex items-center gap-4 hover:bg-muted hover:text-foreground w-full space-x-3 p-3 rounded-lg transition-all duration-200 cursor-pointer'>
            <RxAvatar size={20} />
            <span>Account</span>
          </Link>
        </div>

      </div>
    </>
  )
}

export default SideNav