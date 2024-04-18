'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logout from './LogoutButton';

export default function NavBar({ token }) {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <nav className="p-4 bg-gray-600 text-white flex flex-row justify-evenly flex-nowrap">
      <Link
        href="/"
        className={`p-1 underline ${
          isActive('/') ? 'text-yellow-500' : 'text-slate-300'
        } hover:text-white md:text-2xl`}>
        Search 4 Crap
      </Link>
      {token && (
        <>
          <Link
            href="/offer"
            className={`p-1 underline ${
              isActive('/offer') ? 'text-yellow-500' : 'text-slate-300'
            } hover:text-white md:text-2xl`}>
            Offer Crap
          </Link>
          <Link
            href="/mine"
            className={`p-1 underline ${
              isActive('/mine') ? 'text-yellow-500' : 'text-slate-300'
            } hover:text-white md:text-2xl`}>
            My Crap
          </Link>
          <Link
            href="/wiped"
            className={`p-1 underline ${
              isActive('/wiped') ? 'text-yellow-500' : 'text-slate-300'
            } hover:text-white md:text-2xl`}>
            Wiped
          </Link>
          <Logout />
        </>
      )}
    </nav>
  );
}
