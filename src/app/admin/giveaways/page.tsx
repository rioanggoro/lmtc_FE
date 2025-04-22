"use client";

import { useState } from "react";
import GiveawayForm from "../components/giveaway/GiveawayForm";
import GiveawayList from "../components/giveaway/GiveawayList";

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

      <GiveawayForm
        form={form}
        editId={editId}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <GiveawayList
        giveaways={giveaways}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}
