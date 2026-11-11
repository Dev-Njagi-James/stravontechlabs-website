import "./css/points.css";
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
      <i className="hgi hgi-stroke hgi-rounded hgi-mobile-programming-01"></i>
    ),
    title: "Software",
    description:
      "Building applications, APIs, SaaS platforms, and business systems.",
  },
  {
    icon: <i className="hgi hgi-stroke hgi-rounded hgi-binary-code"></i>,
    title: "Digital",
    description: "Creating websites, interfaces, and digital experiences.",
  },
  {
    icon: (
      <i className="hgi hgi-stroke hgi-rounded hgi-three-d-view"></i>
    ),
    title: "Infrastructure",
    description: "Building the technology that supports the systems we create.",
  },
];

export default function Points() {
  return (
    <section className="why-choose" aria-labelledby="why-choose-title">
      <Link className="eyebrow-link" href="/about">
        Why Stravon Is <span aria-hidden="true">→</span>
      </Link>
      <h2 id="why-choose-title">More Than a Development Company</h2>
      <p className="why-choose__intro">
        Stravon is a technology company focused on building practical, scalable digital systems for businesses and our own growing ecosystem.
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
