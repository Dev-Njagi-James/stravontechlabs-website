"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./css/nav.css";

/** Contact number in international format, digits only (no + or spaces). */
const CONTACT_NUMBER = "254105140326";

const whatsappLink = (message: string): string =>
  `https://wa.me/${CONTACT_NUMBER}?text=${encodeURIComponent(message)}`;

const CONSULTATION_URL = whatsappLink(
  "Hello Stravon Tech Labs, I'd like to book a consultation.",
);

interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

const NAV_LINKS: NavLink[] = [

  { label: "Services", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
    {
    label: "Contact",
    href: whatsappLink("Hello Stravon Tech Labs, I'd like to get in touch."),
    external: true,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          <span className="navbar-logo-image">
            <Image
              src="/logo.png"
              alt="Stravon Tech Labs logo"
              width={36}
              height={36}
              className="navbar-logo-img"
            />
          </span>
          <span className="navbar-logo-text">Stravon Tech Labs</span>
        </Link>

        <nav className="navbar-links">
 {NAV_LINKS.map(({ label, href, external }) => {
           const className = `navbar-link ${pathname === href ? "active" : ""}`;
            return external ? (
              <a
                key={label}
                href={href}
               target="_blank"
               rel="noopener noreferrer"
                className={className}>
                {label}
              </a>
            ) : (
              <Link key={label} href={href} className={className}>
                {label}
              </Link>
            );
          })}
        </nav>

                <a
          href={CONSULTATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-cta">
          Book Consultation
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
         </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(true)}
          className="navbar-menu-button">
          <i className="hgi hgi-stroke hgi-rounded hgi-menu-11" />
        </button>
      </div>

      {/* Backdrop */}
      <div
        className={`navbar-backdrop ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <nav className={`navbar-drawer ${isOpen ? "open" : ""}`}>
        <div className="navbar-drawer-header">
          <span className="navbar-logo-image">
            <Image
              src="/logo.png"
              alt="Stravon Tech Labs logo"
              width={36}
              height={36}
              className="navbar-logo-img"
            />
          </span>

          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="navbar-drawer-close">
            <i className="hgi hgi-stroke hgi-rounded hgi-cancel-01" />
          </button>
        </div>
        {NAV_LINKS.map(({ label, href, external }) => {
          const className = `navbar-link ${pathname === href ? "active" : ""}`;
          return external ? (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className={className}>
              {label}
            </a>
          ) : (
            <Link
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              className={className}>
              {label}
            </Link>
          );
        })}

        <a
          href={CONSULTATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          className="navbar-cta navbar-mobile-cta">
          Book Consultation
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
       </a>
      </nav>
    </header>
  );
}
