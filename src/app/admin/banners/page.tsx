"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Edit, Trash2, Upload } from "lucide-react";
import { Banner } from "../../../lib/banners";
import BannerList from "../components/banner/BannerList";

// Sample banners data
const initialBanners = [
  {
    id: 1,
    title: "Summer Promotion",
    image: "/placeholder.svg?height=200&width=800&text=Summer+Promotion+Banner",
    page: "Home",
    active: true,
    position: "Top",
  },
  {
    id: 2,
    title: "New Giveaway",
    image: "/placeholder.svg?height=200&width=800&text=New+Giveaway+Banner",
    page: "Giveaways",
    active: true,
    position: "Middle",
  },
  {
    id: 3,
    title: "Special Offer",
    image: "/placeholder.svg?height=200&width=800&text=Special+Offer+Banner",
    page: "Discounts",
    active: false,
    position: "Bottom",
  },
];

export default function BannersPage() {
  const [banners, setBanners] = useState(initialBanners);
  const [showAddBannerModal, setShowAddBannerModal] = useState(false);
  const [showEditBannerModal, setShowEditBannerModal] = useState(false);
  const [selectedBanner, setSelectedBanner] = useState<any>(null);
  const [newBanner, setNewBanner] = useState({
    title: "",
    image: "",
    page: "Home",
    active: true,
    position: "Top",
  });

  const handleAddBanner = () => {
    if (newBanner.title.trim() === "") return;

    const banner = {
      id: Math.max(0, ...banners.map((b) => b.id)) + 1,
      ...newBanner,
    };

    setBanners([...banners, banner]);
    setNewBanner({
      title: "",
      image: "",
      page: "Home",
      active: true,
      position: "Top",
    });
    setShowAddBannerModal(false);
  };

  const handleEditBanner = () => {
    if (!selectedBanner || newBanner.title.trim() === "") return;

    const updatedBanners = banners.map((banner) => {
      if (banner.id === selectedBanner.id) {
        return {
          ...banner,
          ...newBanner,
        };
      }
      return banner;
    });

    setBanners(updatedBanners);
    setShowEditBannerModal(false);
  };

  const handleDeleteBanner = (bannerId: number) => {
    if (confirm("Are you sure you want to delete this banner?")) {
      setBanners(banners.filter((banner) => banner.id !== bannerId));
    }
  };

  const handleToggleActive = (bannerId: number) => {
    const updatedBanners = banners.map((banner) => {
      if (banner.id === bannerId) {
        return {
          ...banner,
          active: !banner.active,
        };
      }
      return banner;
    });

    setBanners(updatedBanners);
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Banners Management</h1>
        <button
          onClick={() => setShowAddBannerModal(true)}
          className="flex items-center rounded-md bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Banner
        </button>
      </div>

      {/* Banners list */}
      <BannerList
        banners={banners as Banner[]}
        setSelectedBanner={setSelectedBanner}
        setNewBanner={setNewBanner}
        setShowEditBannerModal={setShowEditBannerModal}
        handleDeleteBanner={handleDeleteBanner}
        handleToggleActive={handleToggleActive}
      />

      {/* Add Banner Modal */}
      {showAddBannerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
              Add New Banner
            </h3>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="bannerTitle"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Banner Title
                </label>
                <input
                  type="text"
                  id="bannerTitle"
                  value={newBanner.title}
                  onChange={(e) =>
                    setNewBanner({ ...newBanner, title: e.target.value })
                  }
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  placeholder="Enter banner title"
                />
              </div>

              <div>
                <label
                  htmlFor="bannerImage"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Banner Image
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    id="bannerImage"
                    value={newBanner.image}
                    onChange={(e) =>
                      setNewBanner({ ...newBanner, image: e.target.value })
                    }
                    className="w-full rounded-md border border-gray-300 p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    placeholder="Enter image URL"
                  />
                  <button className="rounded-md bg-gray-200 p-2 hover:bg-gray-300">
                    <Upload className="h-5 w-5 text-gray-700" />
                  </button>
                </div>
              </div>

              <div>
                <label
                  htmlFor="bannerPage"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Page
                </label>
                <select
                  id="bannerPage"
                  value={newBanner.page}
                  onChange={(e) =>
                    setNewBanner({ ...newBanner, page: e.target.value })
                  }
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                >
                  <option value="Home">Home</option>
                  <option value="Giveaways">Giveaways</option>
                  <option value="Discounts">Discounts</option>
                  <option value="Profile">Profile</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="bannerPosition"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Position
                </label>
                <select
                  id="bannerPosition"
                  value={newBanner.position}
                  onChange={(e) =>
                    setNewBanner({ ...newBanner, position: e.target.value })
                  }
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                >
                  <option value="Top">Top</option>
                  <option value="Middle">Middle</option>
                  <option value="Bottom">Bottom</option>
                </select>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="bannerActive"
                  checked={newBanner.active}
                  onChange={(e) =>
                    setNewBanner({ ...newBanner, active: e.target.checked })
                  }
                  className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                />
                <label
                  htmlFor="bannerActive"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Active
                </label>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-2">
              <button
                onClick={() => setShowAddBannerModal(false)}
                className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleAddBanner}
                className="rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
              >
                Add Banner
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Banner Modal */}
      {showEditBannerModal && selectedBanner && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
              Edit Banner
            </h3>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="editBannerTitle"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Banner Title
                </label>
                <input
                  type="text"
                  id="editBannerTitle"
                  value={newBanner.title}
                  onChange={(e) =>
                    setNewBanner({ ...newBanner, title: e.target.value })
                  }
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div>
                <label
                  htmlFor="editBannerImage"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Banner Image
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    id="editBannerImage"
                    value={newBanner.image}
                    onChange={(e) =>
                      setNewBanner({ ...newBanner, image: e.target.value })
                    }
                    className="w-full rounded-md border border-gray-300 p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                  <button className="rounded-md bg-gray-200 p-2 hover:bg-gray-300">
                    <Upload className="h-5 w-5 text-gray-700" />
                  </button>
                </div>
              </div>

              <div>
                <label
                  htmlFor="editBannerPage"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Page
                </label>
                <select
                  id="editBannerPage"
                  value={newBanner.page}
                  onChange={(e) =>
                    setNewBanner({ ...newBanner, page: e.target.value })
                  }
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                >
                  <option value="Home">Home</option>
                  <option value="Giveaways">Giveaways</option>
                  <option value="Discounts">Discounts</option>
                  <option value="Profile">Profile</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="editBannerPosition"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Position
                </label>
                <select
                  id="editBannerPosition"
                  value={newBanner.position}
                  onChange={(e) =>
                    setNewBanner({ ...newBanner, position: e.target.value })
                  }
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                >
                  <option value="Top">Top</option>
                  <option value="Middle">Middle</option>
                  <option value="Bottom">Bottom</option>
                </select>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="editBannerActive"
                  checked={newBanner.active}
                  onChange={(e) =>
                    setNewBanner({ ...newBanner, active: e.target.checked })
                  }
                  className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                />
                <label
                  htmlFor="editBannerActive"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Active
                </label>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-2">
              <button
                onClick={() => setShowEditBannerModal(false)}
                className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleEditBanner}
                className="rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
