"use client";

import Link from "next/link";
import "./css/in-house.css";

export default function InHouseProjects() {
  return (
    <section className="ihp">
      <h2 className="ihp-eyebrow">Our In-house Projects</h2>

      <div className="ihp-card">
        <h3 className="ihp-title">
          We Built Our Own Infrastructure. You Get the Benefit.
        </h3>
        <p className="ihp-subtitle">
          S.C.A.L.E. — Stravon Central Access and Logging and Expense-Tracking
        </p>

        <div className="ihp-body">
          <p>Great software isn&apos;t just what users see. It&apos;s everything working behind the scenes.</p>
          <p>
            That&apos;s why we&apos;re building{" "}
            <strong>S.C.A.L.E. — Stravon Central Access and Logging and Expense-Tracking</strong> —
            our in-house technology platform{" "}
            <strong>powering 12+ projects and our own SaaS ecosystem.</strong>
          </p>
          <p>
            From image and video storage and streaming to automated pricing, invoicing,
            access management, logging, and operational data, S.C.A.L.E. gives our systems
            the infrastructure they need to work reliably and puts the information we need
            at our fingertips.
          </p>
          <p>
            We build our own infrastructure because we believe great software deserves a
            strong engineering foundation. Every system we build for ourselves gives us
            another capability, another lesson, and another standard we bring to our clients.
          </p>
        </div>

        <p className="ihp-callout">
          We don&apos;t ask our clients to trust what we wouldn&apos;t trust ourselves to build!.
        </p>
        <p className="ihp-callout">
          If we go this far to build for ourselves, imagine what we&apos;ll build for you?.
        </p>

        <div className="ihp-actions">
          <Link href="/contact" className="ihp-btn">
            Start Your Project
            <ArrowRight />
          </Link>
          <Link href="/projects/scale" className="ihp-btn">
            Learn More About the Project
            <ArrowRight />
          </Link>
        </div>

        <h4 className="ihp-subheading">Want to see what&apos;s under the hood?</h4>
        <p className="ihp-repo-text">
          Explore the repositories behind S.C.A.L.E. and see how we&apos;re building the
          platform from the ground up.
        </p>

        <div className="ihp-repo-actions">
          <Link
            href="https://github.com/stravon-tech/scale-sdk"
            target="_blank"
            rel="noopener noreferrer"
            className="ihp-repo-btn"
          >
            <GitHubIcon />
            View S.C.A.L.E. SDK
            <ArrowUpRight />
          </Link>
          <Link
            href="https://github.com/stravon-tech/scale-backend"
            target="_blank"
            rel="noopener noreferrer"
            className="ihp-repo-btn"
          >
            <GitHubIcon />
            View Backend Platform
            <ArrowUpRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.82 1.18 3.08 0 4.41-2.7 5.38-5.27 5.67.42.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
    </svg>
  );
}