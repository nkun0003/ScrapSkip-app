import Link from 'next/link';

export default function Navbar({ user }) {
  return (
    <nav class="p-4 bg-gray-600 text-white flex flex-row justify-evenly flex-nowrap">
      <span className=" p-1 underline text-slate-300 hover:text-white md:text-2xl">
        <a href="">Search 4 Crap</a>
      </span>
      <span className=" p-1 underline text-slate-300 hover:text-white md:text-2xl">
        <a href="">Offer Crap</a>
      </span>
      <span className=" p-1 underline text-slate-300 hover:text-white md:text-2xl">
        <a href="">My Crap</a>
      </span>
      <span className=" p-1 underline text-slate-300 hover:text-white md:text-2xl">
        <a href="">Wiped</a>
      </span>
      <span className=" p-1 underline text-slate-300 hover:text-white md:text-2xl">
        <a href="">Logout</a>
      </span>
    </nav>
  );
}
