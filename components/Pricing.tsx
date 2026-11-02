'use client';
import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle } from "lucide-react";
import { siteConfig } from "@/data/content";
import { CURRENCIES, getCurrency, type CurrencyCode } from './CurrencyModal';

function convertPrice(inrAmount: number, code: CurrencyCode): string {
  const c = CURRENCIES.find(x => x.code === code)!;
  const converted = inrAmount * c.rate;
  if (code === 'INR') return c.symbol + inrAmount.toLocaleString('en-IN');
  if (converted >= 1000) return c.symbol + Math.round(converted).toLocaleString('en-US');
  return c.symbol + converted.toFixed(0);
}

export default function Pricing() {
  const { pricing } = siteConfig;
  const [currency, setCurrency] = useState<CurrencyCode>('INR');

  useEffect(() => {
    setCurrency(getCurrency());
    const handler = () => setCurrency(getCurrency());
    window.addEventListener('currencyChanged', handler);
    return () => window.removeEventListener('currencyChanged', handler);
  }, []);

  const currInfo = CURRENCIES.find(c => c.code === currency)!;

  return (
    <section id="pricing" className="section-pad bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="section-heading">{pricing.heading}</h2>
          <p className="section-sub">{pricing.subheading}</p>
          {currency !== 'INR' && (
            <p className="text-xs text-slate-400 mt-2">
              Prices shown in {currInfo.flag} {currency} · Approximate conversion from INR
            </p>
          )}
        </div>

        {/* Disclaimer */}
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-center text-sm text-slate-500 bg-slate-50 border border-slate-200 rounded-xl px-5 py-3">
            {pricing.disclaimer}
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricing.items.map((item) => (
            <div
              key={item.service}
              className={`relative rounded-2xl p-6 border transition-all duration-200 flex flex-col ${
                item.highlight
                  ? "bg-navy-700 border-navy-700 text-white shadow-2xl shadow-navy-700/20"
                  : "bg-white border-slate-200 text-slate-700 hover:border-navy-600/30 hover:shadow-md"
              }`}
            >
              {item.highlight && (
                <span className="inline-block bg-amber-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full mb-3 self-start">
                  Most Popular
                </span>
              )}

              <p className={`font-bold text-base leading-snug mb-2 ${item.highlight ? "text-white" : "text-slate-800"}`}>
                {item.service}
              </p>

              <div className="mb-5">
                {item.startingAt === 0 ? (
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-bold ${item.highlight ? "text-white" : "text-navy-700"}`}>
                      FREE
                    </span>
                  </div>
                ) : (
                  <div>
                    <p className={`text-xs font-medium mb-0.5 ${item.highlight ? "text-white/60" : "text-slate-400"}`}>
                      Starting at
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-3xl font-bold ${item.highlight ? "text-white" : "text-navy-700"}`}>
                        {convertPrice(item.startingAt, currency)}
                      </span>
                      <span className={`text-xs ${item.highlight ? "text-white/50" : "text-slate-400"}`}>
                        / {item.unit}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <ul className="space-y-2.5 flex-1">
                {item.advantages.map((adv) => (
                  <li key={adv} className="flex items-start gap-2.5">
                    <CheckCircle
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                        item.highlight ? "text-amber-400" : "text-navy-600"
                      }`}
                    />
                    <span className={`text-sm leading-snug ${item.highlight ? "text-white/85" : "text-slate-600"}`}>
                      {adv}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={pricing.ctaLink}
            className="inline-flex items-center gap-2 bg-navy-700 hover:bg-navy-800 text-white font-semibold px-7 py-3.5 rounded-xl text-base transition-colors"
          >
            <CheckCircle className="w-4 h-4" />
            {pricing.ctaText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
