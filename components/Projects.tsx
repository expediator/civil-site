import { MapPin, Camera, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/content";

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
          {projects.items.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-navy-700/30 hover:shadow-lg transition-all duration-200"
            >
              {/* Image area */}
              <div className="aspect-video bg-slate-100 flex flex-col items-center justify-center border-b border-slate-200 relative overflow-hidden">
                {project.imageFile ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={`/images/${project.imageFile}`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="text-center">
                    <Camera className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Add photo via<br />
                      <code className="font-mono">project.imageFile</code><br />
                      in data/content.ts
                    </p>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-slate-900 text-sm leading-snug">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                  {project.location}
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder note */}
        <p className="text-center text-xs text-slate-400 mt-8">
          More project photos coming soon. To add yours, update{" "}
          <code className="font-mono bg-slate-100 px-1.5 py-0.5 rounded">data/content.ts → projects.items[].imageFile</code>
          {" "}with a filename in <code className="font-mono bg-slate-100 px-1.5 py-0.5 rounded">/public/images/</code>
        </p>

        {/* CTA */}
        <div className="text-center mt-8">
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
