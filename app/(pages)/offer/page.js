'use client';

import React, { useState } from 'react';
import { postCrap } from '../../api/route';

export default function page() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    images: null
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    postCrap(data)
      .then((response) => {
        alert('Item posted successfully');
        console.log(response);
      })
      .catch((error) => {
        alert('Failed to post item');
        console.error(error);
      });
  };

  return (
    <div>
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
              name="title"></input>
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
              className="text-slate-800 text-lg py-1 px-2 basis-3/4"></textarea>
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
              name="images"></input>
          </p>
          <p className="my-2 flex flex-row">
            <button
              type="submit"
              className="rounded-lg bg-yellow-500 text-slate-800 text-lg py-1 px-2">
              Upload
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
