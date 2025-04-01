import React from 'react'
import Slider from "@/components/Slider";

import { Tcity } from '@/components/Cities/types';
import { TOrganizer } from '@/components/Organizer/types';
import { Tpackage, Tshow } from './types';
import { getData } from './actions';

import Popular from "@/app/assets/images/popular.svg";
import Pinpoint from "@/app/assets/images/pinpoin.svg";
import Hometown from "@/app/assets/images/hometown.svg";
import Image from 'next/image';
import thousands from '@/libs/thousands';
import Link from 'next/link';


type PropsWeddingPackagesWrapper = {
  show: Tshow,
  type: "grid" | "slider"
}

type Tpackage = {
  id: number,
  name: string,
  slug: string,
  price: number,
  isPopular: 1 | 0,
  thumbnail: string,
  about: string,
  city: Tcity,
  weddingOrganizer: TOrganizer
}

function WeddingPackageGrid({data}: {data: Tpackage[]}){
  return (
  <div className="grid grid-cols-4 gap-7">
    {
      data.map(gridPackage => {
        return <div key={gridPackage.id} className="flex flex-col gap-y-4 relative">
        <Link href={`${process.env.HOST_APP}/packages/${gridPackage.slug}`} className="absolute inset-0 z-10">
        </Link>
        <span className="relative h-[300px] rounded-3xl overflow-hidden">
          {gridPackage.isPopular === 1 && (
          
          <span className="absolute z-10 top-5 left-5">
            <span
              className="bg-color1 rounded-full text-light1 inline-flex gap-x-2 items-center text-sm py-1 px-3 uppercase"
            >
              <Popular/>
              Popular
            </span>
          </span>
          )}
          <Image
            fill
              className="w-full h-full object-cover object-center"
              src={`http://127.0.0.1:8000/storage/${gridPackage.thumbnail}`}
              alt={gridPackage.name}
              sizes="(max-width: 768px) 100vw"
            />
        </span>
        <h6 className="text-xl font-bold">
          {gridPackage.name}
        </h6>
        <span className="flex flex-col gap-[14px]">
          <span className="flex gap-x-2 items-center">
            <Pinpoint/>
            {gridPackage.city.name}
            </span>
          {/* <span className="flex gap-x-2 items-center">
            Tentram
            </span> */}
        </span>
        <span className="text-color2 font-bold">Rp {
          thousands(gridPackage.price)
          }</span>
      </div>
      })
    }
  </div>

  );  
}



function WeddingPackageSlider({data}: {data: Tpackage[]}){
  console.log(data)
  return (
    <div className="relative">
      <Slider swiperClassName='w-full h-[480px]' swiperSliderClassName='-mx-10 px-12 xl:max-w-5xl 2xl:max-w-7xl'>
        {
          data.map(slide => {
            return <div key={slide.id} className="card-slide h-full rounded-3xl overflow-hidden relative">
          <figure className="w-full h-full absolute">
            <Image
            fill
              className="w-full h-full object-cover object-center"
              src={`http://127.0.0.1:8000/storage/${slide.thumbnail}`}
              alt={slide.name}
              sizes="(max-width: 768px) 100vw"
            />
          </figure>

          <div className="card-slide-content flex flex-col items-start gap-y-5">
            <span className="bg-color1 rounded-full text-light1 inline-flex gap-x-2 items-center text-sm py-1 px-3 uppercase">
              <Popular />
              Popular
            </span>
            <span className="flex flex-col gap-y-1">
              <h6 className="text-[28px] font-bold">
                {slide.name}
              </h6>
              <span className="text-xl text-color2 font-semibold">
                Rp {
                  thousands(slide.price)
                }
              </span>
            </span>
            <span className="flex gap-x-4">
              <span className="flex gap-x-2 items-center">
                <Pinpoint className="text-color1"/>
                {slide.city.name}
              </span>
              {/* <span className="flex gap-x-2 items-center">
                <Hometown className="text-color1"/>
                Tentram
              </span> */}
            </span>
            <Link
              href={`${process.env.HOST_APP}/packages/${slide.slug}`}
              className="flex justify-center bg-color2 py-2 w-full text-light1 rounded-full"
            >
              View Package
            </Link>
          </div>
        </div>
          })
        }
        
      </Slider> {/* Ini yang ditambahkan */}
    </div>
  );  
}


async function WeddingPackagesWrapper({show, type}: PropsWeddingPackagesWrapper) {
  const {data}: {data: Tpackage[]} = await getData(show)

  if(type === "grid"){
    return <WeddingPackageGrid data={data}/>
  } 
  if(type === "slider"){
    return <WeddingPackageSlider data={data} />
  } 

  return null
}

export default WeddingPackagesWrapper