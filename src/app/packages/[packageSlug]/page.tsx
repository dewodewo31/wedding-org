import Header from "@/components/Header";
import { Tpackage } from "@/components/WeddingPackages/types";
import { Content as ContentTestimoni } from "@/components/Testimonials";
import { Metadata, ResolvingMetadata } from "next";
import Star from "@/app/assets/images/star.svg";
import Check from "@/app/assets/images/check.svg";
import Pinpoint from "@/app/assets/images/pinpoin.svg";

import React from "react";
import thousands from "@/libs/thousands";
import Link from "next/link";
import Slides from "./slide";
import { Content as ContentBonus } from "@/components/Bonus";
import { Content as ContentOrganizer } from "@/components/Organizer";

type Request = {
  params: {
    packageSlug: string;
  };
};

export async function getData(slug: string) {
  try {
    const req = await fetch(
      `${process.env.HOST_API}/api/wedding-package/${slug}`,
      {
        method: "GET",
        cache: "no-cache",
      }
    );
    return req.json();
  } catch (error) {
    console.log(error);
  }
}

export async function generateMetaData(
  { params }: Request,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { packageSlug } = params;

  const { data: details }: { data: Tpackage } = await getData(packageSlug);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: details.name, // Pastikan nilai title benar
    openGraph: {
      images: [`/${details.thumbnail}`, ...previousImages],
    },
  };
}

async function packageDetailPage({ params }: Request) {
  const { data: details }: { data: Tpackage } = await getData(
    params.packageSlug
  );

  return (
    <main className="flex flex-col gap-y-8 relative pb-16">
      <Header />

      <section className="container max-w-[1400px] pt-10 mx-auto flex flex-col">
        <div className="flex justify-between items-center mb-8">
          <span className="flex flex-col">
            <h2 className="text-3xl font-bold">{details.name}</h2>
            <span className="flex gap-x-2 items-center">
              <Pinpoint className="text-color1" />
              {details.city.name} City
            </span>
          </span>

          <span className="flex flex-col items-end gap-y-2">
            <span className="flex gap-x-1 text-color3">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </span>
            <span className="font-bold">
              ({thousands(details.weddingTestimonials.length)})
            </span>
          </span>
        </div>
      </section>

      {details.photos?.length > 0 && (
        <section className="container max-w-[1400px] pt-0 mx-auto flex flex-col">
          <Slides data={details.photos} title={details.name} isPopular />
        </section>
      )}

      <section className="container max-w-[1400px] mx-auto">
        <div className="flex gap-x-8">
          <div className="w-8/12 flex flex-col gap-y-7">
            <div className="flex flex-col">
              <h6 className="font-bold text-xl">It's a Good Package</h6>
              <p className="leading-normal">{details.about}</p>
            </div>

            <div className="">
              <div className="flex flex-col gap-y-4">
                <h6 className="font-bold text-xl">Bonus Included</h6>
                {details.weddingBonusPackages.length > 0 ? (
                  details.weddingBonusPackages.map(bonus => (
                    <ContentBonus
                      slugPackage={details.slug}
                      key={bonus.id}
                      data={bonus.bonusPackage}
                    />
                  ))
                ) : (
                  <p className="text-gray-500 text-center">
                    Tidak ada bonus yang tersedia untuk paket ini
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <h6 className="font-bold text-xl">Wedding Testimonials</h6>
                <Link
                  href="/"
                  className="border border-dark1 px-5 py-3 rounded-full font-semibold"
                >
                  View Details
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-5">
                {details.weddingTestimonials.map(testi => {
                  return <ContentTestimoni data={testi} key={testi.id} />;
                })}
              </div>
            </div>
          </div>

          <div className="w-4/12">
            <div className="sticky top-8">
              <div className="border p-7 flex flex-col gap-y-5 rounded-2xl">
                <h6 className="text-3xl text-color2 font-bold">
                  Price Rp.{thousands(details.price)},-
                </h6>
                <hr />
                <ul className="flex flex-col gap-y-5 list-none">
                  <li className="flex gap-x-3">
                    <Check />
                    <span className="">Pernikahan yang Elegan</span>
                  </li>
                  <li className="flex gap-x-3">
                    <Check />
                    <span className="">Dekorasi dan Venue Eksklusif</span>
                  </li>
                  <li className="flex gap-x-3">
                    <Check />
                    <span className="">
                      Pelayanan yang Profesional dan Ramah
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <Check />
                    <span className="">Sinematik Dokumentasi</span>
                  </li>
                  <li className="flex gap-x-3">
                    <Check />
                    <span className="">
                      Hiburan yang Menambah Suasana Romantis
                    </span>
                  </li>
                </ul>
                <hr />
                <h6 className="font-bold">Wedding Organizer</h6>
                <ContentOrganizer data={details.weddingOrganizer} />
                <hr />
                <Link
                  href={`${process.env.HOST_APP}/packages/${details.slug}/checkout`}
                  className="flex justify-center bg-color2 py-4 w-full text-light1 rounded-full"
                >
                  Choose This Package
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default packageDetailPage;
