"use client";

import { useState } from "react";
import { Trash2, PencilLine } from "lucide-react";
import { Button } from "../../components/ui/button";
import { partners as defaultPartners, Partner } from "../../../lib/partners";

export default function PopupsPage() {
  const [partners, setPartners] = useState<Partner[]>(defaultPartners);
  const [form, setForm] = useState<Omit<Partner, "id">>({
    name: "",
    category: "",
    logo: "",
    isPopular: false,
    discount: "",
    discountText: "",
    promoCode: "",
    description: "",
    tags: [],
    storeAddress: "",
    email: "",
    phone: "",
    facebook: "",
    instagram: "",
    website: "",
    hasMap: "",
    url: "",
  });
  const [editId, setEditId] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      tags: e.target.value.split(",").map((tag) => tag.trim()),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editId !== null) {
      setPartners((prev) =>
        prev.map((partner) =>
          partner.id === editId ? { ...partner, ...form } : partner,
        ),
      );
      setEditId(null);
    } else {
      const newPartner: Partner = {
        id: Date.now(),
        ...form,
      };
      setPartners((prev) => [...prev, newPartner]);
    }
    setForm({
      name: "",
      category: "",
      logo: "",
      isPopular: false,
      discount: "",
      discountText: "",
      promoCode: "",
      description: "",
      tags: [],
      storeAddress: "",
      email: "",
      phone: "",
      facebook: "",
      instagram: "",
      website: "",
      hasMap: "",
      url: "",
    });
  };

  const handleEdit = (partner: Partner) => {
    setEditId(partner.id);
    setForm({ ...partner });
  };

  const handleDelete = (id: number) => {
    setPartners((prev) => prev.filter((partner) => partner.id !== id));
    if (editId === id) setEditId(null);
  };

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-gray-800">
        Manage Pop-up Products
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mb-8 space-y-4 rounded-lg border bg-white p-6 shadow-sm"
      >
        <h2 className="text-lg font-semibold text-gray-700">
          {editId ? "Edit Partner Pop-up" : "Add New Partner Pop-up"}
        </h2>

        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full rounded border px-3 py-2 text-sm"
          required
        />
        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          className="w-full rounded border px-3 py-2 text-sm"
          required
        />
        <input
          name="logo"
          placeholder="Logo URL"
          value={form.logo}
          onChange={handleChange}
          className="w-full rounded border px-3 py-2 text-sm"
        />
        <input
          name="discount"
          placeholder="Discount"
          value={form.discount}
          onChange={handleChange}
          className="w-full rounded border px-3 py-2 text-sm"
        />
        <input
          name="discountText"
          placeholder="Discount Text"
          value={form.discountText}
          onChange={handleChange}
          className="w-full rounded border px-3 py-2 text-sm"
        />
        <input
          name="promoCode"
          placeholder="Promo Code"
          value={form.promoCode}
          onChange={handleChange}
          className="w-full rounded border px-3 py-2 text-sm"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full rounded border px-3 py-2 text-sm"
        />
        <input
          name="tags"
          placeholder="Tags (comma separated)"
          onChange={handleTagsChange}
          className="w-full rounded border px-3 py-2 text-sm"
        />
        <input
          name="storeAddress"
          placeholder="Store Address"
          value={form.storeAddress}
          onChange={handleChange}
          className="w-full rounded border px-3 py-2 text-sm"
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded border px-3 py-2 text-sm"
        />
        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full rounded border px-3 py-2 text-sm"
        />
        <input
          name="facebook"
          placeholder="Facebook URL"
          value={form.facebook}
          onChange={handleChange}
          className="w-full rounded border px-3 py-2 text-sm"
        />
        <input
          name="instagram"
          placeholder="Instagram URL"
          value={form.instagram}
          onChange={handleChange}
          className="w-full rounded border px-3 py-2 text-sm"
        />
        <input
          name="website"
          placeholder="Website URL"
          value={form.website}
          onChange={handleChange}
          className="w-full rounded border px-3 py-2 text-sm"
        />
        <input
          name="hasMap"
          placeholder="Map Image URL or Embed"
          value={form.hasMap}
          onChange={handleChange}
          className="w-full rounded border px-3 py-2 text-sm"
        />
        <input
          name="url"
          placeholder="Official Website Link"
          value={form.url}
          onChange={handleChange}
          className="w-full rounded border px-3 py-2 text-sm"
        />

        <div className="flex gap-4">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="isPopular"
              checked={form.isPopular ?? false}
              onChange={handleChange}
            />{" "}
            Popular Partner
          </label>
        </div>

        <Button type="submit">
          {editId ? "Update Partner" : "Add Partner"}
        </Button>
      </form>

      <div className="rounded-lg border bg-white p-4 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-gray-700">
          Existing Partner Pop-ups
        </h2>
        <ul className="divide-y divide-gray-200">
          {partners.map((partner) => (
            <li key={partner.id} className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold">{partner.name}</h3>
                  <p className="text-sm text-gray-600">{partner.description}</p>
                  <div className="text-xs text-gray-400">
                    Tags: {partner.tags?.join(", ")} | Promo:{" "}
                    {partner.promoCode}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(partner)}
                    className="text-blue-500"
                  >
                    <PencilLine className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(partner.id)}
                    className="text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
