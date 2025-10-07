"use client";

import React from "react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Section, Container } from "./ui/craft";
import { FileText, BookOpen, FileSignature, Stars, ArrowRight } from "lucide-react";

const items = [
  {
    icon: <FileText className="h-5 w-5" />, 
    title: "Buyers Guide",
    desc: "Help prospects compare solutions with relevant information across the buyer journey.",
    href: "/what-we-do"
  },
  {
    icon: <BookOpen className="h-5 w-5" />, 
    title: "eBook",
    desc: "Inform, educate and convert with deep, practical insights your audience values.",
    href: "/what-we-do"
  },
  {
    icon: <FileSignature className="h-5 w-5" />, 
    title: "Whitepaper",
    desc: "Establish authority with research-backed analysis and compelling data narratives.",
    href: "/what-we-do"
  },
  {
    icon: <Stars className="h-5 w-5" />, 
    title: "Thought Leadership Content",
    desc: "Shape opinions with unique POVs rooted in expertise and market insight.",
    href: "/what-we-do"
  },
];

export default function ServicesOverview() {
  return (
    <Section className="relative container mx-auto px-6 pt-10 pb-16 lg:pt-12 lg:pb-20 overflow-hidden">
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
        {/* Header - match homepage */}
        <div className="text-center mb-10 lg:mb-14">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#c11bbb]/10 to-[#d946ef]/10 border border-[#c11bbb]/20 text-[#c11bbb] text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
              Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            <Balancer>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b300a5] via-[#d946ef] to-[#b300a5] animate-gradient bg-[length:200%_auto]">Access our</span>
              <span> Services</span>
            </Balancer>
          </h2>
        </div>

        {/* Single centered card with 2x2 layout */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl rounded-2xl border-2 border-[#ec6fea] bg-white/80 backdrop-blur-xl p-6 lg:p-8 shadow-sm">
            <h3 className="text-xl lg:text-2xl font-semibold text-[#b300a5]">Content Creation Marketing Services</h3>
            <div className="mt-3 h-[3px] w-28 rounded-full bg-[#b300a5]/40" />
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Left column */}
              <ul className="space-y-5">
                {items.slice(0, 2).map((it, idx) => (
                  <li key={idx} className="flex items-start gap-3 min-h-[88px]">
                    <span className="mt-0.5 h-6 w-6 rounded-full bg-[#c11bbb]/10 text-[#b300a5] flex items-center justify-center flex-shrink-0">
                      {it.icon}
                    </span>
                    <div className="flex-1">
                      <div className="text-sm sm:text-base font-semibold text-black">{it.title}</div>
                      <p className="text-xs sm:text-sm text-neutral-700 mt-1">{it.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Right column */}
              <ul className="space-y-5">
                {items.slice(2).map((it, idx) => (
                  <li key={idx} className="flex items-start gap-3 min-h-[88px]">
                    <span className="mt-0.5 h-6 w-6 rounded-full bg-[#c11bbb]/10 text-[#b300a5] flex items-center justify-center flex-shrink-0">
                      {it.icon}
                    </span>
                    <div className="flex-1">
                      <div className="text-sm sm:text-base font-semibold text-black">{it.title}</div>
                      <p className="text-xs sm:text-sm text-neutral-700 mt-1">{it.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <Link href="/what-we-do" className="inline-flex items-center gap-2 text-[#b300a5] font-semibold group">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
