import type { Metadata } from "next"
import Image from "next/image"
import ApplyForm from "../../../components/ui/ui/ApplyForm"

export const metadata: Metadata = {
  title: "Careers | Demandify Media",
  description:
    "Discover open roles and grow your career at Demandify Media. Apply for positions across customer success, demand generation, content, and more.",
  alternates: { canonical: "/careers" },
}

export default function CareersPage() {
  const roles = [
    {
      title: "Customer Success Manager",
      summary:
        "Build relationships, improve satisfaction, and drive renewals with a consultative approach.",
      tag: "Full-time",
    },
    {
      title: "Trainer",
      summary: "Enable teams with product and process training. Strong communication is a must.",
      tag: "Contract / Full-time",
    },
    {
      title: "Lead Generation Executive / Demand Generation (20+)",
      summary:
        "Prospect, qualify, and nurture leads through multi-channel outreach and data-driven playbooks.",
      tag: "Full-time",
    },
    {
      title: "Business Development Executive",
      summary: "Own pipeline, pitch value, and close opportunities with enterprise stakeholders.",
      tag: "Full-time",
    },
    {
      title: "HR Hiring",
      summary: "Source and onboard top talent. Build an amazing candidate experience.",
      tag: "Full-time",
    },
  ]

  return (
    <main className="min-h-screen pt-28 md:pt-32 pb-16">
      {/* Hero */}
      <section className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Illustration */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white ring-1 ring-black/5">
            <Image
              src="/img/LL1.webp"
              alt="Join the team"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Copy */}
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900">
              Discover Your Potential,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#b300a5] via-[#d734cc] to-[#7c3aed]">
                Join Our Team
              </span>
            </h1>
            <p className="mt-3 text-neutral-700 max-w-prose">
              We’re building a performance-first marketing company. If you’re passionate about growth, creativity,
              and impact—there’s a place for you here.
            </p>

            {/* Quick perks */}
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-neutral-800">
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#b300a5]"></span> Hybrid / Remote roles</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#b300a5]"></span> Growth-focused learning</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#b300a5]"></span> Ownership & autonomy</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#b300a5]"></span> Inclusive culture</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Open roles + Apply card */}
      <section className="container mx-auto px-6 mt-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Roles list */}
          <div className="lg:col-span-2 space-y-4">
            {roles.map((r) => (
              <div key={r.title} className="rounded-xl bg-white ring-1 ring-black/5 p-5 shadow-sm hover:shadow-md transition">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900">{r.title}</h3>
                    <p className="mt-1 text-sm text-neutral-700">{r.summary}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-[#b300a5]/10 text-[#b300a5] border border-[#b300a5]/20 whitespace-nowrap">
                    {r.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Apply form as Client Component */}
          <div className="lg:col-span-1">
            <ApplyForm roles={roles.map((r) => ({ title: r.title }))} />
          </div>
        </div>
      </section>

      {/* Culture section */}
      <section className="container mx-auto px-6 mt-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Collaborate", "Experiment", "Grow"].map((k) => (
            <div key={k} className="rounded-xl bg-white ring-1 ring-black/5 p-6 text-center shadow-sm">
              <p className="text-sm tracking-wide uppercase text-[#b300a5]">{k}</p>
              <p className="mt-2 text-neutral-700 text-sm">We value people who take initiative and work as owners. Your ideas matter here.</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
