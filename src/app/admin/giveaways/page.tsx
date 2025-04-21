"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Trash2, PencilLine } from "lucide-react";

interface Giveaway {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
}

export default function GiveawaysPage() {
  const [giveaways, setGiveaways] = useState<Giveaway[]>([
    {
      id: 1,
      title: "Giveaway Motor Listrik",
      description: "Ikuti dan menangkan motor listrik senilai 20 juta!",
      startDate: "2025-05-01",
      endDate: "2025-05-10",
      isActive: true,
    },
  ]);

  const [form, setForm] = useState<Omit<Giveaway, "id">>({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    isActive: true,
  });

  const [editId, setEditId] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const target = e.target;
    const { name, value, type } = target;
    const checked = (target as HTMLInputElement).checked;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editId !== null) {
      setGiveaways((prev) =>
        prev.map((item) => (item.id === editId ? { ...item, ...form } : item)),
      );
      setEditId(null);
    } else {
      const newGiveaway: Giveaway = {
        id: Date.now(),
        ...form,
      };
      setGiveaways((prev) => [...prev, newGiveaway]);
    }

    // Reset form
    setForm({
      title: "",
      description: "",
      startDate: "",
      endDate: "",
      isActive: true,
    });
  };

  const handleEdit = (data: Giveaway) => {
    setEditId(data.id);
    setForm({
      title: data.title,
      description: data.description,
      startDate: data.startDate,
      endDate: data.endDate,
      isActive: data.isActive,
    });
  };

  const handleDelete = (id: number) => {
    setGiveaways((prev) => prev.filter((item) => item.id !== id));
    if (editId === id) setEditId(null);
  };

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-gray-800">
        Manage Giveaways
      </h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mb-8 space-y-4 rounded-lg border bg-white p-6 shadow-sm"
      >
        <h2 className="text-lg font-semibold text-gray-700">
          {editId ? "Edit Giveaway" : "Add New Giveaway"}
        </h2>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-600">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full rounded-md border px-3 py-2 text-sm"
            required
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-600">
            Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full rounded-md border px-3 py-2 text-sm"
            rows={3}
            required
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-600">
              Start Date
            </label>
            <input
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              className="w-full rounded-md border px-3 py-2 text-sm"
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-600">
              End Date
            </label>
            <input
              type="date"
              name="endDate"
              value={form.endDate}
              onChange={handleChange}
              className="w-full rounded-md border px-3 py-2 text-sm"
              required
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isActive"
            checked={form.isActive}
            onChange={handleChange}
            id="isActive"
          />
          <label htmlFor="isActive" className="text-sm text-gray-700">
            Active
          </label>
        </div>

        <Button className="bg-primary-color" type="submit">
          {editId ? "Update" : "Add Giveaway"}
        </Button>
      </form>

      {/* List */}
      <div className="rounded-lg border bg-white p-4 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-gray-700">
          Giveaway List
        </h2>
        {giveaways.length === 0 ? (
          <p className="text-sm text-gray-500">No giveaways created.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {giveaways.map((item) => (
              <li
                key={item.id}
                className="flex items-start justify-between p-3 hover:bg-gray-50"
              >
                <div>
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <p className="mt-1 text-xs text-gray-500">
                    {item.startDate} - {item.endDate} |{" "}
                    <span
                      className={
                        item.isActive ? "text-green-600" : "text-red-500"
                      }
                    >
                      {item.isActive ? "Active" : "Inactive"}
                    </span>
                  </p>
                </div>
                <div className="ml-4 flex gap-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="text-sm text-blue-500 hover:underline"
                  >
                    <PencilLine className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-sm text-red-500 hover:underline"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
