import React from 'react';

export default function Offer() {
  return (
    <div className="py-4 px-8">
      <p>Upload a post of your own crap here.</p>
      <form action="">
        <p className="my-2 flex flex-row items-start gap-3">
          <label htmlFor="title" className="text-slate-200 text-lg basis-1/4">
            Title
          </label>
          <input
            id="title"
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
            placeholder="description"
            className="text-slate-800 text-lg py-1 px-2 basis-3/4"></textarea>
        </p>
        <p className="my-2 flex flex-row items-start gap-3">
          <label htmlFor="images" className="text-slate-200 text-lg basis-1/4">
            Image (Limit 4MB)
          </label>
          <input
            id="images"
            accept="image/*"
            className="bg-slate-600 text-white text-lg py-1 px-2 mx-0 basis-3/4"
            type="file"
            name="images"></input>
        </p>
        <p className="my-2 flex flex-row">
          <button className=" rounded-lg bg-yellow-500 text-slate-800 text-lg py-1 px-2">
            Upload
          </button>
        </p>
      </form>
    </div>
  );
}
