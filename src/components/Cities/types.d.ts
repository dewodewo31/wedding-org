import { Tpackage } from "@/components/WeddingPackages/types";

export type Tcity = {
  id: number;
  name: string;
  slug: string;
  icon: string;
  weddingPackages_count: number;
  weddingPackages: Tpackage[];
};
