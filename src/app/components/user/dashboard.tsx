"use client";

import { Home, Clock, ChevronDown, Menu, UserCheck } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback } from "../../../components/ui/avatar";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Background gradient */}
      <div className="absolute inset-x-0 top-0 -z-10 h-56 rounded-b-3xl bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700"></div>

      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <div className="flex">
          <Link href="/" className="text-2xl font-bold text-white">
            Hopkins
          </Link>
        </div>

        <nav className="hidden items-center space-x-8 md:flex">
          <Link
            href="/membership"
            className="text-white transition hover:text-orange-200"
          >
            Membership
          </Link>
          <Link
            href="/discounts"
            className="text-white transition hover:text-orange-200"
          >
            Discounts
          </Link>
          <div className="group relative">
            <button className="flex items-center text-white transition hover:text-orange-200">
              Giveaways
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </div>
        </nav>

        <div className="flex items-center space-x-4">
          <Avatar className="bg-gray-100">
            <AvatarFallback>J</AvatarFallback>
          </Avatar>
          <button className="text-white md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="flex items-center px-6 py-2 text-white/80">
        <Link href="/" className="hover:text-white">
          <Home className="h-5 w-5" />
        </Link>
        <span className="mx-2"></span>
        <span className="text-white">Dashboard</span>
      </div>

      {/* User welcome section */}
      <section className="flex items-center px-6 py-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 text-xl font-semibold text-gray-600">
          JH
        </div>
        <div className="ml-4">
          <h1 className="text-2xl font-bold text-white">
            Welcome Jay Hopkins!
          </h1>
          <p className="text-orange-100">admin@rsg-wa.com.au</p>
        </div>
      </section>

      {/* Main content */}
      <main className="flex-1 px-6 py-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <div className="flex items-start">
              <div className="rounded-full bg-green-100 p-3">
                <UserCheck className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-medium text-gray-500">Hopkins Loyalty</h3>
                <p className="mt-1 text-xl font-semibold text-gray-800">
                  Active (x 1)
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <div className="flex items-start">
              <div className="rounded-full bg-yellow-100 p-3">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-medium text-gray-500">
                  Once off Package Access
                </h3>
                <p className="mt-1 text-xl font-semibold text-gray-800">
                  810 Days
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom navigation */}
      <div className="mt-auto bg-orange-600 py-4 text-white">
        <div className="container mx-auto flex justify-center space-x-6 overflow-x-auto">
          <Link
            href="/dashboard"
            className="border-b-2 border-white px-3 py-1 font-medium"
          >
            DASHBOARD
          </Link>
          <Link
            href="/partner-search"
            className="px-3 py-1 font-medium hover:border-b-2 hover:border-white"
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

      {/* Categories section */}
      <div className="container mx-auto grid grid-cols-1 gap-6 p-6 md:grid-cols-4">
        <div className="flex items-center rounded-lg bg-white p-4 shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-3 h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <span className="font-medium">Automotive</span>
        </div>

        {/* Right side content placeholder */}
        <div className="relative h-40 overflow-hidden rounded-lg bg-cyan-400 md:col-span-3">
          {/* This would be where the cyan banner with content would go */}
        </div>
      </div>
    </div>
  );
}
