"use client";

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/lib/sanity.image";

/**
 * Simple Portable Text renderer
 * - Pass Sanity "Portable Text" as the `value` prop
 * - We only customize how image blocks render; everything else uses defaults
 */
export default function RichPortableText({ value }: { value: any }) {
  if (!value) return null;
  const components = {
    types: {
      // How to render an image block coming from Sanity
      image: ({ value }: { value: any }) => {
        const src = value ? urlForImage(value).width(1200).url() : null;
        if (!src) return null;
        const alt = value?.alt || ""; // Use alt from Sanity if provided
        return (
          <div className="relative w-full aspect-[16/9] my-6 rounded-xl overflow-hidden ring-1 ring-black/5 bg-neutral-100">
            <Image src={src} alt={alt} fill className="object-cover" />
          </div>
        );
      },
    },
  } as const;

  return <PortableText value={value} components={components} />;
}
