// pages/index.js
import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';
import SearchForm from '../components/SearchForm';

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center min-h-screen">
        <SearchForm />
      </main>
    </div>
  );
}
