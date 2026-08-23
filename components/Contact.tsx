"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { siteConfig } from "@/data/content";

type Status = "idle" | "loading" | "success" | "error";

interface Fields {
  name: string;
  phone: string;
  location: string;
  service: string;
  projectDetails: string;
  message: string;
}

const empty: Fields = {
  name: "",
  phone: "",
  location: "",
  service: "",
  projectDetails: "",
  message: "",
};

export default function Contact() {
  const { contact, business } = siteConfig;
  const [fields, setFields] = useState<Fields>(empty);
  const [status, setStatus] = useState<Status>("idle");

  const waUrl = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    business.whatsappMessage
  )}`;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const data = new FormData();
      data.append("access_key", siteConfig.web3formsKey);
      data.append(
        "subject",
        `New Enquiry from ${fields.name} — ${fields.service || "General"}`
      );
      data.append("from_name", fields.name);
      (Object.entries(fields) as [string, string][]).forEach(([k, v]) =>
        data.append(k, v)
      );

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();

      if (json.success) {
        setStatus("success");
        setFields(empty);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputCls =
    "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-600/40 focus:border-navy-600/50 transition";

  return (
    <section id="contact" className="section-pad bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="section-heading">{contact.heading}</h2>
          <p className="section-sub">{contact.subheading}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* ── FORM (wider column) ─────────────────────────── */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row: Name + Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1.5">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="name"
                    value={fields.name}
                    onChange={handleChange}
                    required
                    placeholder="Ramesh Kumar"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="phone"
                    value={fields.phone}
                    onChange={handleChange}
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    className={inputCls}
                  />
                </div>
              </div>

              {/* Row: Location + Service */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1.5">
                    Your Location
                  </label>
                  <input
                    name="location"
                    value={fields.location}
                    onChange={handleChange}
                    placeholder="Kanpur / Unnao / Lucknow…"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1.5">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={fields.service}
                    onChange={handleChange}
                    className={inputCls}
                  >
                    <option value="">Select a service…</option>
                    {contact.services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Project details */}
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1.5">
                  Project Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="projectDetails"
                  value={fields.projectDetails}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder="Describe your project — plot size, location, type of construction, stage you're at…"
                  className={inputCls}
                />
              </div>

              {/* Additional message */}
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1.5">
                  Additional Message (optional)
                </label>
                <textarea
                  name="message"
                  value={fields.message}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Any other questions or information…"
                  className={inputCls}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 bg-navy-700 hover:bg-navy-800 disabled:opacity-60 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors text-sm"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Enquiry
                  </>
                )}
              </button>

              {/* Status messages */}
              {status === "success" && (
                <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-green-800 text-sm">
                    Thank you! I&apos;ll get back to you within 24 hours. You can also WhatsApp
                    me for a faster response.
                  </p>
                </div>
              )}
              {status === "error" && (
                <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-red-800 text-sm">
                    Something went wrong. Please WhatsApp or call me directly at{" "}
                    <a href={`tel:${business.phone}`} className="font-semibold underline">
                      {business.phone}
                    </a>
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* ── CONTACT INFO (narrower column) ──────────────── */}
          <div className="lg:col-span-2 space-y-5">
            {/* WhatsApp CTA */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white rounded-2xl px-5 py-5 transition-colors group"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                {/* WhatsApp SVG */}
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7 fill-white"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-base leading-tight">Chat on WhatsApp</p>
                <p className="text-white/75 text-sm">{business.phone}</p>
                <p className="text-white/60 text-xs mt-0.5">Fastest response — usually within 1 hour</p>
              </div>
            </a>

            {/* Info cards */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
              <h3 className="font-semibold text-slate-900 text-sm">Direct Contact</h3>

              <a
                href={`tel:${business.phone}`}
                className="flex items-center gap-3 text-slate-600 hover:text-navy-700 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-navy-700/8 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-navy-700" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Phone / WhatsApp</p>
                  <p className="text-sm font-medium">{business.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${business.email}`}
                className="flex items-center gap-3 text-slate-600 hover:text-navy-700 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-navy-700/8 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-navy-700" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Email</p>
                  <p className="text-sm font-medium break-all">{business.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-9 h-9 rounded-lg bg-navy-700/8 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-navy-700" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Service Area</p>
                  <p className="text-sm font-medium">{business.serviceArea}</p>
                </div>
              </div>
            </div>

            {/* Response time note */}
            <p className="text-xs text-slate-400 text-center leading-relaxed">
              {contact.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
