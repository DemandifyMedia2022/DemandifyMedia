import { Poppins } from "next/font/google";
import Image from "next/image";
import { FlowButton } from "../../../components/ui/flow-button2";
import LeadGeneration from "../../../components/ui/Lead-Generation";
import { CardContainer, CardBody, CardItem } from "../../../components/ui/3d-card";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "800"] });

export default function WhatWeDoPage() {
  return (
    <main className={`min-h-screen ${poppins.className}`}>
      {/* Hero Section with image */}
      <section className="container mx-auto px-6 mt-14 sm:mt-18 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 sm:gap-10 lg:gap-16">
          {/* Left: Copy */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-black">
              Maximize Revenue with
              <br />
              <span className="text-[#b300a5]">Demandify Media.</span>
            </h1>
            <p className="mt-4 text-xs sm:text-sm lg:text-base text-neutral-700 max-w-2xl mx-auto lg:mx-0">
              Target, Guide, and Personalize for Success. Unlock your potential with our lead generation programs and flexible pricing models tailored to your objectives.
            </p>
            <div className="mt-6 flex justify-center lg:justify-start">
              <FlowButton text="Contact Us" />
            </div>
          </div>

          {/* Right: Hero Image with 3D Card */}
          <CardContainer className="relative aspect-[4/3] w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
            <CardBody className="relative h-full w-full rounded-lg overflow-hidden shadow-xl">
              <CardItem as="div" translateZ={20} className="absolute inset-0">
                <Image
                  src="/img/What_we_do_Hero_image.webp"
                  alt="What We Do hero visual"
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
      <LeadGeneration />
    </main>
  );
}


