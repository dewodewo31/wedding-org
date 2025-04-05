import Image from "next/image";
import React from "react";
import { Content as FormBookings } from "../bookings/form";


function page() {
  return (
    <>
    {/* Section Gambar */}
    <section className="absolute w-full z-10 flex h-screen">
      <div className="w-6/12 min-h-screen relative ml-auto">
        <Image
          fill
          src="/images/img-cover.png"
          alt="img-cover.png"
          className="w-full h-full object-cover absolute"
          sizes="(max-width: 768px) 100vw"
        />
      </div>
    </section>

    {/* Section Form */}
    <section className="container mx-auto relative z-20 flex mt-10">
      <div className="w-6/12 p-5 bg-light1 rounded-2xl">
        <FormBookings />
      </div>
    </section>
  </>
  );
}

export default page;
