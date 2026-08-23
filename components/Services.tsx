import {
  Phone,
  Satellite,
  LayoutDashboard,
  Ruler,
  Calculator,
  HardHat,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/data/content";

const iconMap: Record<string, LucideIcon> = {
  Phone,
  Satellite,
  LayoutDashboard,
  Ruler,
  Calculator,
  HardHat,
};

export default function Services() {
  const { services } = siteConfig;

  return (
    <section id="services" className="section-pad bg-slate-50">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="section-heading">{services.heading}</h2>
          <p className="section-sub">{services.subheading}</p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.items.map((service) => {
            const Icon = iconMap[service.icon] ?? Phone;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-navy-600/30 hover:shadow-lg transition-all duration-200"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-navy-700/8 flex items-center justify-center mb-4 group-hover:bg-navy-700/12 transition-colors">
                  <Icon className="w-6 h-6 text-navy-700" strokeWidth={1.5} />
                </div>

                {/* Text */}
                <h3 className="text-base font-semibold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
