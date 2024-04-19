'use client';

import React, { useEffect, useState } from 'react';
import NavBar from '@/app/components/NavBar'; // Make sure the path is correct for your NavBar component
import { fetchMyItems } from '@/app/api/route'; // Adjust path as necessary

export default function MinePage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    setLoading(true);
    try {
      const myItems = await fetchMyItems(); // This should fetch the items posted by the logged-in user
      setItems(myItems);
    } catch (err) {
      setError('Failed to fetch items: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <div className="container mx-auto px-4">
        <h1 className=" text-center text-xl font-semibold text-white my-4">My Posted Items</h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div>
            {items.length > 0 ? (
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.id} className="p-4 border rounded shadow-sm">
                    <h2 className="text-lg font-bold">{item.title}</h2>
                    <p>{item.description}</p>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
                      {item.status}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No items to display.</p>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
