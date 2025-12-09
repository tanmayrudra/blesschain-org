import React from 'react';
import { ThemeProvider } from 'next-themes';
import '../app/globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
