import type { Metadata } from 'next'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
const poppins = Poppins({ subsets: ['latin'], weight: ['400','600','800'] })
import { FlowButton } from '../../components/ui/flow-button'
import { FlowButton as FlowButton2 } from '../../components/ui/flow-button2'
import { CardContainer, CardBody, CardItem } from '../../components/ui/3d-card'
import { SlidingNumber } from '../../components/ui/Sliding-Numbers'

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
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 sm:gap-10 lg:gap-16">
          {/* Left: Copy */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-black">
              AI-driven <span className="text-[#b300a5]">INTENT DATA</span>
            </h1>
            <p className="mt-4 text-2xl sm:text-3xl text-black">
              That powers a <span className="text-[#b300a5] font-bold">25%</span> increase in
              conversion rates
            </p>
            <p className="mt-6 max-w-xl text-sm sm:text-base text-neutral-700 mx-auto lg:mx-0">
              We zoom in on the most valuable prospects using a fusion of advanced
              technology and human skill to take you closer to your revenue
              objectives within no time.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <FlowButton2 text="Contact Sales" />
              <FlowButton text="Learn more" />
            </div>
          </div>

          {/* Right: Image with 3D Card */}
          <CardContainer className="relative aspect-[4/3] w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
            <CardBody className="relative h-full w-full rounded-lg overflow-hidden shadow-xl">
              <CardItem as="div" translateZ={20} className="absolute inset-0">
                <Image
                  src="/img/Hero.png"
                  alt="Analyst reviewing intent data dashboards"
                  fill
                  priority
                  className="object-cover rounded-lg"
                />
              </CardItem>
              {/* subtle overlay shine */}
              <CardItem
                as="div"
                translateZ={30}
                className="pointer-events-none absolute inset-0 rounded-lg"
                style={{
                  background:
                    'linear-gradient(120deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.0) 40%)',
                  mixBlendMode: 'overlay',
                }}
              />
            </CardBody>
          </CardContainer>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 sm:gap-10 lg:gap-16">
          {/* Left: Image with 3D Card */}
          <CardContainer className="relative aspect-[4/3] w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
            <CardBody className="relative h-full w-full rounded-lg overflow-hidden shadow-xl">
              <CardItem as="div" translateZ={20} className="absolute inset-0">
                <Image
                  src="/img/container.png"
                  alt="Team meeting with virtual participants"
                  fill
                  className="object-cover rounded-lg"
                />
              </CardItem>
              {/* subtle overlay shine */}
              <CardItem
                as="div"
                translateZ={30}
                className="pointer-events-none absolute inset-0 rounded-lg"
                style={{
                  background:
                    'linear-gradient(120deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.0) 40%)',
                  mixBlendMode: 'overlay',
                }}
              />
            </CardBody>
          </CardContainer>

          {/* Right: Content */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-black">
              Forge unbreakable connections with your{' '}
              <span className="text-[#b300a5]">target audience</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-700 mx-auto lg:mx-0">
              We offer relationships by using tailored communication approaches that are crucial in improving
              customer experience. At Demandify, we give you the power to engage with your high value accounts on a
              more personal level and build experiences around them that resonate and establish lasting trust.
            </p>

            {/* Stats Grid */}
            <div className="mt-8 grid grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
              {/* Stat 1 */}
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#b300a5]">
                  <SlidingNumber value={42} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#b300a5]" suffix="M+" animateOnScroll />
                </div>
                <div className="mt-2 text-xs sm:text-sm font-medium text-black">
                  Business Leaders
                </div>
              </div>

              {/* Stat 2 */}
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#b300a5]">
                  <SlidingNumber value={14} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#b300a5]" suffix="+" animateOnScroll />
                </div>
                <div className="mt-2 text-xs sm:text-sm font-medium text-black">
                  Countries
                </div>
              </div>

              {/* Stat 3 */}
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#b300a5]">
                  <SlidingNumber value={4} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#b300a5]" suffix="+" animateOnScroll />
                </div>
                <div className="mt-2 text-xs sm:text-sm font-medium text-black">
                  Functional Areas
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Success Section */}
      <section className="container mx-auto px-6 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#b300a5] to-[#d946ef]">
              Speed your way to revenue success
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-3xl mx-auto">
              Maximize revenues by optimizing processes and strategies, including aligning every aspect of your
              initiatives for maximum impact.
            </p>
          </div>

          {/* Stats Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="group relative bg-gradient-to-br from-white to-neutral-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-200/50 hover:border-[#b300a5]/30">
              <div className="absolute inset-0 bg-gradient-to-br from-[#b300a5]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Circular Progress */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-32 h-32">
                    <svg className="transform -rotate-90 w-32 h-32">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-neutral-200"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={2 * Math.PI * 56}
                        strokeDashoffset={2 * Math.PI * 56 * (1 - 0.99)}
                        className="text-[#b300a5] transition-all duration-1000 ease-out"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-extrabold text-[#b300a5]">99%</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-center text-base sm:text-lg font-semibold text-black leading-snug">
                  Data Accuracy Globally<br />with Access to Direct lines
                </h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-gradient-to-br from-white to-neutral-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-200/50 hover:border-[#b300a5]/30">
              <div className="absolute inset-0 bg-gradient-to-br from-[#b300a5]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Circular Progress */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-32 h-32">
                    <svg className="transform -rotate-90 w-32 h-32">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-neutral-200"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={2 * Math.PI * 56}
                        strokeDashoffset={2 * Math.PI * 56 * (1 - 0.15)}
                        className="text-[#b300a5] transition-all duration-1000 ease-out"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-extrabold text-[#b300a5]">15%</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-center text-base sm:text-lg font-semibold text-black leading-snug">
                  Content Consumption &<br />Interaction Through Multi-Touch points
                </h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-gradient-to-br from-white to-neutral-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-200/50 hover:border-[#b300a5]/30">
              <div className="absolute inset-0 bg-gradient-to-br from-[#b300a5]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Circular Progress */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-32 h-32">
                    <svg className="transform -rotate-90 w-32 h-32">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-neutral-200"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={2 * Math.PI * 56}
                        strokeDashoffset={2 * Math.PI * 56 * (1 - 0.25)}
                        className="text-[#b300a5] transition-all duration-1000 ease-out"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-extrabold text-[#b300a5]">25%</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-center text-base sm:text-lg font-semibold text-black leading-snug">
                  Lead to Opportunity<br />Conversion
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
