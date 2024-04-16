'use client';

import React from 'react';

export const LoginButton = ({ onClick }) => {
  return (
    <div className="py-4 px-6 flex flex-row justify-center">
      <button
        onClick={onClick}
        className="rounded-2xl bg-blue-500 text-slate-300 hover:text-white py-1 px-4 my-6 text-2xl md:text-3xl">
        Login with Google
      </button>
    </div>
  );
};
