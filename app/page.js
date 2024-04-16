// import Image from 'next/image';
// import { LoginButton } from './components/LoginButton';
// import SearchForm from './components/SearchForm';

// export default function Home() {
//   return <main className="flex flex-col items-center justify-between">{/* <SearchForm /> */}</main>;
// }

'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import { LoginButton } from './components/LoginButton';
import NavBar from './components/NavBar';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    window.location.href = 'https://mad9124.ohohoh.ca/auth/google';
  };

  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} />
      <main className="flex flex-col items-center justify-center">
        {!isLoggedIn ? <LoginButton onClick={handleLogin} /> : <SearchForm />}
      </main>
    </div>
  );
}
