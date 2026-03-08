export type AdTemplate = {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  dimensions: { width: number; height: number };
  creditCost: number;
};
