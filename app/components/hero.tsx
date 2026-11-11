import Image from "next/image";
import Link from "next/link";
import "./css/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-heading">
            Building Software That Works For Your Business
          </h1>
          <p className="hero-copy">
            We engineer scalable software that streamlines operations,
            elevates customer experiences, and enables growth — built around
            your business and designed to evolve with it.
          </p>
          <Link href="/about" className="hero-cta">
            View Success Stories
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>
        </div>

        <div className="hero-image-wrap">
          <Image
            src="/heroV3.png"
            alt="Stravon Tech Labs product dashboard shown on laptop and mobile"
            width={640}
            height={420}
            className="hero-image"
            priority
          />
        </div>
      </div>
    </section>
  );
}