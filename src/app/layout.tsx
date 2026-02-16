import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/shared/BackToTop";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "North South University | The First Private University of Bangladesh",
  description: "North South University (NSU) is the first private university in Bangladesh, established in 1992. Offering world-class education in business, engineering, law, and more.",
  keywords: ["North South University", "NSU", "Bangladesh", "Private University", "Higher Education", "Dhaka"],
  authors: [{ name: "North South University" }],
  openGraph: {
    title: "North South University",
    description: "The First Private University of Bangladesh",
    url: "https://www.northsouth.edu",
    siteName: "North South University",
    locale: "en_US",
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
      <body className={`${workSans.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
