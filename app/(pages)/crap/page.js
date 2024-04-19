'use client';

import React, { useEffect, useState } from 'react';
import { fetchAllCrap } from '@/app/api/route';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CrapPage() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady || !router.query) return; // This just Check both for readiness and existence of query

    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchAllCrap(router.query);
        setItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router.isReady, router.query]);

  if (error) {
    return <p>Error loading items: {error}</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  const searchInput = router.query && router.query.keyword ? router.query.keyword : 'searched crap';

  return (
    <div className="text-center mt-10">
      <h1>Available Crap</h1>
      <h2>
        There are {items.length} AVAILABLE matches for {searchInput}
      </h2>
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
