import type { GeneratedAsset } from "@/features/projects/types";

export type GenerationRequest = {
  templateId: string;
  productId: string;
};

export type GenerationResult = {
  projectId: string;
  assets: GeneratedAsset[];
};
