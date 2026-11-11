import "./css/technology_section.css";
import Link from "next/link";
import type { ReactNode } from "react";

interface Solution {
  icon: ReactNode;
  title: string;
  description: string;
}

interface Principle {
  icon: ReactNode;
  title: string;
}

const solutions: Solution[] = [
  {
    icon: <i className="hgi hgi-stroke hgi-rounded hgi-artificial-intelligence-01" aria-hidden="true" />,
    title: "BUILD",
    description: "Build with purpose.",
  },
  {
    icon: <i className="hgi hgi-stroke hgi-rounded hgi-flowchart" aria-hidden="true" />,
    title: "SIMPLIFY",
    description: "Turn complexity into usable systems.",
  },
  {
    icon: <i className="hgi hgi-stroke hgi-rounded hgi-database-sync-01" aria-hidden="true" />,
    title: "SCALE",
    description: "Create foundations that can evolve with the business.",
  },
];

const principles: Principle[] = [
  {
    icon: <i className="hgi hgi-stroke hgi-rounded hgi-settings-02" aria-hidden="true" />,
    title: "Engineering First",
  },
  {
    icon: <i className="hgi hgi-stroke hgi-rounded hgi-money-bag-02" aria-hidden="true" />,
    title: "Business Focused",
  },
  {
    icon: <i className="hgi hgi-stroke hgi-rounded hgi-chart-increase" aria-hidden="true" />,
    title: "Built To Scale",
  },
  {
    icon: <i className="hgi hgi-stroke hgi-rounded hgi-time-04" aria-hidden="true" />,
    title: "Built To Last",
  },
];

export default function TechnologySections() {
  return (
    <div className="technology-sections">
      <section className="solution-section" aria-labelledby="solution-title">
        <Link className="technology-eyebrow" href="/philosophy">
          Stravon Philosophy <span aria-hidden="true">→</span>
        </Link>
        <h2 id="solution-title">Good Software Should Solve Real Problems.</h2>

        <div className="solution-list">
          {solutions.map(({ icon, title, description }) => (
            <article className="solution-card" key={title}>
              <div className="solution-card__copy">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <div className="solution-card__icon">{icon}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="purpose-section" aria-labelledby="purpose-title">
        <Link className="technology-eyebrow" href="/about">
          Why Stravon <span aria-hidden="true">→</span>
        </Link>
        <h2 id="purpose-title">Technology With Purpose</h2>

        <div className="principles-grid">
          {principles.map(({ icon, title }, index) => (
            <article className="principle-card" key={title}>
              <span className="principle-card__number">{String(index + 1).padStart(2, "0")}</span>
              <div className="principle-card__bottom">
                <span className="principle-card__icon">{icon}</span>
                <h3>{title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
