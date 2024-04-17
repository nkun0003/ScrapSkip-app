'use client';

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar({ isLoggedIn }) {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Remove isLoggedIn flag from local storage
    window.location.href = '/login'; // Redirect to login page on logout
  };

  return (
    <nav className="p-4 bg-gray-600 text-white flex flex-row justify-evenly flex-nowrap">
      <Link
        href="/"
        className={`p-1 underline ${
          isActive('/') ? 'text-yellow-500' : 'text-slate-300'
        } hover:text-white md:text-2xl`}>
        Search 4 Crap
      </Link>
      {isLoggedIn && (
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
          <button
            onClick={handleLogout}
            className="p-1 text-slate-300 hover:text-white md:text-2xl">
            Logout
          </button>
        </>
      )}
    </nav>
  );
}
