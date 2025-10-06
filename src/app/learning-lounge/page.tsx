import Image from "next/image";
import { Poppins } from 'next/font/google'
import { CardContainer, CardBody, CardItem } from '../../../components/ui/3d-card'
import Carousel from '../../../components/ui/Carousel'
import EbooksGrid from '../../../components/ui/EbooksGrid'
const poppins = Poppins({ subsets: ['latin'], weight: ['400','600','800'] })
export const metadata = {
  title: "Learning Lounge | Demandify Media",
  description:
    "Explore the Performance Suite: SEO, content, digital, prospecting and paid media insights, ebooks, and videos.",
};

export default function LearningLoungePage() {
  return (
    <main className={`min-h-screen pt-28 md:pt-32 ${poppins.className}`}>
      {/* Hero */}
      <section className="container mx-auto px-6 pt-12 pb-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Heading */}
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-neutral-900">
            WELCOME TO THE
            <span className="block bg-gradient-to-r from-[#b300a5] via-[#e03bd2] to-[#b300a5] bg-clip-text text-transparent">
              PERFORMANCE SUITE ™
            </span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mt-4 max-w-3xl text-[15px] sm:text-base text-neutral-700">
            At Demandify Media, we focus on performance. Our Performance Suite elevates your brand, generates leads,
            and delivers results across channels. Unlock long‑term value with personalized, data‑driven strategies across
            SEO, content marketing, email, and paid media.
          </p>

          {/* CTA */}
          <div className="mt-6">
            <button
              className="inline-flex items-center gap-2 rounded-full bg-[#b300a5] px-6 py-3 text-white text-sm font-semibold shadow hover:bg-[#99038d] transition-colors focus:outline-none focus:ring-2 focus:ring-[#b300a5]/60"
            >
              LEARN MORE <span aria-hidden>→</span>
            </button>
          </div>

          {/* Image card below CTA */}
          <div className="mt-12">
            <CardContainer className="relative aspect-[16/9] w-full max-w-lg sm:max-w-2xl lg:max-w-4xl mx-auto">
              <CardBody className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <CardItem as="div" translateZ={20} className="absolute inset-0">
                  <Image
                    src="/img/LL1.webp"
                    alt="Performance Suite dashboards"
                    fill
                    priority
                    className="object-cover"
                  />
                </CardItem>
                {/* soft gradient overlay */}
                <CardItem
                  as="div"
                  translateZ={30}
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.1) 100%), linear-gradient(90deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, rgba(0,0,0,0.1) 100%), linear-gradient(0deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.0) 70%, rgba(0,0,0,0.05) 100%)',
                  }}
                />
              </CardBody>
            </CardContainer>
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
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            
            className="group rounded-2xl border border-[#b300a5]/30 bg-white p-5 shadow-sm hover:shadow-md transition-all"
          >
            <div className="text-center">
              <p className="text-base font-semibold text-neutral-900">Leading You To The Future Of</p>
              <p className="text-lg font-extrabold text-[#b300a5] -mt-0.5">Marketing Technology</p>
            </div>
          </div>
          <div
           
            className="group rounded-2xl border border-[#b300a5]/30 bg-white p-5 shadow-sm hover:shadow-md transition-all"
          >
            <div className="text-center">
              <p className="text-base font-semibold text-neutral-900">Request A Free Marketing Audit</p>
              <span className="inline-block mt-2 rounded-full bg-[#b300a5] px-5 py-2 text-white text-sm font-semibold group-hover:bg-[#99038d] transition-colors">Book Call</span>
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
        <div className="relative max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight text-black">
            Unlocking trends that define success
          </h2>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {["SEO", "Content", "Social", "Digital", "Prospect", "Paid Media"].map((t) => (
              <span
                key={t}
                className="px-4 py-2 rounded-full border border-[#b300a5]/30 text-[#b300a5] text-xs font-semibold bg-[#b300a5]/5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Carousel Section (replacing Three Feature Cards) */}
      <section className="relative container mx-auto px-6 pb-12">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#c11bbb 1px, transparent 1px), linear-gradient(90deg, #c11bbb 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <Carousel
            slides={[
              { title: 'Optimized Campaigns', src: '/img/Hero.png' },
              { title: 'Performance Suite', src: '/img/LL1.webp' },
              { title: 'Visibility & Reach', src: '/img/Container.png' },
              { title: 'Kaseya', src: '/img/Kaseya.png' },
              { title: 'Kaspersky', src: '/img/Kapersky.png' },
              { title: 'Red Hat', src: '/img/Redhat.png' },
            ]}
            interval={3000}
          />
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
          <p className="text-sm sm:text-base text-neutral-800">
            Download: Webinars, Content & Marketing Services
          </p>
         
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
          <h3 className="text-3xl sm:text-4xl font-extrabold leading-tight text-black">Watch Our Latest Video Interviews</h3>
          <p className="text-sm text-neutral-700 mt-1">Masterclass By Marketers</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            {["/img/Kaseya.png", "/img/Kapersky.png", "/img/Redhat.png"].map((src, i) => (
              <div key={i} className="rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
                <div className="relative w-full aspect-[16/10]">
                  <Image src={src} alt="Interview thumbnail" fill className="object-contain p-6" />
                </div>
                <div className="px-4 pb-4 -mt-1">
                  <button className="inline-flex items-center rounded-full bg-[#b300a5] px-4 py-2 text-white text-xs font-semibold shadow hover:bg-[#99038d] transition-colors">
                    Watch
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
