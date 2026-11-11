"use client";

import { useEffect, useRef, useState } from "react";
import { STRAVON_PRODUCTS } from "./products";
import type {
  Fact,
  InfoBlock,
  PackageCategory,
  Price,
  ProductPackage,
} from "./types";
import styles from "./css/StravonProducts.module.css";

const CARD_FEATURE_COUNT = 4;
/** WhatsApp number in international format, digits only (no + or spaces). */
const WHATSAPP_NUMBER = "254105140326";

const num = (n: number) => n.toLocaleString("en-US");

const formatPrice = (price: Price): string => {
  switch (price.type) {
    case "range":
      return `KES ${num(price.min)}–${num(price.max)}`;
    case "fixed":
      return `KES ${num(price.amount)}/${price.period}`;
    case "once":
      return `KES ${num(price.amount)}`;
    default:
      return price.label;
  }
};

const whatsappLink = (pkg: ProductPackage, categoryLabel: string): string => {
  const message =
    `Hello Stravon Tech Labs, I'm interested in the ${pkg.name} package ` +
    `(${categoryLabel}, ${formatPrice(pkg.price)}). Could you share more details?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

/** Total row for the spec table. Null means no total row. */
const formatTotal = (pkg: ProductPackage): string | null => {
  if (pkg.price.type === "range") {
    return `KES ${num(pkg.price.min)}–${num(pkg.price.max)}`;
  }
  if (pkg.price.type === "quote" && pkg.discovery) {
    return "Quoted after paid discovery session";
  }
    if (pkg.price.type === "once") {
    return `KES ${num(pkg.price.amount)}`;
  }
  return null;
};

interface AnnualInfo {
  amount: number;
  saved: number;
  monthsFree: number;
}

const getAnnual = (pkg: ProductPackage): AnnualInfo | null => {
  if (
    pkg.price.type !== "fixed" ||
    pkg.price.period !== "mo" ||
    !pkg.annualPrice
  ) {
    return null;
  }
  const saved = pkg.price.amount * 12 - pkg.annualPrice;
  return {
    amount: pkg.annualPrice,
    saved,
    monthsFree: Math.round(saved / pkg.price.amount),
  };
};

const freeMonthsLabel = (n: number) =>
  `${n} month${n === 1 ? "" : "s"} free`;

const annualSummary = (a: AnnualInfo): string =>
  `or KES ${num(a.amount)}/yr` +
  (a.monthsFree >= 1 ? ` · ${freeMonthsLabel(a.monthsFree)}` : "");

const getPlanRows = (pkg: ProductPackage, annual: AnnualInfo | null): Fact[] => {
  const rows: Fact[] = [...(pkg.facts ?? [])];
  if (pkg.price.type === "fixed") {
    rows.push({
      label: pkg.price.period === "mo" ? "Monthly price" : "Annual price",
      value: `KES ${num(pkg.price.amount)}`,
    });
  }
  if (annual) {
    rows.push({
      label: "Annual price",
      value: `KES ${num(annual.amount)}`,
      note:
        annual.saved > 0
          ? `Saves KES ${num(annual.saved)}` +
            (annual.monthsFree >= 1
              ? ` (${freeMonthsLabel(annual.monthsFree)})`
              : "")
          : undefined,
    });
  }
  return rows;
};

interface PackageModalProps {
  pkg: ProductPackage;
  categoryLabel: string;
  onClose: () => void;
}

function PackageModal({ pkg, categoryLabel, onClose }: PackageModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const remaining = pkg.features.slice(CARD_FEATURE_COUNT);
  const total = formatTotal(pkg);
  const planRows = getPlanRows(pkg, getAnnual(pkg));

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!dialog.open) dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const titleId = `${pkg.id}-modal-title`;

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}>
      <div className={styles.dialogInner}>
        <header className={styles.dialogHeader}>
          <div>
            <p className={styles.dialogEyebrow}>{categoryLabel}</p>
            <h3 id={titleId} className={styles.dialogTitle}>
              {pkg.name}
            </h3>
            <p className={styles.dialogPrice}>{formatPrice(pkg.price)}</p>
          </div>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close details">
            ×
          </button>
        </header>

        <section className={styles.dialogSection}>
          <h4>Target client</h4>
          <p>{pkg.targetClient}</p>
        </section>

        {planRows.length > 0 && (
          <section className={styles.dialogSection}>
            <h4>Plan details</h4>
            <dl className={styles.facts}>
              {planRows.map((row) => (
                <div key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>
                    {row.value}
                    {row.note && (
                      <span className={styles.factNote}>{row.note}</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {pkg.specs && pkg.specs.length > 0 && (
          <section className={styles.dialogSection}>
            <h4>Specification</h4>
            <div className={styles.tableWrap}>
              <table className={styles.specTable}>
                <thead>
                  <tr>
                    <th scope="col">Factor</th>
                    <th scope="col">Specification</th>
                    <th scope="col">Cost (KES)</th>
                  </tr>
                </thead>
                <tbody>
                  {pkg.specs.map((row) => (
                    <tr key={row.factor}>
                      <th scope="row">{row.factor}</th>
                      <td>{row.specification}</td>
                      <td>{row.cost}</td>
                    </tr>
                  ))}
                </tbody>
                {total && (
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td colSpan={2}>{total}</td>
                    </tr>
                  </tfoot>
                )}
              </table>
            </div>
          </section>
        )}

        {remaining.length > 0 && (
          <section className={styles.dialogSection}>
            <h4>Also included</h4>
            <ul className={styles.dialogList}>
              {remaining.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>
        )}

        {(pkg.postLaunchSupport || pkg.maintenance) && (
          <section className={styles.dialogSection}>
            <h4>Support and maintenance</h4>
            <dl className={styles.facts}>
              {pkg.postLaunchSupport && (
                <div>
                  <dt>Post-launch support</dt>
                  <dd>{pkg.postLaunchSupport}</dd>
                </div>
              )}
              {pkg.maintenance && (
                <div>
                  <dt>Monthly maintenance</dt>
                  <dd>
                    KES {num(pkg.maintenance.monthly)}
                    {pkg.maintenance.isBase ? "+" : ""}/mo
                    {pkg.maintenance.note && (
                      <span className={styles.factNote}>
                        {pkg.maintenance.note}
                      </span>
                    )}
                  </dd>
                </div>
              )}
            </dl>
          </section>
        )}

        {pkg.discovery && (
          <section className={styles.dialogSection}>
            <h4>Discovery session</h4>
            <p>
              <strong>KES {num(pkg.discovery.fee)}.</strong>{" "}
              {pkg.discovery.note}
            </p>
          </section>
        )}
      </div>
    </dialog>
  );
}

function InfoBlockView({ block }: { block: InfoBlock }) {
  return (
    <div className={styles.infoBlock}>
      <h4 className={styles.infoTitle}>{block.title}</h4>
      {block.intro && <p className={styles.infoIntro}>{block.intro}</p>}
      {block.table && (
        <div className={styles.tableWrap}>
          <table className={styles.specTable}>
            <thead>
              <tr>
                {block.table.columns.map((column) => (
                  <th key={column} scope="col">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.table.rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, i) =>
                    i === 0 ? (
                      <th key={i} scope="row">
                        {cell}
                      </th>
                    ) : (
                      <td key={i}>{cell}</td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {block.items && (
        <ul className={styles.infoList}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

interface PackageCardProps {
  pkg: ProductPackage;
  categoryLabel: string;
  onViewDetails: (pkg: ProductPackage, trigger: HTMLElement) => void;
}

function PackageCard({ pkg, categoryLabel, onViewDetails }: PackageCardProps) {
  const annual = getAnnual(pkg);
  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <h4 className={styles.cardName}>{pkg.name}</h4>
        {pkg.popular && <span className={styles.badge}>Most Popular</span>}
      </div>
      <p className={styles.cardPrice}>{formatPrice(pkg.price)}</p>
      {annual && <p className={styles.cardPriceNote}>{annualSummary(annual)}</p>}
      <p className={styles.cardTagline}>{pkg.tagline}</p>
      <ul className={styles.featureList}>
        {pkg.features.slice(0, CARD_FEATURE_COUNT).map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
       <div className={styles.cardActions}>
        <button
          type="button"
          className={styles.detailsButton}
          onClick={(e) => onViewDetails(pkg, e.currentTarget)}
          aria-haspopup="dialog">
          View Details
        </button>
        <a
          className={styles.whatsappButton}
          href={whatsappLink(pkg, categoryLabel)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat on WhatsApp about the ${pkg.name} package`}>
          <i className="hgi hgi-stroke hgi-whatsapp" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

interface StravonProductsProps {
  categories?: PackageCategory[];
}

export default function StravonProducts({
  categories = STRAVON_PRODUCTS,
}: StravonProductsProps) {
  const [selected, setSelected] = useState<{
    pkg: ProductPackage;
    categoryLabel: string;
  } | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const open = (
    pkg: ProductPackage,
    categoryLabel: string,
    trigger: HTMLElement,
  ) => {
    triggerRef.current = trigger;
    setSelected({ pkg, categoryLabel });
  };

  const close = () => {
    setSelected(null);
    triggerRef.current?.focus();
  };

  return (
    <section
      className={styles.products}
      aria-labelledby="stravon-products-title">
      <h2 id="stravon-products-title" className={styles.heading}>
        Stravon Products
      </h2>

      {categories.map((category) => (
        <section
          key={category.id}
          id={category.id}
          className={styles.category}
          aria-labelledby={`${category.id}-title`}>
          <h3 id={`${category.id}-title`} className={styles.categoryTitle}>
            {category.label}
          </h3>
          <p className={styles.categoryDescription}>{category.description}</p>
          <div className={styles.grid}>
            {category.packages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                categoryLabel={category.label}
                onViewDetails={(p, trigger) => open(p, category.label, trigger)}
              />
            ))}
          </div>
          {category.infoBlocks?.map((block) => (
            <InfoBlockView key={block.id} block={block} />
          ))}
        </section>
      ))}

      {selected && (
        <PackageModal
          pkg={selected.pkg}
          categoryLabel={selected.categoryLabel}
          onClose={close}
        />
      )}
    </section>
  );
}