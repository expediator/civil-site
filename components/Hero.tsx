import { ArrowRight, MapPin, GraduationCap } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a1628 0%, #0f2340 45%, #1a3c5e 100%)",
      }}
    >
      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 hero-grid" />

      {/* Soft radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(58,120,173,0.15) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        {/* Education badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <GraduationCap className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span className="text-white/90 text-xs sm:text-sm font-medium">
            {siteConfig.hero.badge}
          </span>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight leading-tight">
          {siteConfig.business.name}
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl lg:text-2xl text-blue-200 font-medium mb-5">
          {siteConfig.business.tagline}
        </p>

        {/* Description */}
        <p className="text-white/65 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
          {siteConfig.hero.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <a
            href={siteConfig.hero.ctaLink}
            className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-7 py-3.5 rounded-xl text-base transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25 w-full sm:w-auto"
          >
            {siteConfig.hero.ctaText}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={siteConfig.hero.secondaryCtaLink}
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/25 text-white font-medium px-7 py-3.5 rounded-xl text-base transition-all duration-200 w-full sm:w-auto"
          >
            {siteConfig.hero.secondaryCtaText}
          </a>
        </div>

        {/* Location badge */}
        <div className="flex items-center justify-center gap-1.5 text-white/50 text-sm">
          <MapPin className="w-4 h-4 text-amber-400" />
          <span>{siteConfig.hero.locationBadge}</span>
        </div>
      </div>

      {/* Bottom gradient fade to white */}
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
