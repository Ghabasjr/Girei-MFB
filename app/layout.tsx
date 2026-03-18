import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GIREI – Where Community Growth Meets Financial Opportunity",
  description:
    "GIREI empowers individuals and businesses to bank smarter and live better. Explore our accounts, loans, savings, ATM cards, mobile banking, and POS services.",
  keywords: "GIREI, community banking, microfinance, savings, loans, Nigeria bank",
  openGraph: {
    title: "GIREI – Where Community Growth Meets Financial Opportunity",
    description:
      "Empowering individuals & businesses to bank smarter and live better.",
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
      <body>{children}</body>
    </html>
  );
}
