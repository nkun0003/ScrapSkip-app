'use client';

import React, { useEffect, useState } from 'react';
import { fetchMyItems } from '@/app/api/route';

export default function MinePage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadItems = async () => {
      setLoading(true);
      try {
        const data = await fetchMyItems(); // Fetch items posted by the user
        setItems(data);
      } catch (error) {
        setError('Failed to load items');
      } finally {
        setLoading(false);
      }
    };

    loadItems();
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
            {/* Add buttons or links for editing, deleting, or updating status */}
          </li>
        ))}
      </ul>
    </div>
  );
}
