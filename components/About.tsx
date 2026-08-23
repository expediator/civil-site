import { CheckCircle, User } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function About() {
  const { about } = siteConfig;

  return (
    <section id="about" className="section-pad bg-white">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="section-heading">{about.heading}</h2>
          <p className="section-sub">{about.subheading}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Photo placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main card */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-navy-800 to-navy-700 flex flex-col items-center justify-center shadow-2xl">
                <User className="w-28 h-28 text-white/15 mb-3" />
                <p className="text-3xl font-bold text-white/20 tracking-widest">AY</p>
                <p className="text-white/30 text-xs mt-4 px-6 text-center">
                  [ Replace with real photo in /public/images/ ]
                </p>
              </div>

              {/* Floating credential card */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 border border-slate-100">
                <p className="text-xs text-slate-500 font-medium">Currently studying at</p>
                <p className="text-sm font-bold text-navy-700 leading-tight">HBTU Kanpur</p>
                <p className="text-xs text-slate-400">B.Tech Civil Engineering</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-5">
            {about.bio.map((para, i) => (
              <p key={i} className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {para}
              </p>
            ))}

            {/* Honest credentials note */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
              <span className="font-semibold">Note: </span>
              {about.credentialNote}
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center bg-slate-50 rounded-xl px-3 py-4 border border-slate-100"
                >
                  <p className="text-lg font-bold text-navy-700">{stat.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Coursework tags */}
            <div>
              <p className="text-sm font-semibold text-slate-700 mb-3">Relevant Coursework</p>
              <div className="flex flex-wrap gap-2">
                {about.coursework.map((subject) => (
                  <span
                    key={subject}
                    className="inline-flex items-center gap-1.5 bg-navy-700/5 text-navy-700 text-xs font-medium px-3 py-1.5 rounded-full border border-navy-700/15"
                  >
                    <CheckCircle className="w-3 h-3" />
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
