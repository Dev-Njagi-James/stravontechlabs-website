export type Price =
  | { type: "range"; min: number; max: number }
  | { type: "once"; amount: number }
  | { type: "fixed"; amount: number; period: "mo" | "yr" }
  | { type: "quote"; label: string };

export interface SpecRow {
  factor: string;
  specification: string;
  cost: string;
}

/** Label / value pair shown in the modal's "Plan details" list. */
export interface Fact {
  label: string;
  value: string;
  note?: string;
}



export interface ProductPackage {
  id: string;
  name: string;
  /** Short line shown on the card. */
  tagline: string;
  /** Full target-client description, shown in the modal. */
  targetClient: string;
  price: Price;
  /** Yearly price for monthly plans. Savings and free months are derived from it. */
  annualPrice?: number;
  popular?: boolean;
  /** "What the client gets" — card shows the first N, modal shows the rest. */
  features: string[];
  /** Website packages: Storage, Account & Access, Payment Integration, Work Labour, Graphic Design. */
  specs?: SpecRow[];
  /** Storage and streaming plans: storage size, delivery, approx. images, overage. */
  facts?: Fact[];
  postLaunchSupport?: string;
  maintenance?: { monthly: number; isBase?: boolean; note?: string };
  discovery?: { fee: number; note: string };
}

/** Policy or reference content rendered under a category's card grid. */
export interface InfoBlock {
  id: string;
  title: string;
  intro?: string;
  items?: string[];
  table?: { columns: string[]; rows: string[][] };
}

export interface PackageCategory {
  id: string;
  /** Section heading, rendered as h3. */
  label: string;
  description: string;
  packages: ProductPackage[];
  infoBlocks?: InfoBlock[];
}
