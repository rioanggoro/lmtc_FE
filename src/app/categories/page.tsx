"use client";

import { useState, useEffect } from "react";
import {
  Car,
  Hammer,
  Wrench,
  ShoppingCart,
  Scissors,
  Heart,
  Coffee,
  PawPrint,
  Gamepad2,
  Users,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import AllCategories from "../user/all-categories/page";
import FooterUser from "../components/ui/footer-user";
import Header from "../components/layout/header";

export default function Categories() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [
    { name: "Automotive", icon: Car },
    { name: "Trades & Services", icon: Hammer },
    { name: "Services", icon: Wrench },
    { name: "Retail", icon: ShoppingCart },
    { name: "Beauty", icon: Scissors },
    { name: "Health & Fitness", icon: Heart },
    { name: "Food & Beverages", icon: Coffee },
    { name: "Pets", icon: PawPrint },
    { name: "Recreation", icon: Gamepad2 },
    { name: "Affiliates", icon: Users },
    { name: "Cosmetics", icon: Sparkles },
  ];

  const slides = [
    {
      id: 1,
      title: "Gee Up",
      description: "CODE: LMCT+ FOR 10% OFF",
      image: "/img/hopkins_img.png?height=400&width=800",
      color: "bg-cyan-400",
    },
    {
      id: 2,
      title: "Summer Sale",
      description: "Up to 50% off selected items",
      image: "/placeholder.svg?height=400&width=800",
      color: "bg-pink-400",
    },
    {
      id: 3,
      title: "New Arrivals",
      description: "Check out our latest products",
      image: "/placeholder.svg?height=400&width=800",
      color: "bg-purple-400",
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="container mx-auto p-6">
      <Header />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {/* Categories sidebar */}
        <div className="rounded-lg bg-white p-4 shadow">
          <ul className="space-y-3">
            {categories.map((category, index) => (
              <li key={index}>
                <button className="flex w-full items-center rounded-md p-2 transition-colors hover:bg-gray-50">
                  <category.icon className="mr-3 h-5 w-5 text-gray-600" />
                  <span className="font-medium">{category.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <AllCategories />
      <FooterUser />
    </div>
  );
}
