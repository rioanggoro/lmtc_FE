"use client";
import Link from "next/link";
import MainContent from "../main-content/page";
import CategoriesCarousel from "../../components/ui/categories-carousel";
import Header from "../../components/layout/header";
import { Home, Menu, X } from "lucide-react";
import ExclusivePartner from "../exclusive-partner/page";
import FeaturedPartner from "../featured-partner/page";
import FeaturedAffiliatePartner from "../featured-affilate-partner/page";
import NewPartner from "../new-partner/page";
import AffilliatePartner from "../affilliate-partner/page";
import FeaturedStores from "../featured-stores/page";
import AllCategories from "../all-categories/page";
import FooterUser from "../../components/ui/footer-user";
import { useState } from "react";
import AffiliatePage from "../../partners-affiliate/page";

export default function Dashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Background gradient */}
      <div className="absolute inset-x-0 top-0 -z-10 h-56 rounded-b-3xl bg-gradient-to-r from-amber-800 via-orange-500 to-orange-500" />
      <Header />

      {/* Mobile Navigation Button */}
      <div className="absolute right-4 top-4 z-20 lg:hidden">
        <button
          onClick={toggleMobileMenu}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-10 bg-orange-600/95 pt-16 lg:hidden">
          <nav className="container mx-auto px-6">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  href="/user"
                  className="block border-l-4 border-white px-4 py-3 text-lg font-medium text-white"
                  onClick={toggleMobileMenu}
                >
                  DASHBOARD
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="block border-l-4 border-transparent px-4 py-3 text-lg font-medium text-white/80 transition hover:border-white hover:text-white"
                  onClick={toggleMobileMenu}
                >
                  PARTNER SEARCH
                </Link>
              </li>
              <li>
                <Link
                  href="/partners-affiliate"
                  className="block border-l-4 border-transparent px-4 py-3 text-lg font-medium text-white/80 transition hover:border-white hover:text-white"
                  onClick={toggleMobileMenu}
                >
                  AFFILIATE PARTNERS
                </Link>
              </li>
              <li>
                <Link
                  href="/store-search"
                  className="block border-l-4 border-transparent px-4 py-3 text-lg font-medium text-white/80 transition hover:border-white hover:text-white"
                  onClick={toggleMobileMenu}
                >
                  STORE SEARCH
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="block border-l-4 border-transparent px-4 py-3 text-lg font-medium text-white/80 transition hover:border-white hover:text-white"
                  onClick={toggleMobileMenu}
                >
                  CATEGORIES
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}

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

      {/* Bottom navigation - visible only on desktop */}
      <div className="mt-auto hidden bg-orange-600 py-4 text-white lg:block">
        <div className="container mx-auto flex justify-center space-x-6 overflow-x-auto">
          <Link
            href="/user"
            className="border-b-2 border-white px-3 py-1 font-medium"
          >
            DASHBOARD
          </Link>
          <Link
            href="/partners"
            className="px-3 py-1 font-medium hover:border-b-2 hover:border-white"
          >
            PARTNER SEARCH
          </Link>
          <Link
            href="/partners-affiliate"
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

      {/* Mobile Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-10 border-t border-orange-400 bg-orange-600 lg:hidden">
        <div className="grid grid-cols-5">
          <Link
            href="/user"
            className="flex flex-col items-center py-2 text-white"
          >
            <Home className="h-5 w-5" />
            <span className="mt-1 text-xs">Dashboard</span>
          </Link>
          <Link
            href="/partners"
            className="flex flex-col items-center py-2 text-white/80 hover:text-white"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="mt-1 text-xs">Partners</span>
          </Link>
          <Link
            href="/affiliate-partners"
            className="flex flex-col items-center py-2 text-white/80 hover:text-white"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 10L19.5528 7.72361C19.8343 7.58281 20.1852 7.84093 20.1069 8.15l-1.4477 5.7909c-0.0456 0.1824-0.0456 0.3738 0 0.5562l1.4477 5.7909c0.0783 0.3091-0.2726 0.5672-0.5541 0.4264L15 20m0-10l-4.5528-2.27639c-0.2815-0.1408-0.6324 0.11732-0.5541 0.42639l1.4477 5.7909c0.0456 0.1824 0.0456 0.3738 0 0.5562l-1.4477 5.7909c-0.0783 0.3091 0.2726 0.5672 0.5541 0.4264L15 20m0-10v10M4 8l2 4-2 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="mt-1 text-xs">Affiliates</span>
          </Link>
          <Link
            href="/store-search"
            className="flex flex-col items-center py-2 text-white/80 hover:text-white"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 10h18M6 14h2m4 0h6M3 6h18v14H3V6zm0-2V6m18-2V6m-9 8v6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="mt-1 text-xs">Stores</span>
          </Link>
          <Link
            href="/categories"
            className="flex flex-col items-center py-2 text-white/80 hover:text-white"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="mt-1 text-xs">Categories</span>
          </Link>
        </div>
      </div>

      {/* Add padding at the bottom to prevent content from being hidden behind the mobile navigation */}
      <div className="pb-16 lg:pb-0"></div>

      {/* Categories section */}
      <CategoriesCarousel />

      {/* Partner section */}
      <ExclusivePartner />
      <FeaturedPartner />
      <FeaturedAffiliatePartner />
      <NewPartner />
      <AffilliatePartner />
      <FeaturedStores />
      <AllCategories />
      {/* Footer */}
      <FooterUser />
    </div>
  );
}
