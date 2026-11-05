"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  CalendarDays,
  MapPin,
  Sparkles,
  Mail,
  Phone,
} from "lucide-react";

const info = [
  { icon: CalendarDays, label: "Starts 10 October 2026", isDate: true },
  { icon: CalendarDays, label: "Last Date to Apply 5 October 2026", isDate: true },
  { icon: MapPin, label: "SaraCon, Auroville", isDate: false },
  { icon: Sparkles, label: "Free Tuition", isDate: false },
  {
    icon: Phone,
    label: "+91 96776 04467",
    isDate: false,
    href: "tel:+919677604467",
  },
];

export default function ApplyCTA() {
  return (
    <section id="apply" className="bg-[#1C1710] py-16 md:py-20 scroll-mt-20">
      <div className="max-w-310 mx-auto px-5 md:px-8 xl:px-0 text-center">
        <motion.p
          className="font-secondary text-[12px] tracking-widest uppercase text-[#F2B705] font-semibold mb-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Get Started
        </motion.p>
        <motion.h2
          className="font-primary text-white text-3xl md:text-4xl lg:text-5xl font-bold max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Take the first step toward your future
        </motion.h2>
        <motion.p
          className="font-secondary text-white/65 text-sm md:text-base mt-4 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Seats are limited to 20 participants. Apply today and reserve your
          spot in the Foundation Programme.
        </motion.p>

        {/* Info recap */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {info.map(({ icon: Icon, label, isDate, href }) => {
            const content = (
              <>
                <Icon className="w-4 h-4 text-[#F2B705]" strokeWidth={2.25} />
                {label}
              </>
            );
            const className = `font-secondary text-sm flex items-center gap-2 ${
              isDate ? "text-[#F2B705] font-bold" : "text-white/85"
            } ${href ? "underline underline-offset-2 hover:text-[#F2B705] transition-colors" : ""}`;

            return href ? (
              <a key={label} href={href} className={className}>
                {content}
              </a>
            ) : (
              <span key={label} className={className}>
                {content}
              </span>
            );
          })}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Link href="https://forms.gle/UQ3FRbqpk6Xqby5u9" target="_blank">
            <motion.span
              className="inline-flex items-center gap-2 font-secondary text-sm md:text-base text-[#1C1710] font-semibold px-8 py-3.5 rounded-full cursor-pointer bg-[#F2B705] shadow-[0_8px_24px_rgba(242,183,5,0.25)]"
              whileHover={{ scale: 1.05, backgroundColor: "#E2711D" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 340, damping: 22 }}
            >
              Apply Now →
            </motion.span>
          </Link>
          <Link href="mailto:bridge@yuvabe.com?subject=Foundation%20Programme">
            <motion.span
              className="inline-flex items-center gap-2 font-secondary text-sm md:text-base text-white font-semibold px-8 py-3.5 rounded-full cursor-pointer border border-white/25"
              whileHover={{ scale: 1.05, borderColor: "#F2B705" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 340, damping: 22 }}
            >
              <Mail className="w-4 h-4" /> Email Us
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
