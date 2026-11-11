import "./css/cta_section.css";
import Image from "next/image";

type CtaSectionProps = {
  onStartProject?: React.MouseEventHandler<HTMLAnchorElement>;
  onContactTeam?: React.MouseEventHandler<HTMLAnchorElement>;
  className?: string;
};

export default function CtaSection({
  onStartProject,
  onContactTeam,
  className = "",
}: CtaSectionProps) {
  return (
    <section className={`cta-section ${className}`.trim()}>
      <div className="cta-content">
        <a className="cta-eyebrow" href="#contact">
          Reach Us out
        </a>
        <h1>
          Don&apos;t Just Build A Website.
          <br />
          Build The System Behind
          <br />
          Your Business.
        </h1>
        <p className="cta-description">
          Whether you&apos;re launching a new digital presence, automating a
          business workflow, or building a complete software platform,
          we&apos;ll help you design the technology around your goals.
        </p>
        <div className="cta-actions">
          <a className="cta-button" href="/about" onClick={onContactTeam}>
            Talk to Our Team <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div className="cta-visual" aria-hidden="true">
        <Image src="/cta_art.png" alt="" width={500} height={691} priority />
      </div>
    </section>
  );
}
