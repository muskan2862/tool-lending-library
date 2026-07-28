"use client";

import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { getTools } from "@/services/toolService";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const tools = await getTools();

      const grouped = {};

      tools.forEach((tool) => {
        if (!grouped[tool.category]) {
          grouped[tool.category] = 0;
        }

        grouped[tool.category]++;
      });

      const result = Object.keys(grouped).map((category) => ({
        name: category,
        count: grouped[category],
      }));

      setCategories(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <div className="space-y-6">

        <div>
          <h1 className="text-3xl font-bold">
            Categories
          </h1>

          <p className="text-gray-500">
            View all tool categories available in the library.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl bg-white shadow">

          <table className="min-w-full">

            <thead className="bg-gray-100">

              <tr>

                <th className="px-6 py-4 text-left">
                  Category
                </th>

                <th className="px-6 py-4 text-left">
                  Total Tools
                </th>

              </tr>

            </thead>

            <tbody>

              {categories.map((category, index) => (

                <tr
                  key={index}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="px-6 py-4">
                    {category.name}
                  </td>

                  <td className="px-6 py-4">
                    {category.count}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </Layout>
  );
}