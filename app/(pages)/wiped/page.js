'use client';

import React, { useEffect, useState } from 'react';
import { fetchWipedItems } from '@/app/api/route';

export default function WipedPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadItems = async () => {
      setLoading(true);
      try {
        const wipedItems = await fetchWipedItems();
        setItems(wipedItems);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadItems();
  }, []);

  return (
    <main>
      <div className="text-center mt-10">
        <h2 className="text-xl px-6 py-2 text-green-600">
          These are pieces of crap that you have posted and managed to get rid of.
        </h2>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <ul>
            {items.map((item) => (
              <li key={item.id} className="mt-2">
                {item.title} - {item.description}
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
