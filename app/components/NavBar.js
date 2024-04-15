import Link from 'next/link';

export default function Navbar({ user }) {
  return (
    <nav class="p-4 bg-gray-600 text-white flex flex-row justify-evenly flex-nowrap">
      <span>
        <a href="">Search 4 Crap</a>
      </span>
    </nav>
  );
}
