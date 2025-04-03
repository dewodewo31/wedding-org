import React from "react";
import Slider from "@/components/Slider";

import { Ttestimonial } from "./types";
import { getData } from "./actions";

import Star from "@/app/assets/images/star.svg";

import Image from "next/image";


export function Content({ data }: { data: Ttestimonial }) {
  return (
    <div className="flex flex-col border p-7 rounded-3xl gap-y-4">
        <div className="flex flex-col gap-y-4">
          <span className="flex gap-x-1 text-color3">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </span>

          <p className="">{data.message}</p>

          <span className="flex gap-x-4 items-center">
            <span className="relative w-[80px] aspect-square rounded-full overflow-hidden">
              <Image
                fill
                className="w-full h-full object-cover object-center"
                src={`http://127.0.0.1:8000/storage/${data.photo}`}
                alt={data.name}
                sizes="(max-width: 768px) 100vw"
              />
            </span>
            <span className="flex flex-col">
              <span className="text-xl font-bold">{data.name}</span>
              <span className="text-sm text-gray-500">
                {data.occupation}
              </span>
            </span>
          </span>
        </div>
      
    </div>
  );
}

async function Testimonial() {
  const { data }: { data: Ttestimonial[] } = await getData();

  return (
    <div className="relative pb-16">
      <Slider swiperClassName="w-full" swiperSliderClassName="!w-[340px] -mx-2 px-6">
        {data.map(testi => {
          return <Content key={testi.id} data={data} />;
        })}
      </Slider>
    </div>
  );
}

export default Testimonial;
