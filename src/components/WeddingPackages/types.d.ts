export type Tshow = "popular" | "newest";

import { Tcity } from "@/components/Cities/types";
import { Torganizer } from "@/components/Organizer/types";

type Tpackage = {
  id: number;
  name: string;
  slug: string;
  price: number;
  isPopular: 1 | 0;
  thumbnail: string;
  about: string;
  city: Tcity;
  weddingOrganizer: Torganizer;
};
