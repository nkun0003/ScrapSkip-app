'use client';

import React, { useEffect, useState } from 'react';

export default function Page() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://mad9124.ohohoh.ca/api/crap', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
          // Ensure you add the appropriate headers to manage authentication
        }
      });
      if (response.ok) {
        const data = await response.json();
        setItems(data.items); // Adjust according to the actual response structure
      } else {
        console.error('Failed to fetch items');
      }
    }
    fetchData();
  }, []);

  return (
    <div className="py-4 px-8">
      <p className="py-2">
        These are pieces of crap that you have posted, as well as pieces of crap that you have
        expressed interest in owning.
      </p>
      <div>
        {items.map((item) => (
          <div key={item.id} className="bg-slate-100 rounded-lg p-4 my-2">
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p>{item.description}</p>
            <p>Status: {item.status}</p>
            <button className="bg-blue-500 text-white py-1 px-2 rounded-lg">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}
