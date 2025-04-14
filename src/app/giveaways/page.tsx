"use client";

import { useState } from "react";
import Link from "next/link";
import { Home } from "lucide-react";
import Header from "../components/layout/header";
import FooterUser from "../components/ui/footer-user";
import MobileMenuButton from "../components/ui/MobileMenuButton";
import MobileMenu from "../components/ui/MobileMenuButton";
import MobileBottomNavigationBar from "../components/ui/MobileBottomNavigationBar";
import GiveawayCard from "../components/ui/giveaway-card";

// Sample giveaway data
const giveaways = [
  {
    id: "100k-cash",
    title: "$100K CASH",
    image: "/placeholder.svg?height=300&width=400",
    status: "Closed" as const,
    dateText: "Sunday the 13th of April at 8:30PM AEST",
    tbd: true,
    showWinBadge: false,
  },
  {
    id: "shelby-f150",
    title: "Shelby F150",
    image: "/placeholder.svg?height=300&width=400",
    status: "Early Bird" as const,
    dateText: "Thursday the 17th of April at 8:30PM AEST",
    tbd: true,
  },
  {
    id: "r35-gtr",
    title: "R35 GTR",
    image: "/placeholder.svg?height=300&width=400",
    status: "Early Bird" as const,
    dateText: "Thursday the 24th of April at 8:30PM AEST",
    tbd: true,
  },
  {
    id: "quintrex",
    title: "Quintrex",
    image: "/placeholder.svg?height=300&width=400",
    status: "Early Bird" as const,
    dateText: "Monday the 14th of April at 8:30 PM AEST",
    tbd: true,
  },
  {
    id: "monaro-gts",
    title: "Monaro GTS",
    image: "/placeholder.svg?height=300&width=400",
    status: "Early Bird" as const,
    dateText: "Sunday 4th of May at 4:00PM AEST",
    tbd: true,
  },
  {
    id: "hsv-gts",
    title: "HSV GTS",
    image: "/placeholder.svg?height=300&width=400",
    status: "Live" as const,
    dateText: "Tuesday the 29th of April at 8:30PM AEDT",
    tbd: true,
  },
  {
    id: "1-million-cash",
    title: "$1,000,000 Cash",
    image: "/placeholder.svg?height=300&width=400",
    status: "Early Bird" as const,
    dateText: "Wednesday the 30th of April at 8:30PM AEDT",
    tbd: true,
  },
  {
    id: "porsche-taycan",
    title: "Porsche Taycan Turbo",
    image: "/placeholder.svg?height=300&width=400",
    status: "Not Yet Open" as const,
    dateText: "TBD",
    tbd: true,
  },
];

export default function GiveawaysPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Mobile Menu */}
      <MobileMenuButton
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="flex items-center">
            <Home className="mr-1 h-4 w-4" />
          </Link>
          <span>›</span>
          <span className="text-gray-500">LIVE & Upcoming Giveaways</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-12">
        <h1 className="mb-8 text-3xl font-bold">
          <span className="text-blue-500">LIVE</span> & UPCOMING GIVEAWAYS
        </h1>

        {/* Giveaways Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {giveaways.map((giveaway) => (
            <GiveawayCard
              key={giveaway.id}
              id={giveaway.id}
              title={giveaway.title}
              image={giveaway.image}
              status={giveaway.status}
              dateText={giveaway.dateText}
              tbd={giveaway.tbd}
              showWinBadge={giveaway.showWinBadge !== false}
            />
          ))}
        </div>
      </div>

      <MobileBottomNavigationBar />
      <FooterUser />
    </div>
  );
}
