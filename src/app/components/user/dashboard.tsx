"use client";

import { Home, ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback } from "../../../components/ui/avatar";
import MainContent from "./main-content";

import CategoriesCarousel from "./categories-carousel";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Background gradient */}
      <div className="absolute inset-x-0 top-0 -z-10 h-56 rounded-b-3xl bg-gradient-to-r from-amber-800 via-orange-500 to-orange-500"></div>

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
      <MainContent />

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
      <CategoriesCarousel />
    </div>
  );
}
