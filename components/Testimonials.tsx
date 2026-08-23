import { Star, Quote } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function Testimonials() {
  const { testimonials } = siteConfig;

  return (
    <section id="testimonials" className="section-pad bg-slate-50">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="section-heading">{testimonials.heading}</h2>
          <p className="section-sub">{testimonials.subheading}</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-navy-700/20 mb-4 flex-shrink-0" />

              {/* Quote text */}
              <p className="text-slate-600 text-sm leading-relaxed flex-grow mb-5">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Author */}
              <div className="border-t border-slate-100 pt-4">
                <p className="font-semibold text-slate-900 text-sm">{item.name}</p>
                <p className="text-xs text-slate-400">
                  {item.role} · {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder note */}
        <p className="text-center text-xs text-slate-400 mt-8">
          These are placeholder testimonials. Replace them in{" "}
          <code className="font-mono bg-slate-100 px-1.5 py-0.5 rounded">
            data/content.ts → testimonials.items
          </code>
          {" "}with real client feedback.
        </p>
      </div>
    </section>
  );
}
