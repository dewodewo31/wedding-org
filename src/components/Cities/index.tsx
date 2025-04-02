import React from "react";
import { Tcity } from "./types";
import { getData } from "./actions";
import Image from "next/image";
import Link from "next/link";
import thousands from "@/libs/thousands";

type Props = {};

function Content({ data }: { data: Tcity[] }) {
  return (
    <div className="grid grid-cols-3 gap-7">
      {data.map(city => {
        return (
          <div
            key={city.id}
            className="flex border border-transparent hover:border-color2 transition-colors duration-300 bg-light1 p-5 rounded-3xl items-center gap-x-5 relative"
          >
            <span className="relative w-[80px] aspect-square rounded-3xl overflow-hidden">
              <Image
                fill
                className="w-full h-full object-cover object-center"
                src={`http://127.0.0.1:8000/storage/${city.icon}`}
                alt={city.name}
                sizes="(max-width: 768px) 100vw"
              />
            </span>
            <span className="flex flex-col">
              <span className="text-xl font-bold">{
                city.name
                }</span>
              <span className="">{thousands(city.wedding_package_count)} Package{city.wedding_package_count > 1 && "s"}</span>
            </span>
            <Link href={`${process.env.HOST_APP}/cities/${city.slug}`} className="absolute inset-0"></Link>
          </div>
        );
      })}
    </div>
  );
}

async function Cities({}: Props) {
  const { data }: { data: Tcity[] } = await getData();

  console.log(data);

  if (data.length === 0) {
    return "No Data Available";
  }
  return <Content data={data} />;
}

export default Cities;
