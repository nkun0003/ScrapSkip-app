'use client';

import React, { useEffect, useState } from 'react';
import { fetchAllCrap } from '@/app/api/route';
import NavBar from '@/app/components/NavBar';

export default function CrapPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllCrap()
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch items:', error);
        setError('Failed to load items');
        setLoading(false);
      });
  }, []);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  return (
    <main>
      <NavBar />
      <div className="py-4 px-8">
        {items.map((item) => (
          <div key={item.id} className="bg-slate-100 rounded-lg p-4 my-2">
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
