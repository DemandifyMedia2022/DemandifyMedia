import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Elevate your brand story with Demandify. Consistently delivering a 15–25% Lead-to-Opportunity conversion rate for our clients.",
  alternates: { canonical: "/contact-us" },
}

export default function ContactUsPage() {
  return (
    <main className="relative">
      {/* Decorative gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(215,52,204,0.12),transparent),radial-gradient(40%_40%_at_0%_20%,rgba(179,0,165,0.12),transparent),radial-gradient(40%_40%_at_100%_20%,rgba(124,58,237,0.12),transparent)]" />

      <div className="container mx-auto px-6 pt-28 md:pt-32 pb-16">
        {/* Heading */}
        <header className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#b300a5] via-[#d734cc] to-[#7c3aed]">
            Elevate your brand story with demandify
          </h1>
          <p className="mt-3 text-neutral-700">
            Consistently Delivering a 15–25% Lead-to-Opportunity Conversion Rate For Our Clients.
          </p>
        </header>

        {/* Content Grid */}
        <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          {/* Left illustration */}
          <div className="relative overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-sm bg-white/70 backdrop-blur-sm">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
              alt="Handshake illustration"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/30" />
          </div>

          {/* Right form */}
          <div className="rounded-2xl bg-white/95 ring-1 ring-black/5 shadow-md p-6 md:p-7">
            <form className="space-y-5">
              {/* Name row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-neutral-800">First Name<span className="text-[#b300a5]">*</span></label>
                  <input
                    type="text"
                    aria-label="First Name"
                    className="h-11 w-full rounded-md border border-neutral-300 bg-neutral-50 px-3 text-sm outline-none focus:border-[#b300a5] focus:ring-2 focus:ring-[#b300a5]/20"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-neutral-800">Last Name</label>
                  <input
                    type="text"
                    aria-label="Last Name"
                    className="h-11 w-full rounded-md border border-neutral-300 bg-neutral-50 px-3 text-sm outline-none focus:border-[#b300a5] focus:ring-2 focus:ring-[#b300a5]/20"
                  />
                </div>
              </div>

              {/* Contact row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-neutral-800">Email Address<span className="text-[#b300a5]">*</span></label>
                  <input
                    type="email"
                    aria-label="Email Address"
                    className="h-11 w-full rounded-md border border-neutral-300 bg-neutral-50 px-3 text-sm outline-none focus:border-[#b300a5] focus:ring-2 focus:ring-[#b300a5]/20"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-neutral-800">Mobile</label>
                  <input
                    type="tel"
                    aria-label="Mobile"
                    className="h-11 w-full rounded-md border border-neutral-300 bg-neutral-50 px-3 text-sm outline-none focus:border-[#b300a5] focus:ring-2 focus:ring-[#b300a5]/20"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-neutral-800">Message</label>
                <textarea
                  placeholder="How can we help?"
                  rows={5}
                  className="w-full rounded-md border border-neutral-300 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-[#b300a5] focus:ring-2 focus:ring-[#b300a5]/20"
                />
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-neutral-200" />

              {/* Consent */}
              <label className="flex items-start gap-3 text-sm text-neutral-700">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-neutral-300 accent-[#b300a5]" />
                <span>
                  Demandify Media may contact me with personalized offers, support updates, and event news by Email and Phone.
                </span>
              </label>

              {/* Captcha placeholder */}
              <div className="rounded-md border border-neutral-300 bg-neutral-50 p-4">
                <div className="text-xs text-neutral-500">reCAPTCHA placeholder</div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between gap-4 pt-1">
                <p className="text-xs text-neutral-500">We respect your privacy. We’ll never sell your data.</p>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#b300a5] to-[#7c3aed] px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:opacity-95 active:opacity-90"
                >
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  )
}
