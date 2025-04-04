"use client";

import React, { useState } from "react";
import Popular from "@/app/assets/images/popular.svg";
import Download from "@/app/assets/images/download.svg";
import Playbutton from "@/app/assets/images/play-button.svg";
import Image from "next/image";
type Props = {
  title: string;
  data: {
    id: number;
    photo: string;
  }[];
  isPopular: boolean
};

function Slides({ data, title, isPopular }: Props) {

  const photos = data.slice(0.3)

  const [current, setCurrent] = useState(photos[0].id)

  const currentPhoto = photos.find(photo => photo.id === current)
  return (
    <div className="grid grid-cols-4 gap-5 grid-rows-3 h-[550px] ">
      <div className="col-span-3 row-span-3">
        <div className="flex relative w-full h-full rounded-2xl overflow-hidden">
{
  isPopular && (

          <span className="absolute z-10 top-5 left-5">
            <span className="bg-light1 rounded-full inline-flex gap-x-2 items-center text-sm py-1 px-3 font-bold uppercase">
              <span className="text-color2">
                <Popular />
              </span>
              Popular
            </span>
          </span>
        )}
          <span className="absolute z-10 bottom-5 left-5">
            <span className="bg-light1 rounded-full inline-flex gap-x-2 items-center text-sm py-1 px-3 font-bold uppercase">
              
                <Download className="text-color2"/>
              BROCHURE .PDF
            </span>
          </span>

          <span className="absolute z-10 bottom-5 right-5">
            <span className="bg-light1 rounded-full inline-flex gap-x-2 items-center text-sm py-1 px-3 font-bold uppercase">
              
                <Playbutton />
              VIRTUAL 360
            </span>
          </span>

          <Image
            fill
            src={`http://127.0.0.1:8000/storage/${currentPhoto?.photo}`}
            alt={`${title} 0`}
            className="w-full h-full object-cover absolute"
            sizes="(max-width: 768px) 100vw"
          />
        </div>
      </div>
{
  photos.map(photo =>{
    return (
      <div key={photo.id} className="border-2 cursor-pointer border-transparent hover:border-color2 rounded-2xl overflow-hidden"
      onClick={() => setCurrent(photo.id)}
      >
      <span className="flex relative w-full h-full">
        <Image
          fill
          src={`http://127.0.0.1:8000/storage/${photo.photo}`}
          alt={`${title}-${photo.photo}`}
          className="w-full h-full object-cover absolute"
          sizes="(max-width: 768px) 100vw"
        />
      </span>
    </div>
    )
  })
}
    
    </div>
  );
}

export default Slides;
