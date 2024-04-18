'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { fetchItemById, updateItemStatusById } from '../../../api/route';
import NavBar from '@/app/components/NavBar';

export default function ItemDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState(null);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (id) {
      fetchItemById(id)
        .then((data) => setItem(data.item))
        .catch((error) => console.error('Failed to fetch item:', error));
    }
  }, [id]);

  const handleStatusChange = async (newStatus, extraData = {}) => {
    try {
      const updatedItem = await updateItemStatusById(id, newStatus, extraData);
      setItem(updatedItem);
    } catch (error) {
      console.error('Failed to update item status:', error);
    }
  };

  if (!item) return <div>Loading...</div>;

  return (
    <main>
      <NavBar />
      <div className="py-4 px-8">
        <h1 className="text-xl font-bold">{item.title}</h1>
        <p>{item.description}</p>
        <p>Status: {item.status}</p>
        {/* Conditional rendering based on status and user role */}
        {item.status === 'AVAILABLE' && userData.id !== item.ownerId && (
          <button
            onClick={() => handleStatusChange('INTERESTED')}
            className="bg-green-500 text-white py-1 px-2 rounded-lg">
            Express Interest
          </button>
        )}
        {item.status === 'INTERESTED' && userData.id === item.ownerId && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleStatusChange('SUGGESTED', {
                address: e.target.address.value,
                pickupDate: e.target.pickupDate.value,
                pickupTime: e.target.pickupTime.value
              });
            }}>
            <input name="address" placeholder="Address" required />
            <input type="date" name="pickupDate" required />
            <input name="pickupTime" placeholder="Time range" required />
            <button type="submit" className="bg-blue-500 text-white py-1 px-2 rounded-lg">
              Set Pickup Details
            </button>
          </form>
        )}
        {item.status === 'SUGGESTED' && userData.id !== item.ownerId && (
          <button
            onClick={() => handleStatusChange('AGREED')}
            className="bg-yellow-500 text-white py-1 px-2 rounded-lg">
            Agree to Pickup
          </button>
        )}
        {item.status === 'AGREED' && userData.id === item.ownerId && (
          <button
            onClick={() => handleStatusChange('FLUSHED')}
            className="bg-red-500 text-white py-1 px-2 rounded-lg">
            Mark as Flushed
          </button>
        )}
      </div>
    </main>
  );
}
