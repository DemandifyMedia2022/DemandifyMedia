import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { NavBar } from "../../components/ui/tubelight-navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://demandifymedia.com"),
  title: {
    default: "Demandify Media",
    template: "%s | Demandify Media",
  },
  description:
    "Demandify Media helps brands scale with performance-driven marketing, content, and growth strategies.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://demandifymedia.com/",
    siteName: "Demandify Media",
    title: "Demandify Media",
    description:
      "Demandify Media helps brands scale with performance-driven marketing, content, and growth strategies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Demandify Media",
    description:
      "Demandify Media helps brands scale with performance-driven marketing, content, and growth strategies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    { name: "Home", url: "/" },
    { name: "Learning Lounge", url: "/learning-lounge" },
    { name: "What we do", url: "/what-we-do" },
    { name: "Library", url: "/library" },
    { name: "Pricing", url: "/pricing" },
    { name: "Careers", url: "/careers" },
  ];
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`} suppressHydrationWarning>
        <NavBar items={navItems} />
        {children}
      </body>
    </html>
  );
}
