import { LogoSlider } from "../../../components/ui/logo-slider";
import { FlowButton as FlowCta } from "../../../components/ui/flow-button2";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "800"] });

export default function PricingPage() {
  return (
    <main className={`min-h-screen pt-28 md:pt-32 ${poppins.className}`}>
      {/* Header */}
      <section className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-black mt-10">
            Choose Your Plan, <span className="text-[#b300a5]">Scale Your Success</span>
          </h1>
          <p className="mt-6 mb-10 text-base md:text-lg text-neutral-700">
            Flexible lead generation campaigns tailored to your business goals.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="container mx-auto px-6 py-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="group relative h-full rounded-3xl border-2 border-[#b300a5]/60 bg-white shadow-md hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 rounded-3xl ring-2 ring-[#b300a5]/20 pointer-events-none" />
            <div className="relative h-full rounded-3xl overflow-hidden flex flex-col">
              <div className="px-5 md:px-6 pt-5 md:pt-6 pb-3 text-center bg-gradient-to-b from-[#ffe7fb] via-white to-white min-h-[110px] md:min-h-[130px] flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#6b21a8]">
                  Brand Awareness & Intent Qualified Leads
                </h3>
                <div className="mt-4">
                  <div className="text-3xl md:text-4xl font-semibold text-[#b300a5]">₹1,331</div>
                  <div className="text-sm text-neutral-600 mt-1">Cost per Lead (CPL)*</div>
                </div>
              </div>
              <div className="h-px w-full bg-neutral-300" />
              <div className="px-6 md:px-8 py-5 md:py-6 flex flex-col flex-1 min-h-[14rem] md:min-h-[16rem]">
                <ul className="space-y-4 text-base text-neutral-800">
                  <li className="flex gap-2"><span>▸</span>Hosting your Banner on demandify's tech bulletin and partner media agency.</li>
                  <li className="flex gap-2"><span>▸</span>LinkedIn Ads & Announcements</li>
                  <li className="flex gap-2"><span>▸</span>EDM Campaigns promoting the content on your website</li>
                </ul>
                <div className="mt-auto pt-5 md:pt-6 flex justify-center">
                  <FlowCta text="Learn More" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative h-full rounded-3xl border-2 border-[#b300a5]/60 bg-white shadow-md hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 rounded-3xl ring-2 ring-[#b300a5]/20 pointer-events-none" />
            <div className="relative h-full rounded-3xl overflow-hidden flex flex-col">
              <div className="px-6 md:px-8 pt-6 md:pt-8 pb-4 text-center bg-gradient-to-b from-[#ffe7fb] via-white to-white min-h-[120px] md:min-h-[140px] flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#6b21a8]">Hybrid Content Syndication</h3>
                <div className="mt-4">
                  <div className="text-3xl md:text-4xl font-semibold text-[#b300a5]">₹4,435</div>
                  <div className="text-sm text-neutral-600 mt-1">Cost per Lead (CPL)*</div>
                </div>
              </div>
              <div className="h-px w-full bg-neutral-300" />
              <div className="px-6 md:px-8 py-6 md:py-8 flex flex-col flex-1 min-h-[16rem] md:min-h-[18rem]">
                <ul className="space-y-4 text-base text-neutral-800">
                  <li className="flex gap-2"><span>▸</span>Content Syndication via Form Fills through a gated landing page.</li>
                  <li className="flex gap-2"><span>▸</span>Tailored Intro and Thank you Email Promoting the shared content.</li>
                  <li className="flex gap-2"><span>▸</span>Multi-touch approach that qualifies the lead through digital and Tele-verification.</li>
                  <li className="flex gap-2"><span>▸</span>Option to pre-qualify the prospect based on profiling questions.</li>
                </ul>
                <div className="mt-auto pt-6 md:pt-8 flex justify-center">
                  <FlowCta text="Learn More" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative h-full rounded-3xl border-2 border-[#b300a5]/60 bg-white shadow-md hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 rounded-3xl ring-2 ring-[#b300a5]/20 pointer-events-none" />
            <div className="relative h-full rounded-3xl overflow-hidden flex flex-col">
              <div className="px-6 md:px-8 pt-6 md:pt-8 pb-4 text-center bg-gradient-to-b from-[#ffe7fb] via-white to-white min-h-[120px] md:min-h-[140px] flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#6b21a8]">Lead Nurture Program</h3>
                <div className="mt-4">
                  <div className="text-3xl md:text-4xl font-semibold text-[#b300a5]">₹10,645</div>
                  <div className="text-sm text-neutral-600 mt-1">Cost per Lead (CPL)*</div>
                </div>
              </div>
              <div className="h-px w-full bg-neutral-300" />
              <div className="px-6 md:px-8 py-6 md:py-8 flex flex-col flex-1 min-h-[16rem] md:min-h-[18rem]">
                <ul className="space-y-4 text-base text-neutral-800">
                  <li className="flex gap-2"><span>▸</span>Work as an extended arm for your sales team.</li>
                  <li className="flex gap-2"><span>▸</span>Run a sequence of emails and calls to nurture the lead.</li>
                  <li className="flex gap-2"><span>▸</span>Profiling the prospect based on BANT questions.</li>
                  <li className="flex gap-2"><span>▸</span>Comparative analytics to place your brand in front of targeted prospects.</li>
                </ul>
                <div className="mt-auto pt-6 md:pt-8 flex justify-center">
                  <FlowCta text="Learn More" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Slider under pricing */}
      <section className="container mx-auto px-6 mt-12 md:mt-16 pb-16">
        <LogoSlider
          speedMs={18000}
          pauseOnHover
          className="py-6"
          itemClassName="opacity-80 hover:opacity-100 transition-opacity"
        />
      </section>
    </main>
  );
}


