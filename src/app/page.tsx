import type { Metadata } from 'next'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
const poppins = Poppins({ subsets: ['latin'], weight: ['400','600','800'] })
import { FlowButton } from '../../components/ui/flow-button'
import { FlowButton as FlowButton2 } from '../../components/ui/flow-button2'

export const metadata: Metadata = {
  title: 'Demandify Media | Demand Generation, ABM, Content Syndication',
  description: 'Demandify Media is a leader in Demand generation, Lead Generation, Account Based Marketing (ABM), Content Syndication, Intent Data Bank software services!!',
  keywords: [
    "Demandify Media",
    "demand generation",
    "lead generation",
    "account based marketing",
    "ABM",
    "content syndication",
    "intent data",
    "B2B marketing",
    "growth marketing"
  ],
  icons: {
    icon: '/favicon.ico',
  },
}

export default function Home() {
  return (
    <main className={`min-h-screen ${poppins.className}`}>
      <section className="container mx-auto px-6 mt-12 sm:mt-16 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-10 lg:gap-16">
          {/* Left: Copy */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-black">
              AI-driven <span className="text-[#b300a5]">INTENT DATA</span>
            </h1>
            <p className="mt-4 text-2xl sm:text-3xl text-black">
              That powers a <span className="text-[#b300a5] font-bold">25%</span> increase in
              conversion rates
            </p>
            <p className="mt-6 max-w-xl text-sm sm:text-base text-neutral-700">
              We zoom in on the most valuable prospects using a fusion of advanced
              technology and human skill to take you closer to your revenue
              objectives within no time.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <FlowButton2 text="Contact Sales" />
              <FlowButton text="Learn more" />
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative aspect-[4/3] w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
            <Image
              src="/img/Hero.png"
              alt="Analyst reviewing intent data dashboards"
              fill
              priority
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
