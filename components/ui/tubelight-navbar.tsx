"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { FlowButton } from "./flow-button"
import { Poppins } from "next/font/google"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] })

interface NavItem {
  name: string
  url: string
  icon?: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-6",
        poppins.className,
        className
      )}
    >
      <div className="flex items-center justify-between bg-white border border-[#e12fca] backdrop-blur-md py-3 px-6 rounded-full shadow-md">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/img/demandify_media.png"
            alt="Demandify Media"
            width={150}
            height={150}
            className="object-contain"
          />
        </Link>

        {/* Nav Items */}
        <div className="hidden md:flex items-center gap-10 ml-10 text-xl">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.url
            return (
              <Link
                key={item.name}
                href={item.url}
                className={cn(
                  "relative text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors",
                  isActive && "text-gray-900"
                )}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="active"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-[#b300a5]"
                    initial={{ width: 0 }}
                    animate={{ width: "60%" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                )}
              </Link>
            )
          })}
        </div>

        {/* Contact Button */}
        <div className="ml-6 hidden md:block">
          <FlowButton text="Contact" />
        </div>

        {/* Mobile menu placeholder */}
        {isMobile && (
          <div className="ml-auto">
            {/* Mobile menu icon can go here */}
          </div>
        )}
      </div>
    </div>
  )
}
