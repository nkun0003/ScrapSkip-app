'use client';

import React, { useEffect, useState } from 'react';
import { fetchMyItems } from '@/app/api/route';

export default function MinePage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('token');
        const data = await fetchMyItems(token);
        setItems(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>My Posted Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title} - {item.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
