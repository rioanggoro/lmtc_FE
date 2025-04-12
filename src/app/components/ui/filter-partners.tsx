"use client";
import { partners, type Partner } from "../../../lib/partners";

export default function FilterPartners() {
  return (
    <div className="w-full rounded-lg bg-white p-4 shadow-sm md:w-1/4">
      {/* States Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800">States</h3>
        <select className="mt-2 w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-orange-400">
          <option>Select State</option>
          <option>AUS WIDE</option>
          <option>ACT</option>
        </select>
      </div>

      {/* Categories Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Categories</h3>
        <select className="mt-2 w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-orange-400">
          <option>Select Category</option>
          <option>Apparel</option>
          <option>Automotive</option>
        </select>
      </div>

      {/* Tags Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Tags</h3>
        <select className="mt-2 w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-orange-400">
          <option>Select Tag</option>
          {/* Tambahkan opsi lainnya sesuai kebutuhan */}
        </select>
      </div>

      {/* Store Logos Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Stores</h3>
        <div className="mt-3 flex flex-wrap gap-3">
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner.logo}
              alt={partner.name}
              className="h-12 w-12 rounded-full border border-gray-200 object-cover shadow"
            />
          ))}
        </div>
        <button className="mt-4 rounded-md border border-slate-300 px-8 text-sm text-primary-color hover:border-orange-700">
          See All
        </button>
      </div>

      {/* Explore Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800">Explore</h3>
        <div className="mt-3 flex flex-col gap-2 text-sm text-gray-700">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Popular Partners
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Featured Partners
          </label>
        </div>
      </div>
    </div>
  );
}
