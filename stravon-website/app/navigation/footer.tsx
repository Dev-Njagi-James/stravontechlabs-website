import "./css/footer.css";
import Image from "next/image";


const iconClasses = {
  email: "hgi-mail-at-sign-01",
  pricing: "hgi-dollar-circle",
  phone: "hgi-call-ringing-02",
  tiktok: "hgi-tiktok",
  facebook: "hgi-facebook-01",
  whatsapp: "hgi-whatsapp-business",
  instagram: "hgi-instagram",
} as const;

type IconName = keyof typeof iconClasses;

type FooterLink = {
  label: string;
  href: string;
  icon?: IconName;
};

type FooterGroup = {
  title: string;
  links: FooterLink[];
};

type SocialLink = {
  label: string;
  href: string;
  icon: IconName;
};

type FooterProps = {
  brand?: string;
  email?: string;
  year?: number;
  groups?: FooterGroup[];
  socialLinks?: SocialLink[];
  logo?: string;
  className?: string;
};

const Icon = ({ name }: { name: IconName }) => (
  <i
    className={`hgi hgi-stroke hgi-rounded ${iconClasses[name]}`}
    aria-hidden="true"
  />
);

const defaultGroups: FooterGroup[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Services", href: "/" },
      { label: "Pricing", href: "#pricing" },
      { label: "About", href: "#about" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { label: "midnightalpha031@gmail.com", href: "mailto:midnightalpha031@gmail.com", icon: "email" },
      { label: "Pricing", href: "#pricing", icon: "pricing" },
      { label: "+254 115 338 035", href: "tel:+2547115338036", icon: "phone" },
    ],
  },
  {
    title: "Docs",
    links: [
      { label: "Terms & Conditions", href: "#terms" },
      { label: "Privacy", href: "#privacy" },
    ],
  },
];

export default function Footer({
  brand = "Stravon Tech Labs",
  email = "stravontechlabs@gmail.com",
  year = new Date().getFullYear(),
  groups = defaultGroups,
  socialLinks = [
    { label: "TikTok", href: "#", icon: "tiktok" },
    { label: "Facebook", href: "#", icon: "facebook" },
    { label: "WhatsApp", href: "#", icon: "whatsapp" },
    { label: "Instagram", href: "#", icon: "instagram" },
  ],
  logo = "/logo.png",
  className = "",
}: FooterProps) {
  const renderedGroups: FooterGroup[] =
    groups === defaultGroups
      ? defaultGroups.map((group) =>
          group.title === "Contact Us"
            ? {
                ...group,
                links: group.links.map((link) =>
                  link.icon === "email"
                    ? { ...link, label: email, href: `mailto:${email}` }
                    : link
                ),
              }
            : group
        )
      : groups;

  return (
    <footer className={`site-footer ${className}`.trim()}>
      <div className="footer-main">
        <div className="footer-brand-column">
          <a className="footer-brand" href="#top" aria-label={`${brand} home`}>
            {logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <Image
                className="footer-logo"
                src={logo}
                alt=""
                width={39}
                height={39}
              />
            ) : (
              <span
                className="footer-logo footer-logo-placeholder"
                aria-hidden="true">
                <span>ST</span>
                <small>STRAVON</small>
              </span>
            )}
            <span>{brand}</span>
          </a>
          <nav className="footer-socials" aria-label="Social media">
            {socialLinks.map((item) => (
              <a key={item.label} href={item.href} aria-label={item.label}>
                <Icon name={item.icon} />
              </a>
            ))}
          </nav>
        </div>

        {renderedGroups.map((group) => (
          <nav
            className="footer-link-group"
            key={group.title}
            aria-label={group.title}>
            <h2>{group.title}</h2>
            <ul>
              {group.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>
                    {link.icon && <Icon name={link.icon} />}
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="footer-signoff">
        <span>Stravon © {year}</span>
      </div>
      <div className="footer-legal">
        <a href="#terms">Terms &amp; Conditions</a>
        <a href="#documentation">Documentation</a>
        <a href="#privacy">Privacy Policy</a>
      </div>
    </footer>
  );
}