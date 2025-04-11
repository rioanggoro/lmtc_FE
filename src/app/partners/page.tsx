"use client";
import Link from "next/link";
import Header from "../components/layout/header";
import { partners, type Partner } from "../../lib/partners";
import { useState } from "react";
import { Globe, Instagram, X, Facebook } from "lucide-react";

export default function Partners() {
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const openModal = (partner: Partner) => {
    setSelectedPartner(partner);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true); // Set copied state menjadi true
      // Reset status copied setelah beberapa detik (misalnya 2 detik)
      setTimeout(() => setIsCopied(false), 2000);
    });
  };
  return (
    <div>
      <Header />
      <div className="bg-orange-600 py-4 text-white">
        <div className="container mx-auto flex justify-center space-x-6 overflow-x-auto">
          <Link
            href="/user"
            className="px-3 py-1 font-medium hover:border-b-2 hover:border-white"
          >
            DASHBOARD
          </Link>
          <Link
            href="/partner-search"
            className="border-b-2 border-white px-3 py-1 font-medium"
          >
            PARTNER SEARCH
          </Link>
          <Link
            href="/affiliate-partners"
            className="px-3 py-1 font-medium hover:border-b-2 hover:border-white"
          >
            AFFILIATE PARTNERS
          </Link>
          <Link
            href="/store-search"
            className="px-3 py-1 font-medium hover:border-b-2 hover:border-white"
          >
            STORE SEARCH
          </Link>
          <Link
            href="/categories"
            className="px-3 py-1 font-medium hover:border-b-2 hover:border-white"
          >
            CATEGORIES
          </Link>
        </div>
      </div>

      {/* Filters Section */}
      <div className="container mx-auto mt-8 flex space-x-8">
        <div className="w-1/4">
          <h3 className="text-lg font-semibold">States</h3>
          <select className="mt-2 w-full rounded border border-gray-300 p-2">
            <option>Select State</option>
            <option>AUS WIDE</option>
            <option>ACT</option>
          </select>

          <h3 className="mt-6 text-lg font-semibold">Categories</h3>
          <select className="mt-2 w-full rounded border border-gray-300 p-2">
            <option>Select Category</option>
            <option>Apparel</option>
            <option>Automotive</option>
          </select>

          <h3 className="mt-6 text-lg font-semibold">Tags</h3>
          <select className="mt-2 w-full rounded border border-gray-300 p-2">
            <option>Select Tag</option>
            {/* Add more options here */}
          </select>
        </div>

        {/* Results Section */}
        <div className="w-full">
          <div className="mb-4 flex items-center justify-between">
            <span>{partners.length} Results</span>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search..."
                className="rounded border border-gray-300 p-2"
              />
            </div>
          </div>

          {/* Partner Results */}
          <div className="flex flex-col gap-6">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="flex flex-col items-center rounded bg-white p-4 shadow-md md:flex-row"
              >
                {/* Partner Logo */}
                <div className="mb-4 mr-4 md:mb-0">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-16 w-16"
                  />
                </div>

                {/* Partner Info */}
                <div className="mb-4 flex-1 md:mb-0">
                  <h4 className="font-semibold">{partner.name}</h4>
                  <p className="text-sm text-gray-600">{partner.category}</p>
                </div>

                {/* Action Button */}
                <div className="text-right">
                  <button
                    className="mt-4 w-full rounded-full bg-orange-500 px-4 py-2 text-white transition hover:bg-orange-600"
                    onClick={() => openModal(partner)}
                  >
                    Get Code
                  </button>
                  <button className="mt-2 block text-sm text-blue-600 hover:text-blue-700">
                    Details
                  </button>
                </div>
              </div>
            ))}

            {/* Modal Popup */}
            {showModal && selectedPartner && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                <div className="relative mx-4 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-6">
                  {/* Close button */}
                  <button
                    onClick={closeModal}
                    className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  {/* Partner logo */}
                  <div className="mb-6 flex justify-center">
                    <img
                      src={selectedPartner.logo || "/placeholder.svg"}
                      alt={selectedPartner.name}
                      className="h-32 w-32 object-contain"
                    />
                  </div>

                  {/* Partner name and category */}
                  <h2 className="mb-2 text-center text-2xl font-bold text-gray-800">
                    {selectedPartner.name}
                  </h2>
                  <p className="mb-6 text-center text-gray-600">
                    {selectedPartner.category}
                  </p>

                  {/* Discount information */}
                  <p className="mb-4 text-center font-medium text-gray-800">
                    {selectedPartner.discountText ||
                      `${selectedPartner.discount || "20%"} OFF - must use link and code provided`}
                  </p>

                  {/* Promo code */}
                  <div className="mb-8 flex items-center justify-center gap-2">
                    <div className="rounded-full bg-gray-100 px-6 py-3 font-mono font-bold text-gray-800">
                      {selectedPartner.promoCode || "LMCTCODE"}
                    </div>
                    <button
                      onClick={() =>
                        copyCode(selectedPartner.promoCode || "LMCTCODE")
                      }
                      className="rounded-full bg-orange-500 px-6 py-3 font-medium text-white hover:bg-orange-600"
                    >
                      {isCopied ? "Copied" : "Copy"}{" "}
                      {/* Menampilkan 'Copied' setelah disalin */}
                    </button>
                  </div>

                  {/* Divider */}
                  <hr className="mb-6" />

                  {/* Partner description */}
                  <div className="mb-6 text-gray-700">
                    <p>
                      {selectedPartner.description ||
                        `${selectedPartner.name} is a unique marketplace 100% Australian owned and operated. With a strong focus on developing and maintaining a humanised, warm and sincere customer experience, ${selectedPartner.name} aims to provide customers with a distinct selection of products at affordable prices.`}
                    </p>
                  </div>

                  {/* Social media links */}
                  <div className="mb-6 flex justify-center gap-2">
                    <a
                      href={selectedPartner.facebook || "#"}
                      className="flex h-10 w-10 items-center justify-center rounded-md bg-orange-600 text-white hover:bg-orange-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href={selectedPartner.instagram || "#"}
                      className="flex h-10 w-10 items-center justify-center rounded-md bg-pink-600 text-white hover:bg-pink-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href={selectedPartner.website || "#"}
                      className="flex h-10 w-10 items-center justify-center rounded-md bg-orange-500 text-white hover:bg-orange-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="h-5 w-5" />
                    </a>
                  </div>

                  {/* Categories */}
                  <div className="mb-6 flex flex-wrap justify-center gap-2">
                    {selectedPartner.tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="rounded-md bg-gray-100 px-4 py-2 text-sm text-gray-800"
                      >
                        {tag}
                      </span>
                    )) || (
                      <>
                        <span className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-800">
                          {selectedPartner.category}
                        </span>
                        <span className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-800">
                          Products
                        </span>
                      </>
                    )}
                  </div>

                  {/* Store information */}
                  {selectedPartner.storeAddress && (
                    <div className="mb-4 flex items-start gap-2 text-gray-700">
                      <svg
                        className="h-5 w-5 shrink-0 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>{selectedPartner.storeAddress}</span>
                    </div>
                  )}

                  {/* Contact information */}
                  {selectedPartner.phone && (
                    <div className="mb-2 flex items-center gap-2 text-gray-700">
                      <span className="text-sm font-normal text-secondary-color">
                        Email:
                      </span>
                      <a
                        href={`mailto:${selectedPartner.email}`}
                        className="hoverhover:underline text-sm font-normal text-orange-600"
                      >
                        {selectedPartner.email}
                      </a>
                    </div>
                  )}
                  {selectedPartner.phone && (
                    <div className="mb-2 flex items-center gap-2 text-gray-700">
                      <span className="text-sm font-normal text-secondary-color">
                        Call:
                      </span>
                      <a
                        href={`mailto:${selectedPartner.phone}`}
                        className="text-sm font-normal text-orange-600 hover:underline"
                      >
                        {selectedPartner.phone}
                      </a>
                    </div>
                  )}
                  {/* Map placeholder */}
                  {selectedPartner.hasMap && (
                    <div className="mt-4 rounded border border-gray-200 bg-gray-50 p-2 text-center text-sm text-orange-600 hover:underline">
                      {/* Display uploaded map image */}
                      <div className="mt-2">
                        <img
                          src={selectedPartner.hasMap}
                          alt="Map Location"
                          className="mx-auto mt-4 w-full rounded-lg"
                        />
                      </div>
                      <a href="/user" onClick={(e) => e.preventDefault()}>
                        View larger map
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
