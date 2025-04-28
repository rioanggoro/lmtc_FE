"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import FooterUser from "../../components/ui/footer-user";
import Header from "../../components/layout/header";
import MobileMenuButton from "../../components/layout/MobileMenuButton";
import MobileMenu from "../../components/layout/MobileMenuButton";
import MobileBottomNavigationBar from "../../components/layout/MobileBottomNavigationBar";
import AllCategories from "../_components/all-categories";
import { Car, Box, HomeIcon, Globe } from "lucide-react";

interface Category {
  id: number;
  name: string;
  is_featured: boolean;
}

// Mapping nama kategori ke ikon
const categoryIcons: { [key: string]: React.ReactNode } = {
  Automotive: <Car className="h-6 w-6" />,
  Furniture: <HomeIcon className="h-6 w-6" />,
  Culture: <Globe className="h-6 w-6" />,
};

export default function Categories() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_CATEGORY_URL!);
        const result = await res.json();
        setCategories(result.data);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  return (
    <div className="min-h-screen bg-white">
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

      {/* Desktop Top Navigation */}
      <div className="hidden bg-orange-600 py-4 text-white lg:block">
        <div className="container mx-auto flex justify-center space-x-6 overflow-x-auto">
          <Link
            href="/user"
            className="px-3 py-1 font-medium hover:border-b-2 hover:border-white"
          >
            Dashboard
          </Link>
          <Link
            href="/partners"
            className="px-3 py-1 font-medium hover:border-b-2 hover:border-white"
          >
            Partner Search
          </Link>
          <Link
            href="/partners/affiliate"
            className="px-3 py-1 font-medium hover:border-b-2 hover:border-white"
          >
            Affiliate Partners
          </Link>
          <Link
            href="/stores"
            className="px-3 py-1 font-medium hover:border-b-2 hover:border-white"
          >
            Store Search
          </Link>
          <Link
            href="/categories"
            className="border-b-2 border-white px-3 py-1 font-medium"
          >
            Categories
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="mb-6 text-xl font-bold text-gray-800">
          Featured Categories
        </h2>

        {/* Loading Spinner */}
        {loading ? (
          <div className="flex justify-center py-10">
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline h-8 w-8 animate-spin fill-primary-color text-gray-200 dark:text-gray-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex flex-col items-center justify-center rounded-md border border-gray-200 p-6 text-center transition hover:border-orange-500"
              >
                <div className="mb-3 text-gray-700">
                  {categoryIcons[category.name] || <Box className="h-6 w-6" />}
                </div>
                <span className="text-sm font-medium text-gray-800">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        )}

        <AllCategories />
      </div>

      <MobileBottomNavigationBar />
      <FooterUser />
    </div>
  );
}
