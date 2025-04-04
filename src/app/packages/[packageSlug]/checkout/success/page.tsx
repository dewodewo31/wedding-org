import React from "react";
import { getData } from "../../page";
import { Tpackage } from "@/components/WeddingPackages/types";

import InvNumber from "@/app/assets/images/inv-number.svg";
import Image from "next/image";
import Link from "next/link";

type Request = {
  params: {
    packageSlug: string;
  };
  searchParams: {
    bookingId: string;
  };
};

async function page({ params, searchParams }: Request) {
  const { data: details }: { data: Tpackage } = await getData(
    params.packageSlug
  );
  return (
    <section className="max-w-xl mx-auto flex flex-col rounded-[40px] p-10 gap-y-5 bg-light1 w-full">
      <h1 className="text-3xl font-bold text-center">Booking Finished!</h1>
      <span className="relative w-full h-[120px] rounded-3xl overflow-hidden">
        <Image
          fill
          className="w-full h-full object-cover object-center"
          src={`http://127.0.0.1:8000/storage/${details.thumbnail}`}
          alt={details.name}
          sizes="(max-width: 768px) 100vw"
        />
      </span>

      <div className="flex flex-col w-full gap-y-2">
        <label htmlFor="booking_trx_id">Your Booking ID:</label>
        <div className="flex relative">
          <span className="absolute left-0 bottom-0 top-0 aspect-square flex items-center justify-center text-color2">
            <InvNumber />
          </span>
          <input
            type="text"
            className="pl-10 select-none cursor-default w-full py-3 pr-4 border border-light3 focus:outline-none focus:border-color2 rounded-full font-bold"
            name="booking_trx_id"
            id="booking_trx_id"
            readOnly
            value={searchParams.bookingId}
            placeholder="Write your complete name"
          />
        </div>
      </div>

      <p className="">
        Gunakan kode booking di atas untuk memeriksa status pemesananmu
      </p>

      <div className="flex flex-col gap-y-4">
        <Link
          href="/packages"
          className="bg-color2 text-light1 font-semibold gap-x-2 flex items-center justify-center py-3 rounded-full w-full"
        >
          <span>Booking Other Package</span>
        </Link>
        <Link
          href="/bookings"
          className="border border-dark1 gap-x-2 flex items-center font-semibold justify-center py-3 rounded-full w-full"
        >
          <span>View My Booking</span>
        </Link>
      </div>
    </section>
  );
}

export default page;
