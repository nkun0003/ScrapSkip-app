import React from 'react';
import { redirect } from 'next/navigation';

export const LoginButton = () => {
  const base = process.env.BASE;
  //server side component could call a server action
  //we are just sending the user to the Google Auth page
  //which will return us to this website on the /login/page.js
  const redirectUrl = encodeURIComponent(`${base}/login`);
  const url = `https://mad9124.ohohoh.ca/auth/google?redirect_url=${redirectUrl}`;

  return (
    <form
      className="py-4 px-6 flex flex-row justify-center"
      action={async (formData) => {
        'use server';
        redirect(url);
      }}>
      <button className="rounded-2xl bg-blue-500 text-slate-300 hover:text-white py-1 px-4 my-6 text-2xl md:text-3xl">
        Login with Google
      </button>
    </form>
  );
};

// 'use client';

// import React from 'react';
// import { useRouter } from 'next/navigation';

// export const LoginButton = () => {
//   const base = process.env.BASE;
//   const redirect = encodeURIComponent('http://localhost:3000/login');
//   const url = `https://mad9124.ohohoh.ca/auth/google?redirect_url=${redirect}`;
//   const router = useRouter();

//   const handleSubmit = (event) => {
//     router.push(url);
//   };

//   return (
//     <form className="py-4 px-6 flex flex-row justify-center" action={handleSubmit}>
//       <button className="rounded-2xl bg-blue-500 text-slate-300 hover:text-white py-1 px-4 my-6 text-2xl md:text-3xl">
//         Login with Google
//       </button>
//     </form>
//   );
// };
