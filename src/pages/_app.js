
import React from 'react';
import '../app/globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
      <Header />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
