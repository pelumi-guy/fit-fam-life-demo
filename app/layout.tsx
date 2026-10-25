import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fitfam Life — Train smarter. Eat with clarity. Grow with your Fitfam.",
  description:
    "Fitfam Life is a Nigerian-first fitness companion for training, food logging, progress and community accountability. ISF Forum pitch demo.",
};

export const viewport: Viewport = {
  themeColor: "#063F46",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full overflow-x-hidden font-sans">{children}</body>
    </html>
  );
}
