import Header from '@/components/Header'
import React from 'react'

import Star from '@/app/assets/images/star.svg'
import { Metadata, ResolvingMetadata } from 'next'
import { Tcity } from '@/components/Cities/types'
import thousands from '@/libs/thousands'
import { WeddingPackageGrid, WeddingPackageSlider } from "@/components/WeddingPackages/index";
import Link from 'next/link'
import Testimonial from '@/components/Testimonials'

type Request = {
  params:{
    citySlug: string
  }
}

async function getData(slug: string) {
  try {
    const req = await fetch(`${process.env.HOST_API}/api/city/${slug}`, {
      method: "GET",
      cache: "no-cache",
    })
    return req.json();
  } catch (error) {
    console.log(error)
  }
}

export async function generateMetaData(
  { params }: { params: { citySlug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { citySlug } = params;

  const response = await getData(citySlug);
  console.log("API Response:", response); // Debugging
  if (!response || !response.data) {
    console.warn("City data is missing, using default metadata.");
    return { title: "Default Title" }; // Fallback title jika data tidak ada
  }

  const { data: city }: { data: Tcity } = response;

  console.log("City Name:", city.name); // Debugging

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: city.name, // Pastikan nilai title benar
    openGraph: {
      images: [`/${city.icon}`, ...previousImages],
    },
  };
}



async function detailCityPage({params}: Request) {
  const {data: city}: {data: Tcity} = await getData(params.citySlug)
  console.log(city)
  return (
    <main className="flex flex-col gap-y-16 ">
      <Header />

      <section className="flex flex-col">
        <div className="container mx-auto max-w-[1400px] flex justify-between items-center mb-8">
          <span className="flex max-w-sm">
            <h2 className="text-4xl font-bold">
              Best Deal in {city.name} City
            </h2>
          </span>

          <span className="flex flex-col items-end gap-y-2">
            <span className="flex gap-x-1 text-color3">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </span>
            <span className="font-bold">({thousands(city.weddingPackages_count)})</span>
          </span>
        </div>

        <WeddingPackageSlider data={city.weddingPackages.filter(weddingPackage => weddingPackage.isPopular === 1)} />
      </section>


      <section className="container mx-auto  flex flex-col">
        <div className="flex justify-center items-center mb-8">
          <h2 className="text-3xl font-bold max-w-md text-center">
            Browse Our Best Selection Wedding Packages
          </h2>
        </div>
        </section>


        <section className='container max-w-[1400px] mx-auto'>
        <WeddingPackageGrid data={city.weddingPackages} />
        </section>

        <section className="flex flex-col">
        <div className="container mx-auto max-w-[1200px] flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold max-w-xs">
            Happy Stories of Our Wedding
          </h2>
          <Link
            href="/testimonials"
            className="border border-dark1 px-5 py-3 text-center rounded-full font-semibold"
            >Explore All</Link>
        </div>
        
        <Testimonial/>
        </section>
      </main>
  )
}

export default detailCityPage