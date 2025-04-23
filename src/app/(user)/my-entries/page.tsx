"use client";

import { useState } from "react";
import Link from "next/link";
import { Home } from "lucide-react";
import Header from "../../components/layout/header";
import FooterUser from "../../components/ui/footer-user";
import EntryCard from "../_components/entry-card";
import MobileMenuButton from "src/app/components/layout/MobileMenuButton";
import MobileMenu from "../../components/layout/MobileMenuButton";
import MobileBottomNavigationBar from "../../components/layout/MobileBottomNavigationBar";

const myEntries = [
  {
    id: "1-million-cash",
    title: "$1,000,000 Cash",
    date: "Wednesday the 30th of April at 8:30PM AEST",
    image: "/logos/a-little-thing.png",
    loyaltyPoints: 2,
    showWinBadge: true,
  },
  {
    id: "hsv-gts",
    title: "HSV GTS",
    date: "Tuesday the 29th of April At 8:30PM AEST",
    image: "/logos/a-little-thing.png",
    loyaltyPoints: 2,
    showWinBadge: true,
  },
  {
    id: "monaro-gts",
    title: "Monaro GTS",
    date: "Sunday 4th of May at 4:00 PM AEST",
    image: "/logos/a-little-thing.png",
    loyaltyPoints: 2,
    showWinBadge: true,
  },
  {
    id: "ford-f150-raptor",
    title: "Ford F150 Raptor + Lotus Caravan",
    date: "27/03/2025",
    image: "/logos/a-little-thing.png",
    loyaltyPoints: 2,
    showWinBadge: true,
  },
];

export default function MyEntriesPage() {
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
          <Link href="/user" className="flex items-center">
            <Home className="mr-1 h-4 w-4" />
          </Link>
          <span>›</span>
          <span className="text-gray-500">My Entries</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-12">
        <h1 className="mb-8 text-3xl font-bold">
          <span className="text-primary-color">MAJOR</span> GIVEAWAYS
        </h1>

        {/* Entries List */}
        <div>
          {myEntries.map((entry) => (
            <EntryCard
              key={entry.id}
              id={entry.id}
              title={entry.title}
              date={entry.date}
              image={entry.image}
              loyaltyPoints={entry.loyaltyPoints}
            />
          ))}
        </div>
      </div>

      <MobileBottomNavigationBar />
      <FooterUser />
    </div>
  );
}
