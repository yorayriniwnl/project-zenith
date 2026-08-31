import "./globals.css";
import ClientOnly from "@/components/ClientOnly";
import Navbar from "@/components/Navbar";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001"),
  title: "Zenith // Solar Decision Intelligence",
  description: "A YOR-styled decision surface for rooftop solar feasibility, subsidy context, and long-horizon returns.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Zenith // Solar Decision Intelligence",
    description: "Trace a solar decision from bill signal to auditable installation workflow.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="text-[95.5%]" suppressHydrationWarning>
      <body className="min-h-screen bg-black text-[#f5eaea]">
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
