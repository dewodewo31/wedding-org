export type Tshow = "popular" | "newest";

import { Tcity } from "@/components/Cities/types";
import { Torganizer } from "@/components/Organizer/types";
import { Tbonus } from "@/components/Bonus/type";
import { Ttestimonial } from "@/components/Testimonials/types";

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
  photos: { id: number; photo: string }[];
  weddingBonusPackages: {
    id: number;
    bonusPackage: Tbonus;
  }[];
  weddingTestimonials: Ttestimonial[];
};
