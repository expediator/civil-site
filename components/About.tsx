import { CheckCircle, User, GraduationCap } from "lucide-react";
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

        {/* Firm description */}
        <div className="max-w-3xl mx-auto space-y-4 mb-14">
          {about.firm.description.map((para, i) => (
            <p key={i} className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {para}
            </p>
          ))}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
            <span className="font-semibold">Note: </span>
            {about.firm.credentialNote}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-16">
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

        {/* Founder section */}
        <div className="border-t border-slate-100 pt-14">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-10">
            Meet the Founder
          </p>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-4xl mx-auto">
            {/* Photo placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-3xl overflow-hidden bg-gradient-to-br from-navy-800 to-navy-700 flex flex-col items-center justify-center shadow-2xl">
                  <div className="w-28 h-28 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center mb-3">
                    <User className="w-16 h-16 text-white/60" />
                  </div>
                  <p className="text-2xl font-bold text-white/80 tracking-widest">
                    {siteConfig.business.founder.initials}
                  </p>
                  <p className="text-white/40 text-xs mt-2 font-medium tracking-wide uppercase">
                    {siteConfig.business.founder.title}
                  </p>
                </div>
                {/* Credential badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 border border-slate-100">
                  <p className="text-xs text-slate-500 font-medium">Studying at</p>
                  <p className="text-sm font-bold text-navy-700 leading-tight">HBTU Kanpur</p>
                  <p className="text-xs text-slate-400">B.Tech Civil Engineering</p>
                </div>
              </div>
            </div>

            {/* Founder bio */}
            <div className="space-y-5">
              <div>
                <p className="text-2xl font-bold text-slate-900">{about.founder.name}</p>
                <p className="text-amber-600 font-semibold text-sm mt-0.5">{about.founder.title}</p>
                <div className="flex items-center gap-1.5 text-slate-500 text-xs mt-1.5">
                  <GraduationCap className="w-3.5 h-3.5" />
                  {about.founder.education} · {about.founder.university}
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {about.founder.bio}
              </p>

              {/* Competencies */}
              <div>
                <p className="text-sm font-semibold text-slate-700 mb-3">Areas of Expertise</p>
                <div className="flex flex-wrap gap-2">
                  {about.competencies.map((subject) => (
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
      </div>
    </section>
  );
}
