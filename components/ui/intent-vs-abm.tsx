"use client";

import React from "react";
import Balancer from "react-wrap-balancer";
import { Section, Container } from "./ui/craft";

export const IntentVsABM: React.FC = () => {
  return (
    <Section className="relative container mx-auto px-6 py-16 lg:py-24 overflow-hidden">
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

      <Container className="relative not-prose">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <div className="inline-block mb-3">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#c11bbb]/10 to-[#c11bbb]/10 border border-[#c11bbb]/20 text-[#c11bbb] text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
              Comparison
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            <Balancer>
              <span className="text-black">Intent </span>
              <span className="text-[#b300a5]">Data Bank</span>
              <span className="mx-2 text-neutral-400">VS</span>
              <span className="text-black"> Account-</span>
              <span className="text-[#b300a5]">Based Marketing</span>
            </Balancer>
          </h2>
        </div>

        {/* Cards Grid (equal-height rows) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 auto-rows-fr">
          {/* Card A */}
          <div className="group relative flex h-full flex-col rounded-2xl border-2 border-[#ec6fea] bg-white/90 backdrop-blur-sm p-6 lg:p-8 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#b300a5]/15 to-[#d946ef]/15 blur-[1px] transition-opacity duration-300" />
            <div className="relative flex-1">
              <h3 className="text-xl lg:text-2xl font-semibold text-[#b300a5]">Power Marketing with Intent Data</h3>
              <div className="mt-3 h-[3px] w-24 rounded-full bg-[#b300a5]/40" />
              <p className="mt-3 text-sm sm:text-base text-neutral-700 leading-relaxed">
                At Demandify Media, our Intent Data Bank connects you with triple-layer, intent-verified prospects, driving a 70% boost in sales pipeline efficiency and a 20% increase in conversions. High‑quality B2B intent data helps you find and contact the right leads at the right moment so your marketing spend stays targeted and effective.
              </p>
            </div>
          </div>

          {/* Card B */}
          <div className="group relative flex h-full flex-col rounded-2xl border-2 border-[#ec6fea] bg-white/90 backdrop-blur-sm p-6 lg:p-8 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#b300a5]/15 to-[#d946ef]/15 blur-[1px] transition-opacity duration-300" />
            <div className="relative flex-1">
              <h3 className="text-xl lg:text-2xl font-semibold text-[#b300a5]">Guided Sales Strategies</h3>
              <div className="mt-3 h-[3px] w-24 rounded-full bg-[#b300a5]/40" />
              <p className="mt-3 text-sm sm:text-base text-neutral-700 leading-relaxed">
                Our ABM automation delivers practical strategies for better lead delivery, resulting in increased marketing revenue. By focusing on high‑value accounts and tailoring outreach, ABM raises deal sizes and helps meet and exceed targets.
              </p>
            </div>
          </div>

          {/* Card C */}
          <div className="group relative flex h-full flex-col rounded-2xl border-2 border-[#ec6fea] bg-white/90 backdrop-blur-sm p-6 lg:p-8 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#b300a5]/15 to-[#d946ef]/15 blur-[1px] transition-opacity duration-300" />
            <div className="relative flex-1">
              <h3 className="text-xl lg:text-2xl font-semibold text-[#b300a5]">Boost Brand Awareness and Traffic</h3>
              <div className="mt-3 h-[3px] w-24 rounded-full bg-[#b300a5]/40" />
              <p className="mt-3 text-sm sm:text-base text-neutral-700 leading-relaxed">
                Enhance awareness and drive targeted traffic with value‑added campaigns. Using intent data, brands see higher website traffic and engagement. Our platforms stop the chase for unqualified leads by directing you to high‑intent prospects already in‑market for your solutions, improving conversions and ROI.
              </p>
            </div>
          </div>

          {/* Card D */}
          <div className="group relative flex h-full flex-col rounded-2xl border-2 border-[#ec6fea] bg-white/90 backdrop-blur-sm p-6 lg:p-8 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#b300a5]/15 to-[#d946ef]/15 blur-[1px] transition-opacity duration-300" />
            <div className="relative flex-1">
              <h3 className="text-xl lg:text-2xl font-semibold text-[#b300a5]">Personalized Customer Journey</h3>
              <div className="mt-3 h-[3px] w-24 rounded-full bg-[#b300a5]/40" />
              <p className="mt-3 text-sm sm:text-base text-neutral-700 leading-relaxed">
                Our ABM services pair the right data with analytics to craft personalized journeys that lift sales. With deep account insights, we create relevant campaigns for specific audiences, improving satisfaction while reducing churn.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default IntentVsABM;
