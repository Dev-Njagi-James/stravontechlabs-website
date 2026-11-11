import "./css/solutions.css";
import Image from "next/image";
import Link from "next/link";

const solutions: Solution[] = [
  {
    title: "Business Management Systems",
    description:
      "Centralize your operations with custom-built management platforms designed to improve efficiency and decision-making.",
    image: "/system_image.jpg",
    alt: "Business management dashboard preview",
    href: "/solutions/business-management",
  },
  {
    title: "Revenue & Payment Solutions",
    description:
      "Accept payments confidently with secure and reliable payment integrations designed for modern African businesses.",
    image: "/revenue.jpg",
    alt: "Revenue and payment solutions preview",
    href: "/solutions/revenue-payments",
  },
  {
    title: "Client & Customer Portals",
    description:
      "Create seamless digital experiences for your customers, employees, and partners.",
    image: "/portals.jpg",
    alt: "Client and customer portal preview",
    href: "/solutions/customer-portals",
  },
  {
    title: "SaaS Platforms",
    description:
      "Launch scalable software platforms built for subscription-based businesses, digital products, and client-focused services.",
    image: "/saas_systems.jpg",
    alt: "SaaS platform product listing preview",
    href: "/solutions/saas-platforms",
  },
  {
    title: "Custom Automation Solutions",
    description:
      "Reduce repetitive work and improve productivity through intelligent automation.",
    image: "/automation.jpg",
    alt: "Custom automation solution preview",
    href: "/solutions/custom-automation",
  },
];

interface Solution {
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
}

function SolutionCard({ title, description, image, alt, href }: Solution) {
  return (
    <article className="solution-card">
      <div className="solution-card__preview">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
        />
      </div>
      <div className="solution-card__content">
        <h2>{title}</h2>
        <p>{description}</p>
        <Link href={href}>
          Learn More <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

export default function App() {
  return (
    <main className="page-shell">
      <section className="solutions" aria-labelledby="solutions-heading">
        <a className="eyebrow-link" href="#solutions-heading">
          What We Build <span aria-hidden="true">→</span>
        </a>
        <h1 id="solutions-heading">
          Software solutions tailored to how your business operates.
        </h1>
        <p className="intro">
          Every business is different. That&apos;s why we don&apos;t sell templates or
          one-size-fits-all systems. We build software around the goals,
          workflows, and challenges that matter most to your organization.
        </p>
        <div className="solutions-grid">
          {solutions.map((solution) => (
            <SolutionCard key={solution.title} {...solution} />
          ))}
        </div>
      </section>
    </main>
  );
}
