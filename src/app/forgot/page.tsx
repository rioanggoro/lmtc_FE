"use client";

import type React from "react";
import { LogOut } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function ResetPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password reset requested for:", email);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4">
      {/* Logo */}
      <div className="mb-8 flex justify-center">
        <Image
          src="/img/hopkins_img.png"
          alt="LMCT+ Logo"
          width={350}
          height={100}
          className="mx-auto block max-w-[350px]"
        />
      </div>

      {/* Reset Password Card */}
      <div className="w-full max-w-md overflow-hidden rounded-lg bg-white shadow-md">
        {/* Header */}
        <div className="relative bg-primary-color p-4 pb-16">
          <h1 className="text-xl font-medium text-slate-50">Reset Password</h1>
          <p className="text-sm text-slate-50">
            Recover password with <strong>LMCT+</strong>
          </p>
        </div>

        {/* Icon */}
        <div className="-mt-8 mb-6 flex justify-center">
          <div className="rounded-full bg-white p-3 shadow-sm">
            <div className="rounded-full bg-blue-100 p-3"></div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 pt-0">
          <div className="mb-6">
            <label htmlFor="email" className="mb-2 block text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-2 text-white transition-colors hover:bg-blue-700"
          >
            Submit
          </button>

          <div className="mt-6 text-center">
            <a
              href="/login"
              className="inline-flex items-center text-gray-600 hover:text-blue-600"
            >
              <LogOut className="mr-1 h-4 w-4" /> Login
            </a>
          </div>
        </form>
      </div>

      {/* Footer */}
      <div className="mt-8 text-sm text-gray-500">© 2025 LMCT+</div>
    </div>
  );
}

// function SteeringWheelIcon() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="text-blue-600"
//     >
//       <circle cx="12" cy="12" r="8" />
//       <circle cx="12" cy="12" r="3" />
//       <line x1="12" y1="4" x2="12" y2="9" />
//       <line x1="12" y1="15" x2="12" y2="20" />
//       <line x1="4" y1="12" x2="9" y2="12" />
//       <line x1="15" y1="12" x2="20" y2="12" />
//     </svg>
//   );
// }
