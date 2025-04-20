"use client";

import { useState } from "react";
import { Plus, Edit, Trash2, ChevronRight, ChevronDown } from "lucide-react";

// Sample categories data
const initialCategories = [
  {
    id: 1,
    name: "Automotive",
    subcategories: [
      { id: 101, name: "Wheels & Tyres" },
      { id: 102, name: "Paint & Panel Repair" },
      { id: 103, name: "Servicing" },
      { id: 104, name: "Detailing & Car Care" },
    ],
  },
  {
    id: 2,
    name: "Trades & Services",
    subcategories: [
      { id: 201, name: "Air Conditioning" },
      { id: 202, name: "Electrical" },
      { id: 203, name: "Plumbing" },
      { id: 204, name: "Building" },
    ],
  },
  {
    id: 3,
    name: "Retail",
    subcategories: [
      { id: 301, name: "Tools" },
      { id: 302, name: "Collectables" },
      { id: 303, name: "Apparel" },
      { id: 304, name: "Electronics & Appliances" },
    ],
  },
  {
    id: 4,
    name: "Beauty",
    subcategories: [
      { id: 401, name: "Hairdresser" },
      { id: 402, name: "Barber" },
      { id: 403, name: "Beautician" },
      { id: 404, name: "Salon" },
    ],
  },
];

export default function CategoriesPage() {
  const [categories, setCategories] = useState(initialCategories);
  const [expandedCategories, setExpandedCategories] = useState<number[]>([]);
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const [showAddSubcategoryModal, setShowAddSubcategoryModal] = useState(false);
  const [showEditCategoryModal, setShowEditCategoryModal] = useState(false);
  const [showEditSubcategoryModal, setShowEditSubcategoryModal] =
    useState(false);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<any>(null);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newSubcategoryName, setNewSubcategoryName] = useState("");

  const toggleCategory = (categoryId: number) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId],
    );
  };

  const handleAddCategory = () => {
    if (newCategoryName.trim() === "") return;

    const newCategory = {
      id: Math.max(0, ...categories.map((c) => c.id)) + 1,
      name: newCategoryName,
      subcategories: [],
    };

    setCategories([...categories, newCategory]);
    setNewCategoryName("");
    setShowAddCategoryModal(false);
  };

  const handleAddSubcategory = () => {
    if (newSubcategoryName.trim() === "" || !selectedCategory) return;

    const newSubcategory = {
      id:
        Math.max(0, ...selectedCategory.subcategories.map((s: any) => s.id)) +
        1,
      name: newSubcategoryName,
    };

    const updatedCategories = categories.map((category) => {
      if (category.id === selectedCategory.id) {
        return {
          ...category,
          subcategories: [...category.subcategories, newSubcategory],
        };
      }
      return category;
    });

    setCategories(updatedCategories);
    setNewSubcategoryName("");
    setShowAddSubcategoryModal(false);
  };

  const handleEditCategory = () => {
    if (newCategoryName.trim() === "" || !selectedCategory) return;

    const updatedCategories = categories.map((category) => {
      if (category.id === selectedCategory.id) {
        return {
          ...category,
          name: newCategoryName,
        };
      }
      return category;
    });

    setCategories(updatedCategories);
    setNewCategoryName("");
    setShowEditCategoryModal(false);
  };

  const handleEditSubcategory = () => {
    if (
      newSubcategoryName.trim() === "" ||
      !selectedCategory ||
      !selectedSubcategory
    )
      return;

    const updatedCategories = categories.map((category) => {
      if (category.id === selectedCategory.id) {
        return {
          ...category,
          subcategories: category.subcategories.map((subcategory: any) => {
            if (subcategory.id === selectedSubcategory.id) {
              return {
                ...subcategory,
                name: newSubcategoryName,
              };
            }
            return subcategory;
          }),
        };
      }
      return category;
    });

    setCategories(updatedCategories);
    setNewSubcategoryName("");
    setShowEditSubcategoryModal(false);
  };

  const handleDeleteCategory = (categoryId: number) => {
    if (
      confirm(
        "Are you sure you want to delete this category and all its subcategories?",
      )
    ) {
      setCategories(
        categories.filter((category) => category.id !== categoryId),
      );
    }
  };

  const handleDeleteSubcategory = (
    categoryId: number,
    subcategoryId: number,
  ) => {
    if (confirm("Are you sure you want to delete this subcategory?")) {
      const updatedCategories = categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            subcategories: category.subcategories.filter(
              (subcategory: any) => subcategory.id !== subcategoryId,
            ),
          };
        }
        return category;
      });

      setCategories(updatedCategories);
    }
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">
          Categories Management
        </h1>
        <button
          onClick={() => setShowAddCategoryModal(true)}
          className="flex items-center rounded-md bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Category
        </button>
      </div>

      {/* Categories list */}
      <div className="rounded-lg border bg-white shadow">
        <div className="p-4">
          <div className="mb-4 flex items-center justify-between border-b border-gray-200 pb-2">
            <div className="font-medium text-gray-700">
              Categories and Subcategories
            </div>
            <div className="text-sm text-gray-500">
              {categories.length} categories
            </div>
          </div>

          <ul className="divide-y divide-gray-200">
            {categories.map((category) => (
              <li key={category.id} className="py-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="mr-2 rounded-md p-1 hover:bg-gray-100"
                    >
                      {expandedCategories.includes(category.id) ? (
                        <ChevronDown className="h-4 w-4 text-gray-500" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-gray-500" />
                      )}
                    </button>
                    <span className="font-medium">{category.name}</span>
                    <span className="ml-2 text-sm text-gray-500">
                      ({category.subcategories.length})
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => {
                        setSelectedCategory(category);
                        setShowAddSubcategoryModal(true);
                      }}
                      className="rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-orange-500"
                      title="Add Subcategory"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => {
                        setSelectedCategory(category);
                        setNewCategoryName(category.name);
                        setShowEditCategoryModal(true);
                      }}
                      className="rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-blue-500"
                      title="Edit Category"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteCategory(category.id)}
                      className="rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-red-500"
                      title="Delete Category"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Subcategories */}
                {expandedCategories.includes(category.id) && (
                  <ul className="mt-2 space-y-1 pl-8">
                    {category.subcategories.map((subcategory: any) => (
                      <li
                        key={subcategory.id}
                        className="flex items-center justify-between rounded-md py-1"
                      >
                        <span className="text-sm text-gray-700">
                          {subcategory.name}
                        </span>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => {
                              setSelectedCategory(category);
                              setSelectedSubcategory(subcategory);
                              setNewSubcategoryName(subcategory.name);
                              setShowEditSubcategoryModal(true);
                            }}
                            className="rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-blue-500"
                            title="Edit Subcategory"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() =>
                              handleDeleteSubcategory(
                                category.id,
                                subcategory.id,
                              )
                            }
                            className="rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-red-500"
                            title="Delete Subcategory"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Add Category Modal */}
      {showAddCategoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
              Add New Category
            </h3>
            <div className="mb-4">
              <label
                htmlFor="categoryName"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Category Name
              </label>
              <input
                type="text"
                id="categoryName"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                className="w-full rounded-md border border-gray-300 p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                placeholder="Enter category name"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowAddCategoryModal(false)}
                className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCategory}
                className="rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
              >
                Add Category
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Subcategory Modal */}
      {showAddSubcategoryModal && selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
              Add Subcategory to {selectedCategory.name}
            </h3>
            <div className="mb-4">
              <label
                htmlFor="subcategoryName"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Subcategory Name
              </label>
              <input
                type="text"
                id="subcategoryName"
                value={newSubcategoryName}
                onChange={(e) => setNewSubcategoryName(e.target.value)}
                className="w-full rounded-md border border-gray-300 p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                placeholder="Enter subcategory name"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowAddSubcategoryModal(false)}
                className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleAddSubcategory}
                className="rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
              >
                Add Subcategory
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Category Modal */}
      {showEditCategoryModal && selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
              Edit Category
            </h3>
            <div className="mb-4">
              <label
                htmlFor="editCategoryName"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Category Name
              </label>
              <input
                type="text"
                id="editCategoryName"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                className="w-full rounded-md border border-gray-300 p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowEditCategoryModal(false)}
                className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleEditCategory}
                className="rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Subcategory Modal */}
      {showEditSubcategoryModal && selectedCategory && selectedSubcategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
              Edit Subcategory
            </h3>
            <div className="mb-4">
              <label
                htmlFor="editSubcategoryName"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Subcategory Name
              </label>
              <input
                type="text"
                id="editSubcategoryName"
                value={newSubcategoryName}
                onChange={(e) => setNewSubcategoryName(e.target.value)}
                className="w-full rounded-md border border-gray-300 p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowEditSubcategoryModal(false)}
                className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleEditSubcategory}
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
