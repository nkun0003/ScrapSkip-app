'use client';

import React, { useEffect, useState } from 'react';
import { fetchCrapDetails, markInterested, suggestPickup, agreeToPickup } from '@/app/api/route';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CrapDetailPage() {
  const [item, setItem] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;
    if (!router.isReady || !id) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchCrapDetails(id);
        setItem(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router.isReady, router.query]);

  const handleInterest = async () => {
    try {
      await markInterested(item.id);
      alert('Interest marked!');
      // Reload or update local state to reflect the change
    } catch (error) {
      setError('Failed to mark interest: ' + error.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!item) return <p>No item found.</p>;

  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <button onClick={handleInterest}>I`&apos;`m Interested</button>
    </div>
  );
}
