"use client";
// React and Next.js imports
import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
// Third-party library imports
import Balancer from "react-wrap-balancer";
// UI component imports
import { Section, Container } from "./ui/craft";
import { FlowButton } from "./flow-button2";
// Icon imports
import {
  Megaphone,
  MessageSquareText,
  UserCheck,
  Workflow,
  ArrowRight,
} from "lucide-react";

type FeatureText = {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Megaphone className="h-6 w-6 text-[#b300a5]" />,
    title: "Brand Awareness",
    href: "/what-we-do",
    description:
      "We help your business by showcasing it to the right customer at the right time so your brand stands out in an oversaturated market.",
    cta: "Read More",
  },
  {
    icon: <MessageSquareText className="h-6 w-6 text-[#b300a5]" />,
    title: "Hybrid Content Syndication",
    href: "/what-we-do",
    description:
      "Maximize the reach of your content by distributing it across relevant platforms with tailored content syndication strategies.",
    cta: "Read More",
  },
  {
    icon: <UserCheck className="h-6 w-6 text-[#b300a5]" />,
    title: "Intent Qualified Leads",
    href: "/what-we-do",
    description:
      "Accelerate growth by connecting your brand with consumers searching for precisely what you offer at the right moment.",
    cta: "Read More",
  },
  {
    icon: <Workflow className="h-6 w-6 text-[#b300a5]" />,
    title: "Lead Nurture Program",
    href: "/what-we-do",
    description:
      "Convert ready-to-buy leads using personalized bottom‑of‑funnel strategies that drive higher engagement and maximize ROI.",
    cta: "Read More",
  },
];

const Feature = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = openIndex !== null ? "hidden" : original || "auto";
    return () => {
      document.body.style.overflow = original || "auto";
    };
  }, [openIndex]);

  return (
    <Section className="border-b py-16 lg:pb-12 lg:pt-20">
      <Container className="not-prose">
        <div className="flex flex-col">
          <div className="text-center mb-8 lg:mb-10">
            <div className="inline-block mb-3">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#c11bbb]/10 to-[#c11bbb]/10 border border-[#c11bbb]/20 text-[#c11bbb] text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                Lead Generation
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-3">
              <Balancer>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b300a5] to-[#d946ef]">End-to-End</span>
                <span className="text-black"> Demand Generation</span>
              </Balancer>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-3xl mx-auto">
              <Balancer>
                Unlock the full potential of your marketing efforts with our comprehensive demand generation services. From building brand awareness to converting prospects, we cover the entire buyer journey to drive measurable results.
              </Balancer>
            </p>
          </div>

          <AnimatePresence>
            {openIndex !== null && (
              <div className="fixed inset-0 z-50 h-screen overflow-y-auto">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="fixed inset-0 bg-black/70 backdrop-blur-sm"
                  onClick={() => setOpenIndex(null)}
                />
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 320, damping: 28 }}
                  className="relative z-[60] mx-auto my-6 sm:my-8 md:my-10 w-[94%] sm:w-[92%] max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl rounded-2xl bg-white p-5 md:p-8 shadow-2xl max-h-[88vh] md:max-h-[80vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  {openIndex !== null && (
                    <div className="grid gap-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="text-[#b300a5]">{featureText[openIndex].icon}</div>
                          <h4 className="text-2xl font-semibold text-[#b300a5]">
                            {featureText[openIndex].title}
                          </h4>
                        </div>
                        <button
                          aria-label="Close"
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white"
                          onClick={() => setOpenIndex(null)}
                        >
                          ×
                        </button>
                      </div>
                      <p className="text-base leading-relaxed text-black/80">
                        {featureText[openIndex].description}
                      </p>
                      {featureText[openIndex].title === "Brand Awareness" && (
                        <div className="grid gap-3">
                          <p className="text-base leading-relaxed text-black/80">
                            We help your business stand out by showcasing it to the right customer at the right time. To cut through an oversaturated market, we design effective brand awareness campaigns that build a strong and consistent share of voice across the marketing funnel.
                          </p>
                          <p className="text-base leading-relaxed text-black/80">
                            Our campaigns leverage data and compelling content to create meaningful connections, emphasizing personalization and long‑term loyalty to strengthen brand trust and recognition.
                          </p>
                        </div>
                      )}
                      {featureText[openIndex].title === "Hybrid Content Syndication" && (
                        <div className="grid gap-3">
                          <p className="text-base leading-relaxed text-black/80">
                            Maximize the reach of your content by distributing it across the most relevant platforms. Our syndication strategies place your valuable assets where prospects are most active, driving engagement and qualified leads while widening your brand’s reach.
                          </p>
                          <p className="text-base leading-relaxed text-black/80">
                            Our B2B content syndication targets precise audiences and conversions through channels like blogs, white papers, and case studies—generating new traffic and sales‑ready demand on trusted properties.
                          </p>
                          <p className="text-base leading-relaxed text-black/80">
                            With our Hybrid Content Syndication approach, we blend traditional distribution with modern intent‑based targeting to deliver your assets to the most relevant and trustworthy audiences, fast.
                          </p>
                          <p className="text-base leading-relaxed text-black/80">
                            We combine inbound and outbound tactics to amplify brand visibility and deepen engagement, ensuring your content meets audiences at the right stage of their journey.
                          </p>
                          <p className="text-base leading-relaxed text-black/80">
                            Using your data and insights, we craft a dual‑layered strategy that optimally delivers content across targeted, trusted platforms—boosting brand performance with measurable impact.
                          </p>
                        </div>
                      )}
                      {featureText[openIndex].title === "Intent Qualified Leads" && (
                        <div className="grid gap-3">
                          <p className="text-base leading-relaxed text-black/80">
                            We accelerate your growth by connecting your brand with consumers searching for precisely what you offer, at the precise moment they need it. Our Intent Qualified Leads as a Service guarantees that your enterprise engages with high‑value prospects who have already signaled a readiness to purchase.
                          </p>
                          <p className="text-base leading-relaxed text-black/80">
                            Our lead generation strategies exceed conventional outreach. By combining data‑informed segmentation, customized messaging, and real‑time behavioral triggers, we focus on prospects who have moved beyond awareness to readiness to act. This strategy provides higher conversion rates, fosters more meaningful relational engagement, and cultivates sustainable customer lifetime value.
                          </p>
                        </div>
                      )}
                      {featureText[openIndex].title === "Lead Nurture Program" && (
                        <div className="grid gap-3">
                          <p className="text-base leading-relaxed text-black/80">
                            Our Lead Nurture Program is designed to convert ready-to-buy leads using personalized bottom-of-the-funnel strategies that drive higher engagement and maximize ROI We target prospects who are already familiar with your brand and close to making a decision, guiding them seamlessly toward a purchase.
                          </p>
                          <p className="text-base leading-relaxed text-black/80">
                            Through strategic messaging and highly relevant content, we address the specific needs of your prospects, motivating them to take action. Our approach includes Call-back Consent Campaigns, which offer a non-intrusive way for prospects to engage at their convenience, increasing both engagement and conversion rates.
                          </p>
                        </div>
                      )}
                      {/* CTA removed in modal as requested */}
                    </div>
                  )}
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:gap-4 lg:gap-5 md:mt-12 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
            {featureText.map(({ icon, title, description, href, cta }, index) => (
              <div
                role="button"
                tabIndex={0}
                onClick={() => setOpenIndex(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setOpenIndex(index);
                  }
                }}
                className="group relative flex h-full flex-col gap-3 sm:gap-4 rounded-2xl border border-neutral-200/80 bg-white/90 p-6 sm:p-7 md:p-8 text-left shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b300a5]/40 backdrop-blur-sm min-h-[220px]"
                key={index}
              >
                {/* Glow border on hover */}
                <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, rgba(179,0,165,0.22), rgba(217,70,239,0.18))' }} />

                <div className="relative grid gap-2.5 sm:gap-3 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#b300a5]/10 text-[#b300a5]">
                      {icon}
                    </div>
                  </div>
                  <h4 className="text-base sm:text-lg md:text-xl font-semibold text-black">{title}</h4>
                  <p className="text-xs sm:text-sm leading-snug text-neutral-700">{description}</p>
                </div>

                {/* Divider */}
                {cta && <div className="mt-1 h-px w-full bg-neutral-200/70" />}

                {cta && (
                  <div className="relative mt-2 sm:mt-3">
                    {href ? (
                      <Link href={`${href}`} className="w-fit" onClick={(e) => e.stopPropagation()}>
                        <FlowButton text={cta} size="sm" as="span" />
                      </Link>
                    ) : (
                      <div onClick={(e) => e.stopPropagation()} className="w-fit">
                        <FlowButton text={cta} size="sm" as="span" />
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
export default Feature;
