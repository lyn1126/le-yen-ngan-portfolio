import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lê Yến Ngân | E-commerce Operations Portfolio",
  description:
    "Personal CV portfolio for Lê Yến Ngân, a second-year student seeking internship or part-time opportunities in E-commerce Operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
