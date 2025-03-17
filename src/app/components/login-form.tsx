"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt with:", { email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="mb-4">
        <label htmlFor="email" className="mb-1 block text-gray-700">
          Email: <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
          className="w-full rounded-md border border-gray-200 p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="mb-1 block text-gray-700">
          Password: <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full rounded-md border border-gray-200 p-3 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-500"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <div className="mb-6">
        <label className="mb-1 block text-gray-700">
          Captcha: <span className="text-red-500">*</span>
        </label>
        <div className="rounded-md border border-gray-200 bg-gray-50 p-3">
          {/* This is a placeholder for the reCAPTCHA */}
          <div className="flex items-center">
            <div className="mr-2 h-5 w-5 rounded border border-gray-400"></div>
            <span className="text-sm text-gray-600">I&apos;m not a robot</span>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-sky-500 px-4 py-3 font-medium text-white transition-colors duration-300 hover:bg-sky-600"
      >
        Log In
      </button>

      <div className="mt-4 text-center">
        <Link
          href="/forgot-password"
          className="text-sm text-sky-500 hover:text-sky-600"
        >
          Forgot your password?
        </Link>
      </div>

      <div className="mt-6 text-center text-gray-600">
        Do not have an account?{" "}
        <Link href="/signup" className="text-sky-500 hover:text-sky-600">
          Sign Up
        </Link>
      </div>
    </form>
  );
}
