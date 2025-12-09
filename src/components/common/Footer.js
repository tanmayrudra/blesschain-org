import React from 'react';
import Link from 'next/link';

const sections = [
  {
    title: 'BlessChain',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Roadmap', href: '/roadmap' },
      { label: 'BBTC Token', href: '/bbtc' },
    ],
  },
  {
    title: 'BlessAI System',
    links: [
      { label: 'BlessOrder', href: '/blessorder' },
      { label: 'BlessShipping', href: '/blessshipping' },
      { label: 'BlessMenu', href: '/blessmenu' },
      { label: 'BlessERP', href: '/blesserp' },
    ],
  },
  {
    title: 'Ecosystem',
    links: [
      { label: 'BlessHosting', href: '/blesshosting' },
      { label: 'BlessPanel', href: '/blesspanel' },
      { label: 'BlessVoice', href: '/blessvoice' },
      { label: 'BlessVideo', href: '/blessvideo' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Telegram', href: 'https://t.me' },
      { label: 'X (Twitter)', href: 'https://twitter.com' },
      { label: 'YouTube', href: 'https://youtube.com' },
      { label: 'Discord', href: 'https://discord.com' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#0B0E19] text-white">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map((section) => (
            <div key={section.title} className="space-y-3">
              <h4 className="text-lg font-semibold text-[#f6f0dd]">{section.title}</h4>
              <ul className="space-y-2 text-sm text-[#d9d4c6]">
                {section.links.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:text-amber-300 transition-colors duration-150"
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-[#c9c5b6]">
          © 2025 BlessChain.com — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
