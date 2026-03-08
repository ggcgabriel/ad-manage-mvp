export type ProjectStatus = "pending" | "generating" | "completed" | "failed";

export type GeneratedAsset = {
  id: string;
  imageUrl: string;
  isWatermarked: boolean;
  createdAt: string;
};

export type Project = {
  id: string;
  title: string;
  status: ProjectStatus;
  templateId: string;
  productId: string;
  assets: GeneratedAsset[];
  creditCost: number;
  createdAt: string;
};
