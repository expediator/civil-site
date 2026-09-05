import { MapPin, ArrowRight, LayoutDashboard, Globe, Calculator } from "lucide-react";
import { siteConfig } from "@/data/content";

const projectIcons = [LayoutDashboard, Globe, Calculator];

const projectGradients = [
  "from-navy-800 to-navy-700",
  "from-slate-700 to-slate-600",
  "from-navy-700 to-blue-800",
];

export default function Projects() {
  const { projects } = siteConfig;

  return (
    <section id="projects" className="section-pad bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="section-heading">{projects.heading}</h2>
          <p className="section-sub">{projects.subheading}</p>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.items.map((project, idx) => {
            const Icon = projectIcons[idx % projectIcons.length];
            const gradient = projectGradients[idx % projectGradients.length];
            return (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-navy-700/30 hover:shadow-lg transition-all duration-200"
              >
                {/* Generic icon header */}
                <div
                  className={`aspect-video bg-gradient-to-br ${gradient} flex items-center justify-center`}
                >
                  <Icon className="w-14 h-14 text-white/30" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-semibold text-slate-900 text-sm leading-snug mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                    {project.location}
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-navy-700 hover:text-navy-800 text-sm font-semibold underline underline-offset-4 transition-colors"
          >
            Have a project in mind? Let&apos;s talk
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
