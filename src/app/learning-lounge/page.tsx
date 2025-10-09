import Image from "next/image";
import { Poppins } from 'next/font/google'
import Carousel from '../../../components/ui/Carousel'
import EbooksGrid from '../../../components/ui/EbooksGrid'
import { FlowButton } from '../../../components/ui/flow-button2'
import { client } from '@/lib/sanity.client'
import { postsQuery } from '@/lib/queries'
const poppins = Poppins({ subsets: ['latin'], weight: ['400','600','800'] })
export const metadata = {
  title: "Learning Lounge | Demandify Media",
  description:
    "Explore the Performance Suite: SEO, content, digital, prospecting and paid media insights, ebooks, and videos.",
};

export default async function LearningLoungePage() {
  type Post = {
    _id: string
    title?: string
    excerpt?: string
    coverImage?: { asset?: { url?: string } }
  }
  const posts = await client.fetch<Post[]>(postsQuery)

  const videos = [
    { src: "/img/Vdo1.png", title: "Scaling B2B Demand Gen", href: "https://www.youtube.com/watch?v=w5I-Hhkyo0I&feature=youtu.be" },
    { src: "/img/vdo 2.webp", title: "Content That Converts", href: "https://www.youtube.com/watch?v=a20FFRyywT8&t=56s" },
    { src: "/img/vdo3.png", title: "SEO in 2025", href: "https://www.youtube.com/watch?v=iArGidm9EFY" },
    { src: "/img/vdo4.webp", title: "ABM Tactics", href: "https://www.youtube.com/watch?v=m9o1Ki9Nol4" },
    { src: "/img/vdo5.webp", title: "Paid Media Playbook", href: "https://www.youtube.com/watch?v=iTqVK9e_m_g" },
  ];
  // Add minimal placeholders to keep the grid balanced on desktop (3 columns)
  const placeholdersCount = (3 - (videos.length % 3)) % 3;
  const blogSlides = posts
    .filter((p) => p.coverImage?.asset?.url)
    .slice(0, 10)
    .map((p) => ({
      title: p.title || 'Untitled',
      src: p.coverImage!.asset!.url!,
      excerpt: p.excerpt || undefined,
    }))
  return (
    <main className={`min-h-screen overflow-hidden pt-28 md:pt-32 ${poppins.className}`}>
      {/* Hero */}
      <section className="container mx-auto px-6 pt-12 pb-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Image left */}
          <div className="order-2 md:order-1">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <Image
                src="/img/LL1.webp"
                alt="Performance Suite"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* Text right */}
          <div className="order-1 md:order-2 text-center md:text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-neutral-900">
              Welcome to the
              <span className="block bg-gradient-to-r from-[#b300a5] via-[#e03bd2] to-[#b300a5] bg-clip-text text-transparent">Performance Suite</span>
            </h1>
            <p className="mt-3 max-w-xl md:max-w-none text-[15px] sm:text-base text-neutral-700 mx-auto md:mx-0">
              At Demandify Media, our Performance Suite elevates your brand, generates leads, and delivers results across channels.
              Unlock long‑term value with personalized, data‑driven strategies across SEO, content marketing, email, and paid media.
            </p>
            
          </div>
        </div>
      </section>


      {/* Dual CTAs */}
      <section className="relative container mx-auto px-6 pb-12">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(#c11bbb 1px, transparent 1px), linear-gradient(90deg, #c11bbb 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
          <div
            
            className="group rounded-2xl border border-[#b300a5]/30 bg-white p-5 shadow-sm hover:shadow-md transition-all"
          >
            <div className="text-center">
              <p className="text-base font-semibold text-neutral-900">Leading You To The Future Of</p>
              <p className="text-lg font-extrabold text-[#b300a5] -mt-0.4">Marketing Technology</p>
            </div>
          </div>
          <div
            className="group rounded-2xl border border-[#b300a5]/30 bg-white p-5 shadow-sm hover:shadow-md transition-all"
          >
            <div className="text-center">
              <p className="text-base font-semibold text-neutral-900">Request A Free Marketing Audit</p>
              <div className="mt-3 flex justify-center">
                <a href="/contact" aria-label="Book a call">
                  <FlowButton text="Book Call" size="sm" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unlocking trends chips */}
      <section className="relative container mx-auto px-6 pb-10">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(#c11bbb 1px, transparent 1px), linear-gradient(90deg, #c11bbb 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>
        <div className="relative max-w-5xl mx-auto text-center mt-10">
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight text-black">
            Unlocking trends that define success
          </h2>
         
        </div>
      </section>

      {/* Carousel Section (replacing Three Feature Cards) */}
      <section className="relative container mx-auto px-6 pb-10">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#c11bbb 1px, transparent 1px), linear-gradient(90deg, #c11bbb 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <Carousel slides={blogSlides.length ? blogSlides : [
            { title: 'Optimized Campaigns', src: '/img/Hero.png' },
            { title: 'Performance Suite', src: '/img/LL1.webp' },
            { title: 'Visibility & Reach', src: '/img/Container.png' },
          ]} interval={3000} />
        </div>
      </section>

      {/* Download CTA */}
      <section className="relative container mx-auto px-6 pb-10">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(#c11bbb 1px, transparent 1px), linear-gradient(90deg, #c11bbb 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <h3 className="text-2xl sm:text-2xl font-semibold leading-tight text-black">
          Download: Webinars, Content & Marketing Services
          </h3>
         
        </div>
      </section>

      {/* Ebooks grid */}
      <section id="downloads" className="relative container mx-auto px-6 pb-12">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(#c11bbb 1px, transparent 1px), linear-gradient(90deg, #c11bbb 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>
        <EbooksGrid
          titles={[
            "Transforming Experiences with Uniphore's AI Solutions",
            "Perfectly Optimized Content From Start To Finish",
            "SaaS Content Marketing: A Complete Guide",
            "Google Ranking Stats & Signals 2024",
            "B2B Lead Generation: Create Content That Converts",
            "A Guide To Essential Tools For SEO Agencies",
          ]}
        />
      </section>

      {/* Videos */}
      <section className="relative container mx-auto px-6 pb-20">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(#c11bbb 1px, transparent 1px), linear-gradient(90deg, #c11bbb 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>
        <div className="relative max-w-5xl mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl font-semibold leading-tight text-black">Watch Our Latest Video Interviews</h3>
          <p className="text-sm text-neutral-700 mt-1">Masterclass By Marketers</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
            {videos.map((v, i) => (
              v.href ? (
                <a
                  key={i}
                  href={v.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm hover:shadow-md transition"
                >
                  <div className="relative w-full aspect-[16/10] bg-neutral-100">
                    <Image src={v.src} alt={v.title} fill className="object-contain p-4" />
                  </div>
                  <div className="px-3 py-3">
                    <p className="text-sm font-semibold text-neutral-900">{v.title}</p>
                  </div>
                </a>
              ) : (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm"
                >
                  <div className="relative w-full aspect-[16/10] bg-neutral-100">
                    <Image src={v.src} alt={v.title} fill className="object-contain p-4" />
                  </div>
                  <div className="px-3 py-3">
                    <p className="text-sm font-semibold text-neutral-900">{v.title}</p>
                  </div>
                </div>
              )
            ))}
            {Array.from({ length: placeholdersCount }).map((_, idx) => (
              <div
                key={`ph-${idx}`}
                className="rounded-2xl overflow-hidden border border-dashed border-neutral-300 bg-white/60 backdrop-blur-sm shadow-sm flex flex-col"
              >
                <div className="relative w-full aspect-[16/10] bg-neutral-50 grid place-items-center">
                  <div className="flex items-center gap-2 text-neutral-400">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M19 3H5a2 2 0 0 0-2 2v14l4-4h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
                    </svg>
                    <span className="text-sm font-medium">More interviews coming soon</span>
                  </div>
                </div>
                <div className="px-3 py-3">
                  <p className="text-sm font-semibold text-neutral-400">Coming Soon</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
