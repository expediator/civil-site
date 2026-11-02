'use client';
import { useState, useEffect } from 'react';

const CURRENCY_KEY = 'plinth_currency';

export const CURRENCIES = [
  { code: 'INR', symbol: '₹',   flag: '🇮🇳', name: 'India',          rate: 1 },
  { code: 'USD', symbol: '$',   flag: '🇺🇸', name: 'United States',  rate: 1/84 },
  { code: 'GBP', symbol: '£',   flag: '🇬🇧', name: 'United Kingdom', rate: 1/106 },
  { code: 'EUR', symbol: '€',   flag: '🇪🇺', name: 'Europe',         rate: 1/91 },
  { code: 'AED', symbol: 'AED', flag: '🇦🇪', name: 'UAE',            rate: 1/23 },
  { code: 'SGD', symbol: 'S$',  flag: '🇸🇬', name: 'Singapore',      rate: 1/62 },
  { code: 'AUD', symbol: 'A$',  flag: '🇦🇺', name: 'Australia',      rate: 1/54 },
  { code: 'CAD', symbol: 'C$',  flag: '🇨🇦', name: 'Canada',         rate: 1/62 },
] as const;

export type CurrencyCode = typeof CURRENCIES[number]['code'];

export function getCurrency(): CurrencyCode {
  if (typeof window === 'undefined') return 'INR';
  return (localStorage.getItem(CURRENCY_KEY) as CurrencyCode) ?? 'INR';
}

export default function CurrencyModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(CURRENCY_KEY);
    if (!saved) {
      // Small delay so page renders first
      const t = setTimeout(() => setOpen(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  if (!open) return null;

  const select = (code: CurrencyCode) => {
    localStorage.setItem(CURRENCY_KEY, code);
    setOpen(false);
    window.dispatchEvent(new Event('currencyChanged'));
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-navy-700 px-6 py-5 text-center">
          <p className="text-2xl mb-1">🌍</p>
          <h2 className="text-white font-bold text-lg leading-tight">Welcome to Plinth Civil Consultancy</h2>
          <p className="text-white/60 text-sm mt-1">Select your country so we can show pricing in your currency.</p>
        </div>

        {/* Currency grid */}
        <div className="p-4 grid grid-cols-2 gap-2">
          {CURRENCIES.map(c => (
            <button
              key={c.code}
              onClick={() => select(c.code)}
              className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 hover:border-navy-600 hover:bg-navy-50 transition-all text-left group"
            >
              <span className="text-2xl">{c.flag}</span>
              <div>
                <div className="font-semibold text-slate-800 text-sm group-hover:text-navy-700">{c.name}</div>
                <div className="text-xs text-slate-400">{c.symbol} {c.code}</div>
              </div>
            </button>
          ))}
        </div>

        <p className="text-center text-xs text-slate-400 pb-4">
          You can change this anytime in your browser settings.
        </p>
      </div>
    </div>
  );
}
