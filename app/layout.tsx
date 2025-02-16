import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s the wild oasis",
    default: "Welcome / the wild oasis",
  },
  description:
    "luxurious cabin hotel, located in the heart of italian, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased
        bg-primary-950 text-primary-100
        min-h-screen relative flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto  w-full">
            <ReservationProvider>
            {children}
            </ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
