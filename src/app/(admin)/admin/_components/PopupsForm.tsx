"use client";

import { useState } from "react";
import { partners as defaultPartners, Partner } from "../../../../lib/partners";
import { Button } from "../../../components/ui/button";

export default function PopupsForm() {
  const [partners, setPartners] = useState<Partner[]>(defaultPartners);
  const [editId, setEditId] = useState<number | null>(null);
  const [form, setForm] = useState<Partial<Partner>>({
    name: "",
    category: "",
    logo: "",
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
    isPopular: false,
  });

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tags = e.target.value.split(",").map((tag) => tag.trim());
    setForm((prev) => ({ ...prev, tags }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.category) return;

    if (editId !== null) {
      setPartners((prev) =>
        prev.map((partner) =>
          partner.id === editId
            ? ({ ...partner, ...form } as Partner)
            : partner,
        ),
      );
    } else {
      const newPartner: Partner = {
        id: Date.now(),
        ...form,
        tags: form.tags ?? [],
        isPopular: form.isPopular ?? false,
      } as Partner;

      setPartners((prev) => [...prev, newPartner]);
    }

    // Reset
    setEditId(null);
    setForm({
      name: "",
      category: "",
      logo: "",
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
      isPopular: false,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 space-y-4 rounded-lg border bg-white p-6 shadow-sm"
    >
      <h2 className="text-lg font-semibold text-gray-700">
        {editId ? "Edit Partner Pop-up" : "Add New Partner Pop-up"}
      </h2>

      {/* Input fields */}
      <input
        name="name"
        placeholder="Name"
        value={form.name ?? ""}
        onChange={handleChange}
        className="w-full rounded border px-3 py-2 text-sm"
        required
      />
      <input
        name="category"
        placeholder="Category"
        value={form.category ?? ""}
        onChange={handleChange}
        className="w-full rounded border px-3 py-2 text-sm"
        required
      />
      <input
        name="logo"
        placeholder="Logo URL"
        value={form.logo ?? ""}
        onChange={handleChange}
        className="w-full rounded border px-3 py-2 text-sm"
      />
      <input
        name="discount"
        placeholder="Discount"
        value={form.discount ?? ""}
        onChange={handleChange}
        className="w-full rounded border px-3 py-2 text-sm"
      />
      <input
        name="discountText"
        placeholder="Discount Text"
        value={form.discountText ?? ""}
        onChange={handleChange}
        className="w-full rounded border px-3 py-2 text-sm"
      />
      <input
        name="promoCode"
        placeholder="Promo Code"
        value={form.promoCode ?? ""}
        onChange={handleChange}
        className="w-full rounded border px-3 py-2 text-sm"
      />
      <textarea
        name="description"
        placeholder="Description"
        value={form.description ?? ""}
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
        value={form.storeAddress ?? ""}
        onChange={handleChange}
        className="w-full rounded border px-3 py-2 text-sm"
      />
      <input
        name="email"
        placeholder="Email"
        value={form.email ?? ""}
        onChange={handleChange}
        className="w-full rounded border px-3 py-2 text-sm"
      />
      <input
        name="phone"
        placeholder="Phone"
        value={form.phone ?? ""}
        onChange={handleChange}
        className="w-full rounded border px-3 py-2 text-sm"
      />
      <input
        name="facebook"
        placeholder="Facebook URL"
        value={form.facebook ?? ""}
        onChange={handleChange}
        className="w-full rounded border px-3 py-2 text-sm"
      />
      <input
        name="instagram"
        placeholder="Instagram URL"
        value={form.instagram ?? ""}
        onChange={handleChange}
        className="w-full rounded border px-3 py-2 text-sm"
      />
      <input
        name="website"
        placeholder="Website URL"
        value={form.website ?? ""}
        onChange={handleChange}
        className="w-full rounded border px-3 py-2 text-sm"
      />
      <input
        name="hasMap"
        placeholder="Map Image URL or Embed"
        value={form.hasMap ?? ""}
        onChange={handleChange}
        className="w-full rounded border px-3 py-2 text-sm"
      />
      <input
        name="url"
        placeholder="Official Website Link"
        value={form.url ?? ""}
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

      <Button
        className="bg-orange-500 hover:bg-orange-700 hover:text-white"
        type="submit"
      >
        {editId ? "Update Partner" : "Add Partner"}
      </Button>
    </form>
  );
}
