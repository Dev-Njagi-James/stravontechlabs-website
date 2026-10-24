import "./css/client_stories.css";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
}

interface Testimonial {
  name: string;
  initials: string;
  quote: string;
}

const projects: Project[] = [
  {
    title: "Pedu Rentals",
    description:
      "Rental marketplace connecting tenants and property owners. Users can list properties, tenants can browse listings and contact renters directly. Built with Next.js and React, backed by PostgreSQL.",
    image: "/pedu.png",
    alt: "Pedu Rentals website preview",
    href: "/projects/pedu-rentals",
  },
  {
    title: "GSSMS — Stock Management System",
    description:
      "Stock management system that tracks inventory records and automates all key business functions. Built with Next.js and React, backed by PostgreSQL.",
    image: "/GGSM.png",
    alt: "GSSMS stock management preview",
    href: "/projects/gssms",
  },
  {
    title: "ROMIS — Repository and Order Management System",
    description:
      "Rental marketplace connecting tenants and property owners. Users can list properties, tenants can browse listings and contact renters directly. Built with Next.js and React, backed by PostgreSQL.",
    image: "/ROMIS.jpg",
    alt: "ROMIS preview",
    href: "/projects/romis",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "DataCent View Inc",
    initials: "D",
    quote:
      "“Stravon built a platform that seamlessly grows alongside our expanding operations without requiring a single expensive rebuild.”",
  },
  {
    name: "Pedu Rentals",
    initials: "P",
    quote:
      "“Their transparent pricing model offers exceptional project scopes and predictable maintenance plans with zero surprises.”",
  },
  {
    name: "GreenScape",
    initials: "G",
    quote:
      "“With modern authentication and secure data handling built right into the foundation, we trust them completely with our industry data.”",
  },
  {
    name: "Terravu Travellers",
    initials: "T",
    quote:
      "“They don’t just launch a project and leave—they provide ongoing long-term support that maintains and improves our systems over time.”",
  },
];

function ProjectCard({ title, description, image, alt, href }: Project) {
  return (
    <article className="project-card">
      <div className="project-card__preview">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 768px) 25vw, 100vw"
        />
      </div>
      <div className="project-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={href}>
          Learn More <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

function TestimonialCard({ name, initials, quote }: Testimonial) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-card__heading">
        <span className="testimonial-card__avatar" aria-hidden="true">
          {initials}
        </span>
        <h3>{name}</h3>
      </div>
      <p>{quote}</p>
    </article>
  );
}

export default function ClientStories() {
  return (
    <div className="stories-shell">
      <section className="stories" aria-labelledby="stories-title">
        <Link className="stories__eyebrow" href="/projects">
          Explore our client success stories <span aria-hidden="true">→</span>
        </Link>
        <h2 id="stories-title" className="stories__title">
          Software built to match your unique business workflows.
        </h2>
        <p className="stories__intro">
          Rigid, out-of-the-box software rarely gives businesses exactly what
          they need. We collaborate closely with you to understand your
          workflows, hurdles, and targets. Then, we deliver a built-from-scratch
          system that simplifies your work and empowers your team.
        </p>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="testimonials" aria-labelledby="testimonials-title">
        <h2 id="testimonials-title" className="stories__title">
          What Our Clients Say
        </h2>
        <p className="stories__intro">
          Hear from the businesses that have scaled, secured, and optimized
          their operations using our modern technology solutions.
        </p>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </section>
    </div>
  );
}
