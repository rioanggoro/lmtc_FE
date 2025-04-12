"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FilterPartners() {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    location: false,
    discount: false,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    });
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">Filters</h3>

      {/* Categories Section */}
      <div className="mb-4 border-b border-gray-100 pb-4">
        <button
          className="mb-2 flex w-full items-center justify-between font-medium"
          onClick={() => toggleSection("categories")}
        >
          <span>Categories</span>
          <ChevronDown
            className={`h-5 w-5 transform transition-transform ${expandedSections.categories ? "rotate-180" : ""}`}
          />
        </button>
        {expandedSections.categories && (
          <div className="mt-2 space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="category-automotive"
                className="h-4 w-4 rounded border-gray-300 text-orange-600"
              />
              <label
                htmlFor="category-automotive"
                className="ml-2 text-sm text-gray-700"
              >
                Automotive
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="category-beauty"
                className="h-4 w-4 rounded border-gray-300 text-orange-600"
              />
              <label
                htmlFor="category-beauty"
                className="ml-2 text-sm text-gray-700"
              >
                Beauty
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="category-electronics"
                className="h-4 w-4 rounded border-gray-300 text-orange-600"
              />
              <label
                htmlFor="category-electronics"
                className="ml-2 text-sm text-gray-700"
              >
                Electronics
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="category-fashion"
                className="h-4 w-4 rounded border-gray-300 text-orange-600"
              />
              <label
                htmlFor="category-fashion"
                className="ml-2 text-sm text-gray-700"
              >
                Fashion
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="category-food"
                className="h-4 w-4 rounded border-gray-300 text-orange-600"
              />
              <label
                htmlFor="category-food"
                className="ml-2 text-sm text-gray-700"
              >
                Food & Beverage
              </label>
            </div>
            <div className="mt-2">
              <button className="text-sm text-orange-600 hover:underline">
                Show more
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Location Section */}
      <div className="mb-4 border-b border-gray-100 pb-4">
        <button
          className="mb-2 flex w-full items-center justify-between font-medium"
          onClick={() => toggleSection("location")}
        >
          <span>Location</span>
          <ChevronDown
            className={`h-5 w-5 transform transition-transform ${expandedSections.location ? "rotate-180" : ""}`}
          />
        </button>
        {expandedSections.location && (
          <div className="mt-2 space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="location-nsw"
                className="h-4 w-4 rounded border-gray-300 text-orange-600"
              />
              <label
                htmlFor="location-nsw"
                className="ml-2 text-sm text-gray-700"
              >
                New South Wales
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="location-vic"
                className="h-4 w-4 rounded border-gray-300 text-orange-600"
              />
              <label
                htmlFor="location-vic"
                className="ml-2 text-sm text-gray-700"
              >
                Victoria
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="location-qld"
                className="h-4 w-4 rounded border-gray-300 text-orange-600"
              />
              <label
                htmlFor="location-qld"
                className="ml-2 text-sm text-gray-700"
              >
                Queensland
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="location-wa"
                className="h-4 w-4 rounded border-gray-300 text-orange-600"
              />
              <label
                htmlFor="location-wa"
                className="ml-2 text-sm text-gray-700"
              >
                Western Australia
              </label>
            </div>
            <div className="mt-2">
              <button className="text-sm text-orange-600 hover:underline">
                Show more
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Discount Section */}
      <div className="mb-4">
        <button
          className="mb-2 flex w-full items-center justify-between font-medium"
          onClick={() => toggleSection("discount")}
        >
          <span>Discount</span>
          <ChevronDown
            className={`h-5 w-5 transform transition-transform ${expandedSections.discount ? "rotate-180" : ""}`}
          />
        </button>
        {expandedSections.discount && (
          <div className="mt-2 space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="discount-10"
                className="h-4 w-4 rounded border-gray-300 text-orange-600"
              />
              <label
                htmlFor="discount-10"
                className="ml-2 text-sm text-gray-700"
              >
                10% or more
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="discount-20"
                className="h-4 w-4 rounded border-gray-300 text-orange-600"
              />
              <label
                htmlFor="discount-20"
                className="ml-2 text-sm text-gray-700"
              >
                20% or more
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="discount-30"
                className="h-4 w-4 rounded border-gray-300 text-orange-600"
              />
              <label
                htmlFor="discount-30"
                className="ml-2 text-sm text-gray-700"
              >
                30% or more
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="discount-40"
                className="h-4 w-4 rounded border-gray-300 text-orange-600"
              />
              <label
                htmlFor="discount-40"
                className="ml-2 text-sm text-gray-700"
              >
                40% or more
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="discount-50"
                className="h-4 w-4 rounded border-gray-300 text-orange-600"
              />
              <label
                htmlFor="discount-50"
                className="ml-2 text-sm text-gray-700"
              >
                50% or more
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Apply Filters Button */}
      <button className="mt-2 w-full rounded-md bg-orange-500 py-2 text-center font-medium text-white hover:bg-orange-600">
        Apply Filters
      </button>
    </div>
  );
}
