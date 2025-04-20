"use client";

import { useState } from "react";
import { Trash2, PencilLine } from "lucide-react";
import { Button } from "../../components/ui/button";

interface Popup {
  id: number;
  title: string;
  content: string;
  trigger: string;
  isActive: boolean;
}

export default function PopupsPage() {
  const [popups, setPopups] = useState<Popup[]>([
    {
      id: 1,
      title: "Kode Diskon 50%",
      content: "Gunakan kode GET50 untuk diskon 50% hari ini!",
      trigger: "getcode",
      isActive: true,
    },
    {
      id: 2,
      title: "Info Pengiriman",
      content: "Barang akan dikirim dalam 2-3 hari kerja.",
      trigger: "checkout",
      isActive: false,
    },
  ]);

  const [form, setForm] = useState<Omit<Popup, "id">>({
    title: "",
    content: "",
    trigger: "getcode",
    isActive: true,
  });

  const [editId, setEditId] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const target = e.target as
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement;
    const { name, value, type } = target;
    const checked =
      target.type === "checkbox"
        ? (target as HTMLInputElement).checked
        : undefined;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editId !== null) {
      setPopups((prev) =>
        prev.map((popup) =>
          popup.id === editId ? { ...popup, ...form } : popup,
        ),
      );
      setEditId(null);
    } else {
      const newPopup: Popup = {
        id: Date.now(),
        ...form,
      };
      setPopups((prev) => [...prev, newPopup]);
    }

    setForm({
      title: "",
      content: "",
      trigger: "getcode",
      isActive: true,
    });
  };

  const handleEdit = (popup: Popup) => {
    setEditId(popup.id);
    setForm({
      title: popup.title,
      content: popup.content,
      trigger: popup.trigger,
      isActive: popup.isActive,
    });
  };

  const handleDelete = (id: number) => {
    setPopups((prev) => prev.filter((popup) => popup.id !== id));
    if (editId === id) setEditId(null);
  };

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-gray-800">Manage Pop-ups</h1>

      <form
        onSubmit={handleSubmit}
        className="mb-8 space-y-4 rounded-lg border bg-white p-6 shadow-sm"
      >
        <h2 className="text-lg font-semibold text-gray-700">
          {editId ? "Edit Pop-up" : "Add New Pop-up"}
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
            Content
          </label>
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            className="w-full rounded-md border px-3 py-2 text-sm"
            rows={3}
            required
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-600">
            Trigger
          </label>
          <select
            name="trigger"
            value={form.trigger}
            onChange={handleChange}
            className="w-full rounded-md border px-3 py-2 text-sm"
          >
            <option value="getcode">Get Code</option>
            <option value="checkout">Checkout</option>
            <option value="homepage">Homepage</option>
          </select>
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

        <Button type="submit">{editId ? "Update Pop-up" : "Add Pop-up"}</Button>
      </form>

      {/* Popup List */}
      <div className="rounded-lg border bg-white p-4 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-gray-700">
          Existing Pop-ups
        </h2>
        {popups.length === 0 ? (
          <p className="text-sm text-gray-500">No pop-ups created.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {popups.map((popup) => (
              <li
                key={popup.id}
                className="flex items-start justify-between p-3 hover:bg-gray-50"
              >
                <div>
                  <h3 className="font-semibold text-gray-800">{popup.title}</h3>
                  <p className="text-sm text-gray-600">{popup.content}</p>
                  <div className="mt-1 text-xs text-gray-500">
                    Trigger: <strong>{popup.trigger}</strong> | Status:{" "}
                    <span
                      className={
                        popup.isActive ? "text-green-600" : "text-red-500"
                      }
                    >
                      {popup.isActive ? "Active" : "Inactive"}
                    </span>
                  </div>
                </div>
                <div className="ml-4 flex gap-2">
                  <button
                    onClick={() => handleEdit(popup)}
                    className="text-sm text-blue-500 hover:underline"
                  >
                    <PencilLine className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(popup.id)}
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
