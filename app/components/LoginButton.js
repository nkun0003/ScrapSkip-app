import React from 'react';

export const LoginButton = ({ onLoginSuccess }) => {
  const handleLogin = () => {
    // Simulate OAuth redirection and successful login
    onLoginSuccess(); // Here this trigger login success function passed from parent
  };

  return (
    <div className="py-4 px-6 flex flex-row justify-center">
      <button
        onClick={handleLogin}
        className="rounded-2xl bg-blue-500 text-slate-300 hover:text-white py-1 px-4 my-6 text-2xl md:text-3xl">
        Login with Google
      </button>
    </div>
  );
};
