"use client";
import React, { useEffect, useRef, useState } from "react";

interface EbookModalProps {
  open: boolean;
  onClose: () => void;
  ebookTitle?: string;
}

export default function EbookModal({ open, onClose, ebookTitle }: EbookModalProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    consent: false,
  });
  const [errors, setErrors] = useState<{ [k: string]: string }>({});

  // Close on Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Prevent background scroll when open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const update = (k: string, v: any) => setForm((p) => ({ ...p, [k]: v }));

  const validate = () => {
    const e: { [k: string]: string } = {};
    if (!form.name.trim()) e.name = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    if (!form.company.trim()) e.company = "Required";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.consent) e.consent = "Consent required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    try {
      setSubmitting(true);
      // TODO: integrate with your backend or form provider
      console.log("E-Book request", { ...form, ebookTitle });
      await new Promise((r) => setTimeout(r, 800));
      onClose();
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div
      aria-modal
      role="dialog"
      className="fixed inset-0 z-[100] flex items-center justify-center"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* Modal card */}
      <div
        ref={dialogRef}
        className="relative mx-4 w-full max-w-2xl rounded-2xl border border-[#b300a5]/20 bg-white shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between rounded-t-2xl bg-gradient-to-r from-[#b300a5]/10 to-transparent px-5 py-3 border-b border-[#b300a5]/10">
          <h3 className="text-lg font-extrabold text-[#b300a5]">E‑Book</h3>
          <button
            onClick={onClose}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#b300a5]/10 text-[#b300a5] hover:bg-[#b300a5]/15"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <form onSubmit={submit} className="px-5 py-4">
          {ebookTitle && (
            <div className="mb-3 text-xs text-neutral-600">
              Requesting: <span className="font-semibold text-neutral-800">{ebookTitle}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-neutral-700">Your Name*</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="e.g. John Doe"
                className={`mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-[#b300a5] ${
                  errors.name ? "border-red-400" : "border-neutral-200"
                }`}
              />
              {errors.name && <p className="mt-1 text-[11px] text-red-500">{errors.name}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold text-neutral-700">Your Email*</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="example@mail.com"
                className={`mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-[#b300a5] ${
                  errors.email ? "border-red-400" : "border-neutral-200"
                }`}
              />
              {errors.email && <p className="mt-1 text-[11px] text-red-500">{errors.email}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold text-neutral-700">Your Company Name*</label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => update("company", e.target.value)}
                placeholder="Company Inc."
                className={`mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-[#b300a5] ${
                  errors.company ? "border-red-400" : "border-neutral-200"
                }`}
              />
              {errors.company && <p className="mt-1 text-[11px] text-red-500">{errors.company}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold text-neutral-700">Your Contact Number*</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="Your Contact Number"
                className={`mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-[#b300a5] ${
                  errors.phone ? "border-red-400" : "border-neutral-200"
                }`}
              />
              {errors.phone && <p className="mt-1 text-[11px] text-red-500">{errors.phone}</p>}
            </div>
          </div>

          <label className="mt-3 flex items-center gap-2 text-xs text-neutral-700">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(e) => update("consent", e.target.checked)}
              className="rounded border-neutral-300 text-[#b300a5] focus:ring-[#b300a5]"
            />
            I agree to receive content and communications from Demandify Media.
          </label>
          {errors.consent && <p className="mt-1 text-[11px] text-red-500">{errors.consent}</p>}

          <div className="mt-5 flex justify-end">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center rounded-full bg-[#b300a5] px-5 py-2 text-white text-sm font-semibold shadow hover:bg-[#99038d] transition-colors disabled:opacity-60"
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
