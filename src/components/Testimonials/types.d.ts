import { Tpackage } from "@/components/WeddingPackages/types";

export type Ttestimonial = {
  id: number;
  name: string;
  occupation: string;
  photo: string;
  message: string;
  weddingPackage: Tpackage;
};
