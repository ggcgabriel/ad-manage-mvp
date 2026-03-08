import { create } from "zustand";
import type { UserPlan } from "@/features/credits/types";
import { FREE_PLAN_CREDITS, CREDIT_COST_PER_GENERATION } from "@/lib/constants";

type AppState = {
  credits: number;
  plan: UserPlan;

  deductCredits: (amount?: number) => boolean;
  hasEnoughCredits: (amount?: number) => boolean;
  resetCredits: () => void;
};

export const useAppStore = create<AppState>((set, get) => ({
  credits: FREE_PLAN_CREDITS,
  plan: "free",

  deductCredits: (amount = CREDIT_COST_PER_GENERATION) => {
    if (get().credits < amount) return false;
    set((s) => ({ credits: s.credits - amount }));
    return true;
  },

  hasEnoughCredits: (amount = CREDIT_COST_PER_GENERATION) => {
    return get().credits >= amount;
  },

  resetCredits: () => {
    set({ credits: FREE_PLAN_CREDITS });
  },
}));
