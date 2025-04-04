"use client";
import React from "react";
import { Tbonus } from "./type";
import Image from "next/image";
import Link from "next/link";
import thousands from "@/libs/thousands";
import { useParams } from "next/navigation";
import useQueryParams from "@/libs/useQueryParams";

type TPropsContent = {
  data: Tbonus;
  slugPackage?: string;
};

export function Content({ data, slugPackage }: TPropsContent) {
  const params = useParams();

  const queryParams = useQueryParams();
  return (
    <div className="flex border p-5 gap-x-5 rounded-2xl items-center">
      <span className="flex w-44 aspect-video relative rounded-2xl overflow-hidden">
        <Image
          fill
          src={`http://127.0.0.1:8000/storage/${data.thumbnail}`}
          alt={data.name}
          className="w-full h-full object-cover absolute"
          sizes="(max-width: 768px) 100vw"
        />
      </span>
      <div className="flex flex-col">
        <h6 className="text-xl font-bold">{data.name}</h6>
        <span className="flex gap-x-2">
          <span className="text-color2">
            <span className="font-semibold"> Rp 0 </span>
            <span className=""> /package </span>
          </span>
          <span className="line-through">Rp {thousands(data.price)}</span>
        </span>
      </div>
      <Link
      scroll={
        false
      }
        href={{
          query: {
            ...queryParams,
            modal: "bonus",
            bonusId: data.id,
            slugPackage: params.slugPackage || slugPackage,
          },
        }}
        className="border ml-auto border-dark1 px-5 py-3 rounded-full font-semibold"
      >
        View Details
      </Link>
    </div>
  );
}
