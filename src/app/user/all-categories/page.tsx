import Link from "next/link";
import { categories } from "../../../lib/categories";

export default function AllCategories() {
  // Group categories into rows of 5 for display
  const groupedCategories = [];
  for (let i = 0; i < categories.length; i += 5) {
    groupedCategories.push(categories.slice(i, i + 5));
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center justify-between border-b pb-2">
        <h2 className="text-xl font-semibold text-secondary-color">
          All Categories
        </h2>
      </div>

      {groupedCategories.map((row, rowIndex) => (
        <div
          key={`row-${rowIndex}`}
          className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-5"
        >
          {row.map((category) => (
            <div key={category.name} className="flex flex-col">
              <h3 className="mb-4 text-sm font-bold text-secondary-color">
                {category.name}
              </h3>
              <ul className="space-y-2">
                {category.subcategories.map((subcategory) => (
                  <li key={subcategory}>
                    <Link
                      href={`/category/${category.name.toLowerCase()}/${subcategory.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm font-normal text-gray-500 transition-all hover:text-gray-800"
                    >
                      {subcategory}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
