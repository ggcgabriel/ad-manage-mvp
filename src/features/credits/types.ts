export type UserPlan = "free" | "pro";

export type UserCredits = {
  balance: number;
  plan: UserPlan;
};
