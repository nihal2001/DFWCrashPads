import type { Metadata } from "next";
import "./globals.css";
import siteConfig from "@/config/site.json";

export const metadata: Metadata = {
  title: `${siteConfig.businessName} - ${siteConfig.tagline}`,
  description: siteConfig.description,
  keywords: ["bouldering", "crash pads", "climbing", "rental", "DFW", "Dallas", "Fort Worth", "outdoor climbing"],
  openGraph: {
    title: siteConfig.businessName,
    description: siteConfig.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
