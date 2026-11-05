"use client";

import { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FiCheck, FiCopy, FiMail, FiPhone } from "react-icons/fi";
import type { IconType } from "react-icons";

const contactLinks = [
  { href: "mailto:bridge@yuvabe.com", label: "bridge@yuvabe.com", copy: "bridge@yuvabe.com", Icon: FiMail },
  { href: "tel:+919677604467", label: "+91 96776 04467", copy: "+919677604467", Icon: FiPhone },
];

const socialLinks = [
  { href: "https://www.instagram.com/yuvabe.auroville", label: "@yuvabe.auroville", Icon: FaInstagram },
  { href: "https://www.facebook.com/yuvabe.education", label: "Yuvabe Education", Icon: FaFacebookF },
  { href: "https://www.linkedin.com/company/yuvabeeducation/", label: "Yuvabe Education", Icon: FaLinkedinIn },
  { href: "https://www.youtube.com/@yuvabe.auroville", label: "Yuvabe Auroville", Icon: FaYoutube },
];

function IconLink({ href, label, Icon }: { href: string; label: string; Icon: IconType }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group/link flex items-center gap-3 font-primary text-[15px] font-medium text-[#121212] hover:text-[#121212]"
    >
      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#121212] transition duration-300 group-hover/link:-rotate-12 group-hover/link:scale-110 group-active/link:scale-95">
        <Icon className="h-[17px] w-[17px] text-[#F7C028]" />
      </span>
      <span className="bg-gradient-to-r from-[#121212] to-[#121212] bg-[length:0%_1.5px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover/link:bg-[length:100%_1.5px]">
        {label}
      </span>
      {external && (
        <span className="-translate-x-1 opacity-0 transition duration-300 group-hover/link:translate-x-0 group-hover/link:opacity-100">
          ↗
        </span>
      )}
    </a>
  );
}

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <button
      type="button"
      aria-label={copied ? `${label} copied` : `Copy ${label}`}
      title={copied ? "Copied!" : "Copy"}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setCopied(true);
          clearTimeout(timer.current);
          timer.current = setTimeout(() => setCopied(false), 1500);
        } catch {
          /* clipboard unavailable */
        }
      }}
      className={`flex h-7 items-center gap-1 rounded-full px-2 font-primary text-[11px] font-semibold transition duration-200 active:scale-90 ${
        copied ? "bg-[#121212] text-[#F7C028]" : "text-[#121212]/60 hover:bg-[#121212]/10 hover:text-[#121212]"
      }`}
    >
      {copied ? <FiCheck className="h-3.5 w-3.5" /> : <FiCopy className="h-3.5 w-3.5" />}
      <span aria-hidden>{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}

export default function ContactLinks() {
  return (
    <div className="grid gap-7 sm:grid-cols-2" data-ve="stagger">
      <div className="flex flex-col gap-3.5">
        <span className="font-primary text-xs font-bold tracking-[0.14em]">CONTACT US</span>
        {contactLinks.map((l) => (
          <div key={l.href} data-ve-item className="flex flex-wrap items-center gap-2">
            <IconLink href={l.href} label={l.label} Icon={l.Icon} />
            <CopyButton value={l.copy} label={l.label} />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3.5">
        <span className="font-primary text-xs font-bold tracking-[0.14em]">FOLLOW US</span>
        {socialLinks.map((l) => (
          <div key={l.href} data-ve-item>
            <IconLink {...l} />
          </div>
        ))}
      </div>
    </div>
  );
}
