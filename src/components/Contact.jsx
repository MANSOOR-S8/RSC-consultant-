import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useRevealGroup } from "../animations/scrollAnimations.js";
import SectionEyebrow from "./SectionEyebrow.jsx";

const DETAILS = [
  { icon: Mail, label: "Email", value: "RSCConsultant@gmail.com" },
  { icon: Phone, label: "Phone", value: "+92 (314) 9697543" },
  { icon: MapPin, label: "Office", value: "UG 389 Deans Saddar Peshawar " },
  { icon: Clock, label: "Business Hours", value: "Mon – Fri, 9:00 – 18:00" },
];

function Field({ label, type = "text", name, textarea = false, ...props }) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[11px] uppercase tracking-wide-xl text-navy-800/50">
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          rows={4}
          className="w-full rounded-xl border border-navy-900/12 bg-white px-4 py-3 text-[14.5px] text-navy-900 outline-none transition-colors focus:border-gold-500"
          {...props}
        />
      ) : (
        <input
          type={type}
          name={name}
          className="w-full rounded-xl border border-navy-900/12 bg-white px-4 py-3 text-[14.5px] text-navy-900 outline-none transition-colors focus:border-gold-500"
          {...props}
        />
      )}
    </label>
  );
}

function Contact() {
  const scope = useRevealGroup(".reveal-item", { start: "top 80%" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={scope}
      className="relative bg-paper py-28 lg:py-36">
      <div className="container-page grid grid-cols-1 gap-14 lg:grid-cols-12">
        <div className="reveal-item lg:col-span-5">
          <SectionEyebrow code="01" label="Contact" />
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-navy-900 text-balance sm:text-4xl">
            Reach us directly.
          </h2>
          <p className="mt-5 max-w-sm text-[15.5px] leading-relaxed text-navy-800/70">
            Prefer email or a call? Use the details below, or send a message and
            a member of our team will follow up personally.
          </p>

          <div className="mt-10 flex flex-col gap-6">
            {DETAILS.map((d) => (
              <div key={d.label} className="flex items-start gap-4">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-navy-900 text-gold-300">
                  <d.icon className="h-4 w-4" />
                </span>
                <span>
                  <p className="font-mono text-[11px] uppercase tracking-wide-xl text-navy-800/45">
                    {d.label}
                  </p>
                  <p className="mt-1 text-[14.5px] font-medium text-navy-900">
                    {d.value}
                  </p>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-item lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="rounded-[1.75rem] border border-navy-900/8 bg-white p-7 shadow-card sm:p-9">
            {submitted ? (
              <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
                <p className="font-display text-xl font-semibold text-navy-900">
                  Message sent.
                </p>
                <p className="mt-2 max-w-xs text-[14.5px] text-navy-800/65">
                  Thank you — a member of our team will be in touch shortly.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field
                  label="Name"
                  name="name"
                  placeholder="Rehmat Shah"
                  required
                />
                <Field
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="RSC@gmail.com"
                  required
                />
                <Field
                  label="Phone"
                  type="tel"
                  name="phone"
                  placeholder="+92 314 9697543"
                />
                <Field
                  label="Subject"
                  name="subject"
                  placeholder="Market entry strategy"
                />
                <div className="sm:col-span-2">
                  <Field
                    label="Message"
                    name="message"
                    textarea
                    placeholder="Tell us about your goals…"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-navy-900 px-7 py-3.5 font-body text-sm font-semibold text-white transition-colors hover:bg-navy-800 sm:col-span-2 sm:w-auto">
                  Send Message
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
