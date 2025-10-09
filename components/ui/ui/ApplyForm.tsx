"use client"

import React from "react"

export interface ApplyFormProps {
  roles: { title: string }[]
}

export default function ApplyForm({ roles }: ApplyFormProps) {
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    // Demo only
    alert("Thanks! This demo form does not submit.")
  }

  return (
    <div className="rounded-2xl bg-white ring-1 ring-black/5 shadow-md p-6">
      <h4 className="text-xl font-semibold text-neutral-900">Apply Now</h4>
      <p className="text-sm text-neutral-600 mt-1">Share your details and upload your resume.</p>

      <form className="mt-5 space-y-4" onSubmit={onSubmit}>
        <div>
          <label className="text-sm font-medium text-neutral-800">Full Name</label>
          <input
            type="text"
            className="mt-1 h-11 w-full rounded-md border border-neutral-300 bg-neutral-50 px-3 text-sm outline-none focus:border-[#b300a5] focus:ring-2 focus:ring-[#b300a5]/20"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium text-neutral-800">Email</label>
          <input
            type="email"
            className="mt-1 h-11 w-full rounded-md border border-neutral-300 bg-neutral-50 px-3 text-sm outline-none focus:border-[#b300a5] focus:ring-2 focus:ring-[#b300a5]/20"
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium text-neutral-800">Role</label>
          <select className="mt-1 h-11 w-full rounded-md border border-neutral-300 bg-neutral-50 px-3 text-sm outline-none focus:border-[#b300a5] focus:ring-2 focus:ring-[#b300a5]/20" required>
            <option value="">Select a role</option>
            {roles.map((r) => (
              <option key={r.title} value={r.title}>
                {r.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-neutral-800">Resume (PDF)</label>
          <input
            type="file"
            accept="application/pdf"
            className="mt-1 block w-full text-sm text-neutral-700 file:mr-3 file:rounded-md file:border file:border-neutral-300 file:bg-neutral-50 file:px-3 file:py-2 file:text-sm file:font-medium file:text-neutral-800 hover:file:bg-neutral-100"
          />
          <p className="mt-1 text-xs text-neutral-500">Max 2MB. This demo form does not upload files.</p>
        </div>
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#b300a5] to-[#7c3aed] px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:opacity-95 active:opacity-90"
        >
          Submit Application
        </button>
      </form>
    </div>
  )
}
