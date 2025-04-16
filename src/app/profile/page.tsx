"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Home } from "lucide-react";
import Header from "../components/layout/header";
import FooterUser from "../components/ui/footer-user";
import MainContentProfile from "../components/ui/main-profile";

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: "Jay Hopkins",
    email: "admin@rsg-wa.com.au",
    phone: "0478 454 963",
    location: "Perth WA",
    country: "AU",
    initials: "JH",
    address: "",
    postcode: "",
    city: "Perth",
    state: "WA",
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link
            href="/user"
            className="flex items-center transition hover:text-orange-500"
          >
            <Home className="mr-1 h-4 w-4" />
          </Link>
          <span>›</span>
          <span className="text-gray-500">Profile</span>
        </div>
      </div>
      <MainContentProfile />
      <FooterUser />
    </div>
  );
}
