import type { Metadata } from 'next'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
const poppins = Poppins({ subsets: ['latin'], weight: ['400','600','800'] })
import { FlowButton } from '../../components/ui/flow-button'
import { FlowButton as FlowButton2 } from '../../components/ui/flow-button2'
import { CardContainer, CardBody, CardItem } from '../../components/ui/3d-card'
import { SlidingNumber } from '../../components/ui/Sliding-Numbers'
import { CircularProgress } from '../../components/ui/circular-progress'
import { GlowCard } from '../../components/ui/spotlight-card'

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
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-black">
              AI-driven <span className="text-[#b300a5]">INTENT DATA</span>
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-black">
              That powers a <span className="text-[#b300a5] font-bold">25%</span> increase in
              conversion rates
            </p>
            <p className="mt-6 max-w-xl text-xs sm:text-sm text-neutral-700 mx-auto lg:mx-0">
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
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-black">
              Forge unbreakable connections with your{' '}
              <span className="text-[#b300a5]">target audience</span>
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-neutral-700 mx-auto lg:mx-0">
              We offer relationships by using tailored communication approaches that are crucial in improving
              customer experience. At Demandify, we give you the power to engage with your high value accounts on a
              more personal level and build experiences around them that resonate and establish lasting trust.
            </p>

            {/* Stats Grid */}
            <div className="mt-8 grid grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
              {/* Stat 1 */}
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#b300a5]">
                  <SlidingNumber value={42} className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#b300a5]" suffix="M+" animateOnScroll />
                </div>
                <div className="mt-2 text-[10px] sm:text-xs font-medium text-black">
                  Business Leaders
                </div>
              </div>

              {/* Stat 2 */}
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#b300a5]">
                  <SlidingNumber value={14} className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#b300a5]" suffix="+" animateOnScroll />
                </div>
                <div className="mt-2 text-[10px] sm:text-xs font-medium text-black">
                  Countries
                </div>
              </div>

              {/* Stat 3 */}
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#b300a5]">
                  <SlidingNumber value={4} className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#b300a5]" suffix="+" animateOnScroll />
                </div>
                <div className="mt-2 text-[10px] sm:text-xs font-medium text-black">
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
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#b300a5] to-[#d946ef]">
              Speed your way to revenue success
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-600 max-w-3xl mx-auto">
              Maximize revenues by optimizing processes and strategies, including aligning every aspect of your
              initiatives for maximum impact.
            </p>
          </div>

          {/* Stats Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <CircularProgress 
              percentage={99} 
              label="Data Accuracy Globally with Access to Direct lines" 
            />
            <CircularProgress 
              percentage={15} 
              label="Content Consumption & Interaction Through Multi-Touch points" 
            />
            <CircularProgress 
              percentage={25} 
              label="Lead to Opportunity Conversion" 
            />
          </div>
        </div>
      </section>
 
     {/* Case Studies Section - Futuristic Redesign */}
      <section className="relative container mx-auto px-6 pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#b300a5 1px, transparent 1px), linear-gradient(90deg, #b300a5 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#b300a5]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#d946ef]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#b300a5]/10 to-[#d946ef]/10 border border-[#b300a5]/20 text-[#b300a5] text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                Success Stories
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b300a5] via-[#d946ef] to-[#b300a5] animate-gradient bg-[length:200%_auto]">
                Case Studies
              </span>
              <br />
              <span className="text-black">in Action</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-neutral-600 max-w-3xl mx-auto font-light">
              Witness the future of demand generation through our transformative client partnerships
            </p>
          </div>

          {/* Case Study Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Kaseya Card */}
            <div className="group relative">
              {/* Holographic border effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-[#b300a5] via-[#d946ef] to-[#b300a5] rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 animate-gradient bg-[length:200%_auto]" />
              
              <div className="relative bg-gradient-to-br from-white/90 to-white/50 backdrop-blur-xl rounded-2xl p-8 lg:p-10 border border-white/20 shadow-2xl hover:shadow-[#b300a5]/20 transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2">
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#b300a5]/5 via-transparent to-[#d946ef]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                <div className="relative z-10 flex flex-col items-center">
                  {/* Logo Container with animated ring */}
                  <div className="relative mb-10">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0066cc]/20 to-[#0066cc]/5 blur-xl group-hover:blur-2xl transition-all duration-500" />
                    <div className="relative h-40 w-40 flex items-center justify-center rounded-full bg-gradient-to-br from-white to-neutral-50 shadow-lg group-hover:shadow-xl transition-all duration-500 border border-neutral-100 overflow-hidden">
                      <Image
                        src="/img/Kaseya.png"
                        alt="Kaseya Logo"
                        width={140}
                        height={140}
                        className="object-contain p-5 transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="w-full mb-8 space-y-3">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-[#0066cc]/5 to-transparent border border-[#0066cc]/10">
                      <span className="text-xs text-neutral-600 font-medium">ROI Increase</span>
                      <span className="text-base font-bold text-[#0066cc]">+156%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-[#b300a5]/5 to-transparent border border-[#b300a5]/10">
                      <span className="text-xs text-neutral-600 font-medium">Lead Quality</span>
                      <span className="text-base font-bold text-[#b300a5]">+89%</span>
                    </div>
                  </div>

                  {/* Button */}
                  <FlowButton2 text="View Case Study" />
                </div>
              </div>
            </div>

            {/* Kaspersky Card */}
            <div className="group relative">
              {/* Holographic border effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-[#00a88e] via-[#b300a5] to-[#00a88e] rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 animate-gradient bg-[length:200%_auto]" />
              
              <div className="relative bg-gradient-to-br from-white/90 to-white/50 backdrop-blur-xl rounded-2xl p-8 lg:p-10 border border-white/20 shadow-2xl hover:shadow-[#00a88e]/20 transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2">
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00a88e]/5 via-transparent to-[#b300a5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                <div className="relative z-10 flex flex-col items-center">
                  {/* Logo Container with animated ring */}
                  <div className="relative mb-10">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00a88e]/20 to-[#00a88e]/5 blur-xl group-hover:blur-2xl transition-all duration-500" />
                    <div className="relative h-40 w-40 flex items-center justify-center rounded-full bg-gradient-to-br from-white to-neutral-50 shadow-lg group-hover:shadow-xl transition-all duration-500 border border-neutral-100 overflow-hidden">
                      <Image
                        src="/img/Kapersky.png"
                        alt="Kaspersky Logo"
                        width={140}
                        height={140}
                        className="object-contain p-5 transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="w-full mb-8 space-y-3">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-[#00a88e]/5 to-transparent border border-[#00a88e]/10">
                      <span className="text-xs text-neutral-600 font-medium">Conversion Rate</span>
                      <span className="text-base font-bold text-[#00a88e]">+142%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-[#b300a5]/5 to-transparent border border-[#b300a5]/10">
                      <span className="text-xs text-neutral-600 font-medium">Pipeline Growth</span>
                      <span className="text-base font-bold text-[#b300a5]">+210%</span>
                    </div>
                  </div>

                  {/* Button */}
                  <FlowButton2 text="View Case Study" />
                </div>
              </div>
            </div>

            {/* Red Hat Card */}
            <div className="group relative">
              {/* Holographic border effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-[#ee0000] via-[#b300a5] to-[#ee0000] rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 animate-gradient bg-[length:200%_auto]" />
              
              <div className="relative bg-gradient-to-br from-white/90 to-white/50 backdrop-blur-xl rounded-2xl p-8 lg:p-10 border border-white/20 shadow-2xl hover:shadow-[#ee0000]/20 transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2">
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ee0000]/5 via-transparent to-[#b300a5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                <div className="relative z-10 flex flex-col items-center">
                  {/* Logo Container with animated ring */}
                  <div className="relative mb-10">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ee0000]/20 to-[#ee0000]/5 blur-xl group-hover:blur-2xl transition-all duration-500" />
                    <div className="relative h-40 w-40 flex items-center justify-center rounded-full bg-gradient-to-br from-white to-neutral-50 shadow-lg group-hover:shadow-xl transition-all duration-500 border border-neutral-100 overflow-hidden">
                      <Image
                        src="/img/Redhat.png"
                        alt="Red Hat Logo"
                        width={140}
                        height={140}
                        className="object-contain p-5 transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="w-full mb-8 space-y-3">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-[#ee0000]/5 to-transparent border border-[#ee0000]/10">
                      <span className="text-xs text-neutral-600 font-medium">Revenue Impact</span>
                      <span className="text-base font-bold text-[#ee0000]">+198%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-[#b300a5]/5 to-transparent border border-[#b300a5]/10">
                      <span className="text-xs text-neutral-600 font-medium">Engagement Rate</span>
                      <span className="text-base font-bold text-[#b300a5]">+175%</span>
                    </div>
                  </div>

                  {/* Button */}
                  <FlowButton2 text="View Case Study" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-neutral-600 mb-6 text-base">Ready to write your success story?</p>
            <FlowButton text="Explore All Case Studies" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative container mx-auto px-6 py-20 lg:py-32 overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#c11bbb 1px, transparent 1px), linear-gradient(90deg, #c11bbb 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c11bbb]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#c11bbb]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 lg:mb-24">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#c11bbb]/10 to-[#c11bbb]/10 border border-[#c11bbb]/20 text-[#c11bbb] text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                Features
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c11bbb] via-[#c11bbb] to-[#c11bbb] animate-gradient bg-[length:200%_auto]">
                Powerful Features
              </span>
              <br />
              <span className="text-black">for Your Success</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-neutral-600 max-w-3xl mx-auto font-light">
              Discover the cutting-edge tools and capabilities that drive exceptional results
            </p>
          </div>

          {/* Features Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto items-stretch">
            {/* Feature 1: Intent Data Bank */}
            <GlowCard 
              glowColor="brand" 
              size="lg" 
              customSize
              className="w-full h-full max-w-md mx-auto bg-white border border-neutral-200 shadow-2xl"
            >
              <div className="flex flex-col h-full p-5">
                {/* Heading */}
                <h3 className="text-2xl font-extrabold text-[#d734cc] mb-2 text-left">Intent-Verified Leads</h3>
                <p className="text-sm text-neutral-700 mb-3 text-left">
                  Engage global audiences by showing clear intent and drive demand using omnichannel, data-driven solutions from Demandify.
                </p>

                {/* Image */}
                <div className="relative w-full aspect-[16/10] mb-4 overflow-hidden rounded-2xl shadow-lg border border-neutral-100">
                  <Image src="/img/Verified%20Leads.png" alt="Verified Leads" fill className="object-cover" />
                </div>

                {/* Points */}
                <div className="space-y-2.5 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#c11bbb] rounded-full mt-1.5 flex-shrink-0"></div>
                    <p className="text-sm text-neutral-700 leading-snug">Global first-party audience profiles</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#c11bbb] rounded-full mt-1.5 flex-shrink-0"></div>
                    <p className="text-sm text-neutral-700 leading-snug">Intent signals captured per week</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#c11bbb] rounded-full mt-1.5 flex-shrink-0"></div>
                    <p className="text-sm text-neutral-700 leading-snug">Monthly views on our B2B properties</p>
                  </div>
                </div>

                {/* Button */}
                <div className="mt-auto pt-3">
                  <FlowButton2 text="Learn more" />
                </div>
              </div>
            </GlowCard>

            {/* Feature 2: Content Syndication */}
            <GlowCard 
              glowColor="brand" 
              size="lg" 
              customSize
              className="w-full h-full max-w-md mx-auto bg-white border border-neutral-200 shadow-2xl"
            >
              <div className="flex flex-col h-full p-5">
                {/* Heading */}
                <h3 className="text-2xl font-extrabold text-[#d734cc] mb-2 text-left">Boost ROI with risk-free ABM</h3>
                <p className="text-sm text-neutral-700 mb-3 text-left">
                  Transform your top accounts with intent-driven ABM orchestration, leading to a more robust and valuable pipeline.
                </p>

                {/* Image */}
                <div className="relative w-full aspect-[16/10] mb-4 overflow-hidden rounded-2xl shadow-lg border border-neutral-100">
                  <Image src="/img/Boost%20ROI%20with%20risk-free%20ABM.png" alt="Boost ROI with risk-free ABM" fill className="object-cover" />
                </div>

                {/* Points */}
                <div className="space-y-2.5 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#c11bbb] rounded-full mt-1.5 flex-shrink-0"></div>
                    <p className="text-sm text-neutral-700 leading-snug">Pinpoint high-intent accounts and streamline sales opportunities</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#c11bbb] rounded-full mt-1.5 flex-shrink-0"></div>
                    <p className="text-sm text-neutral-700 leading-snug">Boost awareness and engagement across channels</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#c11bbb] rounded-full mt-1.5 flex-shrink-0"></div>
                    <p className="text-sm text-neutral-700 leading-snug">Manage multi-channel campaigns smoothly</p>
                  </div>
                </div>

                {/* Button */}
                <div className="mt-auto pt-3">
                  <FlowButton2 text="Learn more" />
                </div>
              </div>
            </GlowCard>
          </div>

          
        </div>
      </section>
    </main>
  );
}
