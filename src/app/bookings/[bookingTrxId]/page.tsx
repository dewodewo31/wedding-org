import { Tpackage } from "@/components/WeddingPackages/types";
import Arrowdown from "@/app/assets/images/arrow-down.svg";
import Person from "@/app/assets/images/person.svg";
import Email from "@/app/assets/images/email.svg";
import Phone from "@/app/assets/images/phone.svg";
import Calendar from "@/app/assets/images/calendar.svg";
import InvNumber from "@/app/assets/images/inv-number.svg";
import Consultation from "@/app/assets/images/consultation.svg";
import Check from "@/app/assets/images/green-check.svg";
import Proof from "@/app/assets/images/proof.svg";
import Total from "@/app/assets/images/total.svg";
import { Content as ContentBonus } from "@/components/Bonus";
import { Content as ContentOrganizer } from "@/components/Organizer";
import Image from "next/image";
import React from "react";
import thousands from "@/libs/thousands";

type Request = {
  params: {
    bookingTrxId: string;
  };
  searchParams: {
    phone: string;
  };
};

type Tbooking = {
  id: number;
  name: string;
  email: string;
  proof: string;
  phone: string;
  booking_trx_id: string;
  is_paid: 1 | 0;
  total_amount: number;
  started_at: string;
  weddingPackage: Tpackage;
};

export async function getData(booking_trx_id: string, phone: string) {
  try {
    const formData = new FormData();
    formData.append("booking_trx_id", booking_trx_id);
    formData.append("phone", phone);
    const req = await fetch(`http://127.0.0.1:8000/api/check-booking/`, {
      method: "POST",
      cache: "no-cache",
      body: formData,
    });
    return req.json();
  } catch (error) {
    console.log(error);
  }
}

async function BookingFoundPage({ params, searchParams }: Request) {
  const { data }: { data: Tbooking } = await getData(
    params.bookingTrxId,
    searchParams.phone
  );
  const Tax = data.total_amount * 0.11;
  const GTotal = data.total_amount + Tax;
  console.log(data);
  return (
    <section className="container max-w-[1400px] mx-auto flex flex-col gap-y-4">
      <h2 className="text-3xl font-bold">Booking #{params.bookingTrxId}</h2>

      <div className="flex gap-x-12">
        <div className="w-8/12">
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-5 bg-white rounded-2xl p-7">
              <input
                type="checkbox"
                name="accordion"
                id="customer-information"
                className="peer hidden"
                defaultChecked
              />
              <label
                htmlFor="customer-information"
                className="flex justify-between [--state-rotate:0deg] peer-checked:[--state-rotate:180deg]"
              >
                <h6 className="text-xl font-bold">Customer Information</h6>
                <span className="text-color2 flex items-center justify-center transition-all duration-300 [rotate:var(--state-rotate)]">
                  <Arrowdown />
                </span>
              </label>
              <div className="flex flex-col gap-y-5 max-h-0 overflow-hidden transition-all duration-300 h-full peer-checked:max-h-screen">
                <hr />
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col w-full gap-y-2">
                    <label htmlFor="name">Full Name</label>
                    <div className="flex relative">
                      <span className="absolute left-0 bottom-0 top-0 aspect-square flex items-center justify-center text-color2">
                        <Person />
                      </span>
                      <input
                        type="text"
                        className="pl-10 w-full py-3 pr-4 border border-light3 focus:outline-none focus:border-color2 rounded-full"
                        name="name"
                        id="name"
                        placeholder="Write your complete name"
                        defaultValue={data.name}
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-full gap-y-2">
                    <label htmlFor="email">Email Address</label>
                    <div className="flex relative">
                      <span className="absolute left-0 bottom-0 top-0 aspect-square flex items-center justify-center text-color2">
                        <Email />
                      </span>
                      <input
                        type="email"
                        className="pl-10 w-full py-3 pr-4 border border-light3 focus:outline-none focus:border-color2 rounded-full"
                        name="email"
                        id="email"
                        placeholder="Write your complete email"
                        defaultValue={data.email}
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-full gap-y-2">
                    <label htmlFor="phonenumber">Phone Number</label>
                    <div className="flex relative">
                      <span className="absolute left-0 bottom-0 top-0 aspect-square flex items-center justify-center text-color2">
                        <Phone />
                      </span>
                      <input
                        type="tel"
                        className="pl-10 w-full py-3 pr-4 border border-light3 focus:outline-none focus:border-color2 rounded-full"
                        name="phonenumber"
                        id="phonenumber"
                        placeholder="Let us know your number"
                        defaultValue={data.phone}
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-full gap-y-2">
                    <label htmlFor="date">Started At</label>
                    <div className="flex relative">
                      <span className="absolute left-0 bottom-0 top-0 aspect-square flex items-center justify-center text-color2">
                        <Calendar />
                      </span>
                      <input
                        type="date"
                        className="pl-10 appearance-none w-full py-3 pr-4 border border-light3 focus:outline-none focus:border-color2 rounded-full"
                        name="date"
                        id="date"
                        placeholder="Write your complete date"
                        defaultValue={data.started_at}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-y-5 bg-white rounded-2xl p-7">
              <input
                type="checkbox"
                name="accordion"
                id="wedding-bonus"
                className="peer hidden"
                defaultChecked
              />
              <label
                htmlFor="wedding-bonus"
                className="flex justify-between [--state-rotate:0deg] peer-checked:[--state-rotate:180deg]"
              >
                <h6 className="text-xl font-bold">Wedding Bonus Package</h6>
                <span className="text-color2 flex items-center justify-center transition-all duration-300 [rotate:var(--state-rotate)]">
                  <Arrowdown />
                </span>
              </label>
              <div className="flex flex-col gap-y-5 max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-screen">
                <hr />
                {data.weddingPackage.weddingBonusPackages.map(bonus => {
                  return (
                    <ContentBonus
                      key={bonus.bonusPackage.id}
                      data={bonus.bonusPackage}
                      slugPackage={data.weddingPackage.slug}
                    />
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-y-5 bg-white rounded-2xl p-7">
              <input
                type="checkbox"
                name="accordion"
                id="payment-details"
                className="peer hidden"
                defaultChecked
              />
              <label
                htmlFor="payment-details"
                className="flex justify-between [--state-rotate:0deg] peer-checked:[--state-rotate:180deg]"
              >
                <h6 className="text-xl font-bold">Payment Details</h6>
                <span className="text-color2 flex items-center justify-center transition-all duration-300 [rotate:var(--state-rotate)]">
                  <Arrowdown />
                </span>
              </label>
              <div className="flex flex-col gap-y-5 max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-screen">
                <hr />
                <div className="flex items-center gap-x-3">
                  <span className="text-color2">
                    <InvNumber />
                  </span>
                  <span className="">Status Transaction</span>
                  {data.is_paid === 1 ? (
                    <span className="font-semibold text-light1 ml-auto bg-color4 rounded-full py-1 px-3 uppercase flex items-center gap-2">
                      <Check />
                      Success
                    </span>
                  ) : (
                    <span className="font-semibold text-light1 ml-auto bg-color3 rounded-full py-1 px-3 uppercase flex items-center gap-2">
                      <Proof />
                      Pending
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-x-3">
                  <span className="text-color2">
                    <InvNumber />
                  </span>
                  <span className="">Package Quantity</span>
                  <span className="font-bold ml-auto">1 Wedding Package</span>
                </div>

                <div className="flex items-center gap-x-3">
                  <span className="text-color2">
                    <Consultation />
                  </span>
                  <span className="">Consultation & Insurance</span>
                  <span className="font-bold ml-auto">Rp 0 (Free)</span>
                </div>

                <div className="flex items-center gap-x-3">
                  <span className="text-color2">
                    <Total />
                  </span>
                  <span className="">Tax 11%</span>
                  <span className="font-bold text-xl text-color2 ml-auto">
                    Rp
                    {thousands(Tax)}
                  </span>
                </div>
                <div className="flex items-center gap-x-3">
                  <span className="text-color2">
                    <Total />
                  </span>
                  <span className="">Grand Total Amount</span>
                  <span className="font-bold text-xl text-color2 ml-auto">
                    Rp
                    {thousands(GTotal)}
                  </span>
                </div>
                <hr />

                <h6 className="text-xl font-bold">Proof of Payment</h6>

                <span className="relative w-[390px] aspect-video rounded-2xl overflow-hidden">
                  <Image
                    fill
                    src={`http://127.0.0.1:8000/storage/${data.proof}`}
                    alt={data.name}
                    className="w-full h-full object-cover absolute"
                    sizes="(max-width: 768px) 100vw"
                  />
                </span>

                <a
                  href="#"
                  className="bg-color2 text-light1 font-semibold gap-x-2 flex items-center justify-center py-3 rounded-full w-full"
                >
                  <span>Contact Customer Service</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-4/12">
          <div className="sticky top-8">
            <div className="bg-light1 p-7 flex flex-col gap-y-5 rounded-2xl">
              <h6 className="text-2xl font-bold">{data.weddingPackage.name}</h6>
              <span className="relative w-full aspect-video rounded-2xl overflow-hidden">
                <Image
                  fill
                  src={`http://127.0.0.1:8000/storage/${data.weddingPackage.thumbnail}`}
                  alt={data.weddingPackage.name}
                  className="w-full h-full object-cover absolute"
                  sizes="(max-width: 768px) 100vw"
                />
              </span>

              <h6 className="font-bold">Wedding Organizer</h6>
              <div className="flex border border-light3 hover:border-color2 transition-colors duration-300 bg-light1 p-5 rounded-3xl items-center gap-x-5 relative">
                <ContentOrganizer data={data.weddingPackage.weddingOrganizer} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingFoundPage;
