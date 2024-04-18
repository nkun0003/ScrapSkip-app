'use client';

import React, { useEffect, useState } from 'react';
import { fetchAllCrap } from '@/app/api/route';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CrapPage() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    const fetchData = async () => {
      try {
        // Here using router.query to get search parameters
        const data = await fetchAllCrap(router.query);
        setItems(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [router.isReady, router.query]); // This is just dependency on router.query to refetch when query changes

  if (error) {
    return <p>Error loading items: {error}</p>;
  }

  // Created a condition to display a message if there is no crap, if there is one then display the unordered list
  return (
    <div>
      <h1>Available Crap</h1>
      {items.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <Link href={`/crap/${item.id}`}>
                <a>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
