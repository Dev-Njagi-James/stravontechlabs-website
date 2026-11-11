import "./css/story.css";
import Link from "next/link";
import type { ReactNode } from "react";

interface StoryCapability {
  icon: ReactNode;
  title: string;
  items: string[];
}

const capabilities: StoryCapability[] = [
  {
    icon: <i className="hgi hgi-stroke hgi-rounded hgi-user-id-verification" aria-hidden="true" />,
    title: "Software Development",
    items: ["Web Applications", "Business Systems", "SAAS", "API’s"],
  },
  {
    icon: <i className="hgi hgi-stroke hgi-rounded hgi-binary-code" aria-hidden="true" />,
    title: "Digital Experiences",
    items: ["Websites", "UI & UX", "Digital Products", "Branding"],
  },
  {
    icon: <i className="hgi hgi-stroke hgi-rounded hgi-building-03" aria-hidden="true" />,
    title: "Infrastructure & Services",
    items: ["Storage", "Streaming", "Backend", "Infrastructure"],
  },
];

export default function StorySection() {
  return (
    <div className="story-section">
      <section className="story-vision" aria-labelledby="story-vision-title">
        <Link className="story-eyebrow" href="/vision">
          Our Vision <span aria-hidden="true">→</span>
        </Link>
        <h2 id="story-vision-title">Building The Digital Foundation For What Is Next</h2>
        <p>
          We&apos;re Building Stravon Into A Technology Ecosystem Capable Of Creating, Powering, Supporting Digital Products At Scale.
        </p>
      </section>

      <section className="story-about" aria-labelledby="story-about-title">
        <Link className="story-eyebrow" href="/about">
          Who Is Stravon <span aria-hidden="true">→</span>
        </Link>
        <h2 id="story-about-title">More Than A Development Company.</h2>
        <p>
          Stravon Is A Technology Company Focused On Building Practical, Scalable Digital Systems For Businesses And Our Own Growing Ecosystem.
          <br />
          We Work Across Software Development, Digital Products, Infrastructure, And Technology Services.
        </p>
      </section>

      <section className="story-capabilities" aria-labelledby="story-capabilities-title">
        <Link className="story-eyebrow" href="/services">
          What We Do <span aria-hidden="true">→</span>
        </Link>
        <h2 id="story-capabilities-title">Our Capabilities</h2>
        <div className="story-capabilities__grid">
          {capabilities.map(({ icon, title, items }) => (
            <article className="story-capability-card" key={title}>
              <div className="story-capability-card__heading">
                <h3>{title}</h3>
                <span className="story-capability-card__icon">{icon}</span>
              </div>
              <ul>
                {items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
