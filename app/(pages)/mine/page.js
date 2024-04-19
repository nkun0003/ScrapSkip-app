'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function WipedPage() {
  const router = useRouter();
  const { status } = router.query;

  const getStatusMessage = () => {
    switch (status) {
      case 'flushed':
        return 'This item has already been flushed (sold).';
      case 'not-found':
        return 'This item could not be found.';
      case 'negotiation':
        return 'This item is currently under negotiation and not available.';
      default:
        return 'The requested item does not exist or an invalid status was provided.';
    }
  };

  return (
    <main>
      <div className="text-center mt-10">
        <h2 className="text-xl px-6 py-2 text-green-600">
          {getStatusMessage()} {/* Dynamic message based on the item's status */}
        </h2>
        <button
          onClick={() => router.push('/')}
          className="mt-4 px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700 transition duration-300">
          Return to Home
        </button>
      </div>
    </main>
  );
}
