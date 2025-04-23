"use client";

import { useState } from "react";
import { Plus, Edit, Trash2, ChevronRight, ChevronDown } from "lucide-react";
import { categories as initialCategories } from "../../../../lib/categories";

interface Category {
  name: string;
  subcategories: string[];
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const [showAddSubcategoryModal, setShowAddSubcategoryModal] = useState(false);
  const [showEditCategoryModal, setShowEditCategoryModal] = useState(false);
  const [showEditSubcategoryModal, setShowEditSubcategoryModal] =
    useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null,
  );
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newSubcategoryName, setNewSubcategoryName] = useState("");

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((name) => name !== categoryName)
        : [...prev, categoryName],
    );
  };

  const handleAddCategory = () => {
    if (!newCategoryName.trim()) return;
    const newCategory: Category = { name: newCategoryName, subcategories: [] };
    setCategories((prev) => [...prev, newCategory]);
    setNewCategoryName("");
    setShowAddCategoryModal(false);
  };

  const handleAddSubcategory = () => {
    if (!newSubcategoryName.trim() || !selectedCategory) return;
    const updated = categories.map((cat) =>
      cat.name === selectedCategory.name
        ? { ...cat, subcategories: [...cat.subcategories, newSubcategoryName] }
        : cat,
    );
    setCategories(updated);
    setNewSubcategoryName("");
    setShowAddSubcategoryModal(false);
  };

  const handleEditCategory = () => {
    if (!newCategoryName.trim() || !selectedCategory) return;
    const updated = categories.map((cat) =>
      cat.name === selectedCategory.name
        ? { ...cat, name: newCategoryName }
        : cat,
    );
    setCategories(updated);
    setNewCategoryName("");
    setShowEditCategoryModal(false);
  };

  const handleEditSubcategory = () => {
    if (!newSubcategoryName.trim() || !selectedCategory || !selectedSubcategory)
      return;
    const updated = categories.map((cat) =>
      cat.name === selectedCategory.name
        ? {
            ...cat,
            subcategories: cat.subcategories.map((sub) =>
              sub === selectedSubcategory ? newSubcategoryName : sub,
            ),
          }
        : cat,
    );
    setCategories(updated);
    setNewSubcategoryName("");
    setShowEditSubcategoryModal(false);
  };

  const handleDeleteCategory = (categoryName: string) => {
    if (confirm("Are you sure you want to delete this category?")) {
      setCategories((prev) => prev.filter((cat) => cat.name !== categoryName));
    }
  };

  const handleDeleteSubcategory = (categoryName: string, subName: string) => {
    if (confirm("Are you sure you want to delete this subcategory?")) {
      const updated = categories.map((cat) =>
        cat.name === categoryName
          ? {
              ...cat,
              subcategories: cat.subcategories.filter((sub) => sub !== subName),
            }
          : cat,
      );
      setCategories(updated);
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
          <Plus className="mr-2 h-4 w-4" /> Add Category
        </button>
      </div>

      <div className="rounded-lg border bg-white shadow">
        <div className="p-4">
          <div className="mb-4 flex items-center justify-between border-b pb-2">
            <div className="font-medium text-gray-700">
              Categories and Subcategories
            </div>
            <div className="text-sm text-gray-500">
              {categories.length} categories
            </div>
          </div>

          <ul className="divide-y divide-gray-200">
            {categories.map((cat) => (
              <li key={cat.name} className="py-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <button
                      onClick={() => toggleCategory(cat.name)}
                      className="mr-2 rounded-md p-1 hover:bg-gray-100"
                    >
                      {expandedCategories.includes(cat.name) ? (
                        <ChevronDown className="h-4 w-4 text-gray-500" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-gray-500" />
                      )}
                    </button>
                    <span className="font-medium">{cat.name}</span>
                    <span className="ml-2 text-sm text-gray-500">
                      ({cat.subcategories.length})
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setSelectedCategory(cat);
                        setShowAddSubcategoryModal(true);
                      }}
                      className="p-1 text-gray-500 hover:text-orange-500"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => {
                        setSelectedCategory(cat);
                        setNewCategoryName(cat.name);
                        setShowEditCategoryModal(true);
                      }}
                      className="p-1 text-gray-500 hover:text-blue-500"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteCategory(cat.name)}
                      className="p-1 text-gray-500 hover:text-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                {expandedCategories.includes(cat.name) && (
                  <ul className="mt-2 space-y-1 pl-6">
                    {cat.subcategories.map((sub) => (
                      <li
                        key={sub}
                        className="flex items-center justify-between"
                      >
                        <span className="text-sm text-gray-700">{sub}</span>
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              setSelectedCategory(cat);
                              setSelectedSubcategory(sub);
                              setNewSubcategoryName(sub);
                              setShowEditSubcategoryModal(true);
                            }}
                            className="p-1 text-gray-500 hover:text-blue-500"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() =>
                              handleDeleteSubcategory(cat.name, sub)
                            }
                            className="p-1 text-gray-500 hover:text-red-500"
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
    </div>
  );
}
