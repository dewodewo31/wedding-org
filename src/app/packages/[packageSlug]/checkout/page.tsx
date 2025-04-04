import React from "react";
import Header from "@/components/Header/";
import { Content as ContentTestimonials } from "@/components/Testimonials";
import { Content as ContentWeddingOrganizer  } from "@/components/Organizer";
import { Content as Form  } from "@/app/packages/[packageSlug]/checkout/form";

import Image from "next/image";
import { Tpackage } from "@/components/WeddingPackages/types";
import { getData } from "../page";
import thousands from "@/libs/thousands";

type Request = {
  params: {
    packageSlug: string;
  };
};


async function packageCheckoutPage({params}: Request){
  const { data: details }: { data: Tpackage } = await getData(
      params.packageSlug
    );
  return (
    <section className="container p-5 max-w-[1400px] mx-auto flex flex-col gap-y-4">
        <h2 className="text-3xl font-bold">Checkout Package</h2>
        <div className="flex gap-x-12">
          <div className="w-8/12"><Form data={details}/></div>

          <div className="w-4/12">
            <div className="sticky top-8">
              <div className="bg-light1 p-7 flex flex-col gap-y-5 rounded-2xl">
                <h6 className="text-2xl font-bold">
                  {details.name}
                </h6>
                <span className="relative w-full aspect-video rounded-2xl overflow-hidden">
                  <Image
                    fill
                    src={`http://127.0.0.1:8000/storage/${details.thumbnail}`}
                    alt={details.name}
                    className="w-full h-full object-cover absolute"
                    sizes="(max-width: 768px) 100vw"
                  />
                </span>

                <h6 className="text-2xl text-color2 font-bold">
                  Rp {thousands(details.price)}
                </h6>
                <hr />
                <h6 className="font-bold">What They Say About This Package</h6>
                {
                  details.weddingTestimonials.length > 0 ?
                  <ContentTestimonials data={details.weddingTestimonials[0]} />
                  : "Testimoni Belum Tersedia"
                }
                <hr />
                <h6 className="font-bold">Wedding Organizer</h6>
                <ContentWeddingOrganizer data={details.weddingOrganizer}/>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default packageCheckoutPage;
