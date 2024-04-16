import React, { useState, useEffect } from 'react';
import SearchForm from '../components/SearchForm';
import { LoginButton } from '../components/LoginButton';
import NavBar from '../components/NavBar';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    window.location.href = 'https://mad9124.ohohoh.ca/auth/google';
  };

  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} />
      <main className="flex flex-col items-center justify-center min-h-screen">
        {!isLoggedIn ? <LoginButton onClick={handleLogin} /> : <SearchForm />}
      </main>
    </div>
  );
}
