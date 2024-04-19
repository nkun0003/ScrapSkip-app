'use client';

import React, { useState } from 'react';
import { createCrap } from '@/app/api/route';

export default function Page() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, type, value, files } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Log the formData state to debug
    console.log('Form Data: ', formData);
    const { title, description, image } = formData;

    if (!title || !description || !image) {
      setError('All fields are required.');
      console.log('Validation failed: ', { title, description, image });
      return;
    }

    const data = new FormData();
    data.append('title', title);
    data.append('description', description);
    for (let i = 0; i < images.length; i++) {
      data.append('images', images[i]);
    }

    setLoading(true);
    try {
      await createCrap(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <div className="py-4 px-8">
        <p>Upload a post of your own crap here.</p>
        <form onSubmit={handleSubmit}>
          <p className="my-2 flex flex-row items-start gap-3">
            <label htmlFor="title" className="text-slate-200 text-lg basis-1/4">
              Title
            </label>
            <input
              id="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="title"
              className="text-black text-lg py-1 px-2 basis-3/4"
              type="text"
              name="title"
            />
          </p>
          <p className="my-2 flex flex-row items-start gap-3">
            <label htmlFor="description" className="text-slate-200 text-lg basis-1/4">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="description"
              className="text-slate-800 text-lg py-1 px-2 basis-3/4"
            />
          </p>
          <p className="my-2 flex flex-row items-start gap-3">
            <label htmlFor="images" className="text-slate-200 text-lg basis-1/4">
              Image (Limit 4MB)
            </label>
            <input
              id="images"
              onChange={handleChange}
              accept="image/*"
              className="bg-slate-600 text-white text-lg py-1 px-2 mx-0 basis-3/4"
              type="file"
              name="image"
            />
          </p>
          {error && <p className="text-red-500">{error}</p>}
          <p className="my-2 flex flex-row">
            <button
              type="submit"
              className="rounded-lg bg-yellow-500 text-slate-800 text-lg py-1 px-2"
              disabled={loading}>
              {loading ? 'Uploading...' : 'Upload'}
            </button>
          </p>
        </form>
      </div>
    </main>
  );
}
