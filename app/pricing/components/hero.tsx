import "./css/hero.css";
import Image from "next/image";


type ScreenId = "crm" | "operations" | "analytics";

type Screen = {
  id: ScreenId;
  label: string;
  alt?: string;
  src?: string;
  type?: "image" | "video";
  poster?: string;
};

const demoSystems: Screen[] = [
  {
    id: "crm",
    label: "Client CRM",
    alt: "Preview of a client relationship management system",
  },
  {
    id: "operations",
    label: "Operations platform",
    alt: "Preview of an operations management system",
  },
  {
    id: "analytics",
    label: "Business analytics",
    alt: "Preview of an analytics management system",
  },
];



function PlaceholderScreen({ id }: { id: ScreenId }) {
  if (id === "crm") {
    return (
      <div className="stravon-screen stravon-screen--crm" aria-hidden="true">
        <div className="stravon-screen__title">
          Customer workspace <span>CRM</span>
        </div>
        {["#d9c875", "#c7d0d4", "#cbd8c8"].map((color, index) => (
          <div className="stravon-screen__person" key={index}>
            <i style={{ backgroundColor: color }} />
            <div>
              <b />
              <small />
            </div>
            <em>{index === 1 ? "New" : "Active"}</em>
          </div>
        ))}
      </div>
    );
  }

  if (id === "analytics") {
    return (
      <div
        className="stravon-screen stravon-screen--analytics"
        aria-hidden="true">
        <div className="stravon-screen__title">
          Performance insights <span>ANALYTICS</span>
        </div>
        <div className="stravon-screen__kpis">
          <b>
            $48.2k<small>Monthly revenue</small>
          </b>
          <b>
            +18.4%<small>Conversion rate</small>
          </b>
        </div>
        <div className="stravon-screen__bars">
          {[34, 47, 70, 56, 86, 66].map((height, index) => (
            <i key={index} style={{ height: `${height}%` }} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="stravon-screen stravon-screen--operations"
      aria-hidden="true">
      <div className="stravon-screen__title">
        <b>
          <i />
          Operations hub
        </b>
        <span>LIVE VIEW</span>
      </div>
      <div className="stravon-screen__metrics">
        <b>
          24<small>Open projects</small>
        </b>
        <b>
          86%<small>Tasks complete</small>
        </b>
        <b>
          18<small>Team members</small>
        </b>
      </div>
      <div className="stravon-screen__lower">
        <div className="stravon-screen__chart">
          <small>Project activity</small>
          <svg viewBox="0 0 180 45" preserveAspectRatio="none">
            <path
              d="M0 36 C22 30 30 35 48 26 S73 32 90 19 S117 24 136 14 S161 18 180 5"
              fill="none"
              stroke="#a88b18"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="stravon-screen__tasks">
          <small>Today’s workflow</small>
          <i>✓ New order</i>
          <i>✓ Client review</i>
          <i>□ Send report</i>
        </div>
      </div>
    </div>
  );
}

function SystemCard({ screen }: { screen: Screen }) {
  const video = screen.type === "video";
  return (
    <article
      className={`stravon-system-card stravon-system-card--${screen.id}`}>
      <div className="stravon-system-card__chrome">
        <i />
        <i />
        <i />
        <span>{screen.label}</span>
        {!screen.src && (
          <span className="stravon-system-card__play" aria-hidden="true">
            ▶
          </span>
        )}
      </div>
      <div className="stravon-system-card__content">
        {screen.src ? (
          video ? (
            <video
              src={screen.src}
              poster={screen.poster}
              controls
              playsInline
              preload="metadata"
              aria-label={screen.alt || screen.label}
            />
          ) : (
            <Image
  src={screen.src}
  alt={screen.alt || screen.label}
  fill
  sizes="(max-width: 768px) 100vw, 33vw"
  priority
/>
          )
        ) : (
          <PlaceholderScreen id={screen.id} />
        )}
      </div>
    </article>
  );
}

/**
 * Hero-only section. Supply `screens` to replace the three illustrative cards
 * with system screenshots or videos. Example: { id: "crm", src: "/images/crm.webp", alt: "CRM dashboard" }.
 */
export default function StravonHero({
  screens = [],
}: {
  screens?: Partial<Screen>[];
}) {
  const displayScreens: Screen[] = demoSystems.map((demo) => {
    const override = screens.find((screen) => screen.id === demo.id);
    return { ...demo, ...override, id: demo.id };
  });

  return (
    <section className="stravon-landing" aria-label="Stravon Tech Labs hero">
      <div className="stravon-hero">
        <div className="stravon-hero__copy">
          <p className="stravon-eyebrow">
            Connected software, built around you
          </p>
          <h1>We Build Digital Systems That Work for Your Business.</h1>
          <p className="stravon-hero__description">
            From focused business websites to fully integrated software systems,
            we design and build digital products around the way your business
            actually operates.
          </p>
        </div>

        <div className="stravon-visual" aria-label="Connected system previews">
          <span
            className="stravon-visual__connector stravon-visual__connector--one"
            aria-hidden="true"
          />
          <span
            className="stravon-visual__connector stravon-visual__connector--two"
            aria-hidden="true"
          />
          <span className="stravon-visual__badge">
            <i />
            Connected systems
          </span>
          {displayScreens.map((screen) => (
            <SystemCard screen={screen} key={screen.id} />
          ))}
          <p className="stravon-visual__caption">
            One connected view of your business
          </p>
        </div>
      </div>
    </section>
  );
}
