import "./css/solutions.css";
import Link from "next/link";
import type { ReactNode } from "react";

interface Reason {
  icon: ReactNode;
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    icon: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="M9 7v24h25" />
        <path d="M12 26c8 0 13-5 16-14" />
        <path d="m23 11 5 1 1-5" />
      </svg>
    ),
    title: "Scalable Architecture",
    description:
      "Built to grow alongside your business without requiring expensive rebuilds.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="20" cy="20" r="14" />
        <path d="M20 11v18" />
        <path d="M25 15c-1-2-3-3-5-3s-5 1-5 3.5 3 3 5 3.5 5 1 5 3.5-2 3.5-5 3.5-4-1-5-3" />
      </svg>
    ),
    title: "Transparent Pricing",
    description:
      "Clear project scopes and maintenance plans with no hidden surprises.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="M20 5 32 10v9c0 8-5 13-12 16C13 32 8 27 8 19v-9z" />
        <path d="m14 20 4 4 8-8" />
      </svg>
    ),
    title: "Secure by Design",
    description:
      "Modern authentication, secure data handling, and industry best practices are built into every project.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="20" cy="20" r="14" />
        <path d="M20 11v9l6 4" />
      </svg>
    ),
    title: "Long-Term Support",
    description:
      "We don't simply deliver projects—we help businesses maintain and improve them over time.",
  },
];

export default function WhyChooseStravon() {
  return (
    <section className="why-choose" aria-labelledby="why-choose-title">
      <Link className="eyebrow-link" href="/about">
        Why Stravon <span aria-hidden="true">→</span>
      </Link>
      <h2 id="why-choose-title">Why Businesses Choose Stravon?</h2>
      <p className="why-choose__intro">
        Modern technology should simplify your business, not complicate it.
        Every solution we build is designed with scalability, security, and
        long-term maintainability in mind.
      </p>

      <div className="reasons-grid">
        {reasons.map(({ icon, title, description }) => (
          <article className="reason-card" key={title}>
            <div className="reason-card__icon">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
