import { Inter } from 'next/font/google';
import './globals.css';
import { getSession } from '@/app/actions';
import NavBar from './components/NavBar';
import SearchForm from './components/SearchForm';
import { LoginButton } from './components/LoginButton';

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({ children }) {
  let token = await getSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <div className="flex flex-col p-14 items-center justify-between bg-navbar-image bg-custom-up relative">
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="relative z-10 p-1 text-white">
              <h1 className="font-semibold text-6xl md:text-8xl lg:text-9xl">Scrap Skip</h1>
              <h2 className="text-base md:text-2xl pt-2">Get rid of your crap now</h2>
            </div>
          </div>
        </header>
        <NavBar token={token?.value} />
        {children}
      </body>
    </html>
  );
}
