import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contractor Invoice Tax Optimizer – Maximize Your Deductions",
  description: "Automatically scan freelancer invoices and expenses to categorize deductions and estimate quarterly tax savings with IRS compliance."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7047a9ec-a9cf-491d-bcbb-c0a497cd1d8f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
