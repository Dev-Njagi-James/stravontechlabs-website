"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./css/nav.css";

const NAV_LINKS = [
  { label: "Services", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
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
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`navbar-link ${isActive ? "active" : ""}`}>
                {label}
              </Link>
            );
          })}
        </nav>

        <Link href="/contact" className="navbar-cta">
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
        </Link>

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
        {NAV_LINKS.map(({ label, href }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`navbar-link ${isActive ? "active" : ""}`}>
              {label}
            </Link>
          );
        })}

        <Link
          href="/contact"
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
        </Link>
      </nav>
    </header>
  );
}
