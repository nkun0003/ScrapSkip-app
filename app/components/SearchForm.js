'use client';

import React from 'react';
import { IoSearch } from 'react-icons/io5';

export default function SearchForm() {
  return (
    <form className="py-4 px-6" action="/crap" method="GET">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-2">
          <label
            htmlFor="search"
            className="py-1 px-2 text-right flex-shrink-0"
            style={{ width: '20%' }}>
            Search for some crap
          </label>
          <input
            type="text"
            name="keyword"
            placeholder="Keyword"
            className="text-black py-1 px-2 flex-grow"
          />
          <button
            type="submit"
            className="rounded-lg bg-blue-500 text-slate-300 hover:text-white py-1 px-4 text-center">
            <IoSearch className="mx-auto w-8 h-6" />
          </button>
        </div>
        <div className="flex flex-row items-center gap-2">
          <label
            htmlFor="distance"
            className="py-1 px-2 text-right flex-shrink-0"
            style={{ width: '20%' }}>
            Within
          </label>
          <select
            id="distance"
            name="distance"
            className="py-1 px-2 flex-grow text-slate-800 dark:text-slate-800">
            <option value="10000">10 km</option>
            <option value="30000">30 km</option>
            <option value="50000">50 km</option>
          </select>
        </div>
      </div>
      <p className="text-sm">
        ( Leave form blank to match everything within the indicated distance. )
      </p>
    </form>
  );
}
