import Image from "next/image";
import Link from "next/link";
import "./css/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-heading">We Build Whats Next</h1>
          <p className="hero-copy">
            We design and engineer software, digital experiences, and
            infrastructure that help businesses operate, evolve, and grow.
          </p>
          <Link href="/about" className="hero-cta">
            Explore Our Work
            <i className="hgi hgi-stroke hgi-rounded hgi-circle-arrow-down-right"></i>
          </Link>
        </div>

        <div className="hero-image-wrap">
          <Image
            src="/about_hero.png"
            alt="Stravon Tech Labs product dashboard shown on laptop and mobile"
            width={612}
            height={392}
            className="hero-image"
            priority
          />
        </div>
      </div>
    </section>
  );
}