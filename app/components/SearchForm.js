'use client';

import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';

export default function SearchForm() {
  return (
    <form className="py-4 px-6">
      <p className="flex flex-row gap-2 my-2 items-center">
        <label htmlFor="search" className="py-1 px-2 text-right">
          Search for some crap
        </label>
        <input type="text" placeholder="Keyword" className="text-black py-1 px-2" />
        <button
          type="submit"
          className=" rounded-lg bg-blue-500 text-slate-300 hover:text-white py-1 px-4 text-center basis-1">
          <IoSearch className="mx-auto w-8 h-6" />
        </button>
      </p>
      <p className="flex flex-row gap-2 my-2 items-center">
        <label htmlFor="distance" className="py-1 px-2 basis-2/6 text-right ">
          Within
        </label>
        <select
          id="distance"
          name="distance"
          className=" py-1 px-2 basis-4/6 border-none text-slate-800 dark:text-slate-800">
          <option value="10">10 km</option>
          <option value="30">30 km</option>
          <option value="50">50 km</option>
        </select>
      </p>
      <p className="text-sm">
        ( Leave form blank to match everything within the indicated distance. )
      </p>
    </form>
  );
}
