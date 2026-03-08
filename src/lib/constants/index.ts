export const CREDIT_COST_PER_GENERATION = 5;

export const FREE_PLAN_CREDITS = 20;
export const PRO_PLAN_CREDITS = 200;

export const CATEGORIES = [
  "All",
  "Social",
  "Banner",
  "Email",
  "Display",
] as const;

export type Category = (typeof CATEGORIES)[number];
