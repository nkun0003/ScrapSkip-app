'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import NavBar from './components/NavBar';
import SearchForm from './components/SearchForm';
import { LoginButton } from './components/LoginButton';

export default function Home() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check local storage for login status
    if (localStorage.getItem('isLoggedIn')) {
      setIsLoggedIn(true);
    } else {
      router.push('/'); // Redirect to login if not logged in
    }
  }, [router]);

  const handleLoginSuccess = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
    router.push('/'); // Redirect to home after login
  };

  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} />
      <main className="flex flex-col items-center justify-center">
        {isLoggedIn ? <SearchForm /> : <LoginButton onLoginSuccess={handleLoginSuccess} />}
      </main>
    </div>
  );
}
