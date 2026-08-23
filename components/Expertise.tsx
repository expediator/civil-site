import { CheckCircle, Circle, Clock } from "lucide-react";
import { siteConfig } from "@/data/content";

const statusStyles = {
  current: {
    card: "bg-navy-700 border-navy-700 text-white shadow-xl shadow-navy-700/20",
    badge: "bg-amber-500 text-white",
    heading: "text-white",
    desc: "text-white/70",
    chip: "bg-white/15 text-white border-white/20",
    dot: "bg-amber-400",
    icon: <CheckCircle className="w-5 h-5 text-amber-400" />,
  },
  upcoming: {
    card: "bg-white border-navy-700/30 text-slate-700",
    badge: "bg-navy-700/10 text-navy-700",
    heading: "text-slate-900",
    desc: "text-slate-500",
    chip: "bg-slate-100 text-slate-600 border-slate-200",
    dot: "bg-navy-600",
    icon: <Circle className="w-5 h-5 text-navy-600" />,
  },
  future: {
    card: "bg-white border-slate-200 text-slate-600",
    badge: "bg-slate-100 text-slate-500",
    heading: "text-slate-700",
    desc: "text-slate-400",
    chip: "bg-slate-50 text-slate-500 border-slate-200",
    dot: "bg-slate-300",
    icon: <Clock className="w-5 h-5 text-slate-400" />,
  },
};

export default function Expertise() {
  const { expertise } = siteConfig;

  return (
    <section id="expertise" className="section-pad bg-slate-50">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="section-heading">{expertise.heading}</h2>
          <p className="section-sub">{expertise.subheading}</p>
        </div>

        {/* Intro */}
        <p className="text-center text-sm text-slate-400 mb-12">{expertise.intro}</p>

        {/* Progress indicator — desktop only */}
        <div className="hidden lg:flex items-center justify-center mb-8 gap-0">
          {expertise.phases.map((phase, i) => {
            const style = statusStyles[phase.status as keyof typeof statusStyles];
            return (
              <div key={phase.year} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                      phase.status === "current"
                        ? "bg-navy-700 border-navy-700"
                        : phase.status === "upcoming"
                        ? "border-navy-600 bg-white"
                        : "border-slate-300 bg-white"
                    }`}
                  >
                    {style.icon}
                  </div>
                  <span className="text-xs font-semibold mt-1 text-slate-600">{phase.year}</span>
                </div>
                {i < expertise.phases.length - 1 && (
                  <div
                    className={`w-32 h-0.5 mx-1 ${
                      i === 0 ? "bg-navy-700/40" : "bg-slate-200"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Phase cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {expertise.phases.map((phase) => {
            const style = statusStyles[phase.status as keyof typeof statusStyles];
            return (
              <div
                key={phase.year}
                className={`rounded-2xl p-6 border-2 transition-all ${style.card}`}
              >
                {/* Year + badge */}
                <div className="flex items-center justify-between mb-1">
                  <h3 className={`text-xl font-bold ${style.heading}`}>{phase.year}</h3>
                  <span
                    className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${style.badge}`}
                  >
                    {phase.label}
                  </span>
                </div>

                {/* Description */}
                <p className={`text-xs mb-4 ${style.desc}`}>{phase.description}</p>

                {/* Subjects */}
                <div className="flex flex-wrap gap-1.5">
                  {phase.subjects.map((subject) => (
                    <span
                      key={subject}
                      className={`text-xs px-2.5 py-1 rounded-full border ${style.chip}`}
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-slate-400 mt-8 max-w-xl mx-auto">
          Each year builds on the last — and each semester&apos;s practical labs and coursework
          directly strengthens the services I provide today.
        </p>
      </div>
    </section>
  );
}
