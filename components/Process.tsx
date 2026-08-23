import {
  MessageSquare,
  Globe,
  FileText,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/data/content";

const iconMap: Record<string, LucideIcon> = {
  MessageSquare,
  Globe,
  FileText,
  CheckCircle,
};

export default function Process() {
  const { process } = siteConfig;

  return (
    <section id="process" className="section-pad bg-navy-800">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {process.heading}
          </h2>
          <p className="mt-3 text-white/50 text-base sm:text-lg max-w-2xl mx-auto">
            {process.subheading}
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {/* Connector line — visible on desktop only */}
          <div className="hidden lg:block absolute top-10 left-[calc(25%-1rem)] right-[calc(25%-1rem)] h-px bg-white/10" />

          {process.steps.map((step, i) => {
            const Icon = iconMap[step.icon] ?? CheckCircle;
            return (
              <div
                key={step.number}
                className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors"
              >
                {/* Step number chip */}
                <span className="inline-block text-amber-400 text-xs font-bold tracking-wider mb-3">
                  STEP {step.number}
                </span>

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-amber-500/15 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-amber-400" strokeWidth={1.5} />
                </div>

                {/* Text */}
                <h3 className="text-white font-semibold text-base mb-2">{step.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{step.description}</p>

                {/* Step connector dot — desktop */}
                {i < process.steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-2.5 top-10 w-5 h-5 rounded-full bg-navy-800 border-2 border-white/20 z-10" />
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-7 py-3.5 rounded-xl text-base transition-colors"
          >
            Start with a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
