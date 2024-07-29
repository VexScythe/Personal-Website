'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { links } from '../lib/COSTANTS';

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-10">
      {links.map((link, i) => {
        return (
          <Link
            href={link.path}
            key={i}
            className={`${
              link.path === pathname && 'text-accent border-b-2 border-accent'
            }  capitalize font-medium hover:text-accent-hover transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
