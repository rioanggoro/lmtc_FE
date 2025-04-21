"use client";

import { useState } from "react";
import { PencilLine, Trash2 } from "lucide-react";
import { Button } from "../../components/ui/button";


interface Ticket {
  id: number;
  subject: string;
  message: string;
  userEmail: string;
  status: "open" | "pending" | "closed";
  createdAt: string;
}

export default function SupportPage() {
  const [tickets, setTickets] = useState<Ticket[]>([
    {
      id: 1,
      subject: "Tidak bisa klaim kode",
      message: "Saya sudah klik getcode tapi tidak muncul kode promo.",
      userEmail: "user1@email.com",
      status: "open",
      createdAt: "2025-04-21 10:30",
    },
    {
      id: 2,
      subject: "Hadiah belum dikirim",
      message:
        "Saya menang giveaway minggu lalu tapi belum ada info pengiriman.",
      userEmail: "user2@email.com",
      status: "pending",
      createdAt: "2025-04-20 09:00",
    },
  ]);

  const [form, setForm] = useState<Omit<Ticket, "id" | "createdAt">>({
    subject: "",
    message: "",
    userEmail: "",
    status: "open",
  });

  const [editId, setEditId] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editId !== null) {
      setTickets((prev) =>
        prev.map((ticket) =>
          ticket.id === editId ? { ...ticket, ...form } : ticket,
        ),
      );
      setEditId(null);
    } else {
      const newTicket: Ticket = {
        id: Date.now(),
        createdAt: new Date().toLocaleString(),
        ...form,
      };
      setTickets((prev) => [...prev, newTicket]);
    }

    setForm({ subject: "", message: "", userEmail: "", status: "open" });
  };

  const handleEdit = (ticket: Ticket) => {
    setEditId(ticket.id);
    setForm({
      subject: ticket.subject,
      message: ticket.message,
      userEmail: ticket.userEmail,
      status: ticket.status,
    });
  };

  const handleDelete = (id: number) => {
    setTickets((prev) => prev.filter((ticket) => ticket.id !== id));
    if (editId === id) setEditId(null);
  };

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-gray-800">Support Tickets</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mb-8 space-y-4 rounded-lg border bg-white p-6 shadow-sm"
      >
        <h2 className="text-lg font-semibold text-gray-700">
          {editId ? "Edit Ticket" : "Add Ticket (Manual)"}
        </h2>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-600">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
            className="w-full rounded-md border px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-600">
            Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={3}
            required
            className="w-full rounded-md border px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-600">
            User Email
          </label>
          <input
            type="email"
            name="userEmail"
            value={form.userEmail}
            onChange={handleChange}
            required
            className="w-full rounded-md border px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-600">
            Status
          </label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full rounded-md border px-3 py-2 text-sm"
          >
            <option value="open">Open</option>
            <option value="pending">Pending</option>
            <option value="closed">Closed</option>
          </select>
        </div>

        <Button type="submit">{editId ? "Update Ticket" : "Add Ticket"}</Button>
      </form>

      {/* List */}
      <div className="rounded-lg border bg-white p-4 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-gray-700">
          Ticket List
        </h2>
        {tickets.length === 0 ? (
          <p className="text-sm text-gray-500">No tickets available.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {tickets.map((ticket) => (
              <li
                key={ticket.id}
                className="flex items-start justify-between p-3 hover:bg-gray-50"
              >
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {ticket.subject}
                  </h3>
                  <p className="text-sm text-gray-600">{ticket.message}</p>
                  <p className="mt-1 text-xs text-gray-500">
                    {ticket.userEmail} • {ticket.createdAt} •{" "}
                    <span
                      className={
                        ticket.status === "open"
                          ? "text-green-600"
                          : ticket.status === "pending"
                            ? "text-yellow-500"
                            : "text-red-500"
                      }
                    >
                      {ticket.status.toUpperCase()}
                    </span>
                  </p>
                </div>
                <div className="ml-4 flex gap-2">
                  <button
                    onClick={() => handleEdit(ticket)}
                    className="text-sm text-blue-500 hover:underline"
                  >
                    <PencilLine className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(ticket.id)}
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
