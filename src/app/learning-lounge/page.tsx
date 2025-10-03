import Image from "next/image";


export default function LearningLoungePage() {
  return (
    <main className="min-h-screen pt-28 md:pt-32">
      {/* Hero: Title, paragraph, button */}
      <section className="container mx-auto px-6 pt-10 pb-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-black">
            WELCOME TO THE  
        <span className="text-[#b300a5]"> 
          PERFORMANCE SUITE</span> ™
          </h1>
          <p className="mt-4 text-md md:text-base text-black-900">
            At Demandify Media, we concentrate on performance rather than marketing only. Our Performance Suite promotes your brand, creates leads and
            gives results across all channels. Let us bring long-term value to your business through personalized data-driven strategies in SEO, content
            marketing, email and paid ads.
          </p>
          <div className="mt-6">
            <a
              href="#learn-more"
              className="inline-flex items-center rounded-full bg-[#b300a5] px-6 py-3 text-white text-sm font-semibold shadow hover:bg-[#99038d] transition-colors"
            >
              LEARN MORE 
            </a>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section id="learn-more" className="container mx-auto px-6 pb-12">
        <div className="mx-auto max-w-4xl">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
            <Image src="/img/LL1.WEBP" alt="Performance dashboards" fill className="object-cover" priority />
          </div>
        </div>
      </section>

    </main>
  );
}
