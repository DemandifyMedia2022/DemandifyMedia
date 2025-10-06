import { Poppins } from "next/font/google";
import { FlowButton } from "../../../components/ui/flow-button2";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "800"] });

export default function WhatWeDoPage() {
  return (
    <main className={`min-h-screen ${poppins.className}`}>
      {/* Hero Section (text-centered, no image) */}
      <section className="container mx-auto px-6 min-h-screen flex items-center justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold leading-tight text-black">
            Maximize Revenue with
            <br />
            <span className="text-[#b300a5]">Demandify Media.</span>
          </h1>
          <p className="mt-4 text-xs sm:text-sm lg:text-base text-neutral-700 max-w-2xl mx-auto">
            Target, Guide, and Personalize for Success. Unlock your potential with our lead generation programs and flexible pricing models tailored to your objectives.
          </p>
          <div className="mt-6 flex justify-center">
            <FlowButton text="Contact Us" />
          </div>
        </div>
      </section>
    </main>
  );
}


