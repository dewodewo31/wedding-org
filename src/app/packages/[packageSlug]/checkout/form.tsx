"use client";
import { Tpackage } from "@/components/WeddingPackages/types";
import Arrowdown from "@/app/assets/images/arrow-down.svg";
import Person from "@/app/assets/images/person.svg";
import Email from "@/app/assets/images/email.svg";
import Packagequantity from "@/app/assets/images/package-quantity.svg";
import Privacy from "@/app/assets/images/privacy.svg";
import Phone from "@/app/assets/images/phone.svg";
import Calendar from "@/app/assets/images/calendar.svg";
import Price from "@/app/assets/images/price.svg";
import Percent from "@/app/assets/images/percent.svg";
import Consultation from "@/app/assets/images/consultation.svg";
import Total from "@/app/assets/images/total.svg";
import Wallet from "@/app/assets/images/wallet.svg";
import Pointprogram from "@/app/assets/images/point-program.svg";
import Bca from "@/app/assets/images/bank/bca-icon.svg";
import Mandiri from "@/app/assets/images/bank/mandiri.svg";
import GreenCheck from "@/app/assets/images/green-check.svg";
import Proof from "@/app/assets/images/proof.svg";
import React, { use, useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { booking } from "./action";
import { toast } from "react-toastify";

type Props = {
  data: Tpackage;
};

const initialState: {
  message: string;
  status: 400 | 200;
} = {
  message: "",
  status: 200,
};

export function Content({data}: Props) {
  const { pending } = useFormStatus();

  const [state, formAction] = useFormState(booking, initialState);

  const tax = data.price * 0.11;
  const grandTotal= data.price + tax;

  useEffect(() => {
    if (state.status === 400) {
      toast.error(state.message);
    } else {
      toast.success(state.message);
    }
  }, [state]);

  console.log(state);

  return (
    <form action={formAction}>
      <input type="hidden" value={data.slug} name="slug" />
      <input type="hidden" value={data.id} name="wedding_package_id" />
      <input type="hidden" value={data.price} name="price" />
      <input type="hidden" value={grandTotal} name="total_amount" />
      <input type="hidden" value={tax} name="total_tax_amount" />
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
                  />
                </div>
              </div>

              <div className="flex flex-col w-full gap-y-2">
                <label htmlFor="phone">Phone </label>
                <div className="flex relative">
                  <span className="absolute left-0 bottom-0 top-0 aspect-square flex items-center justify-center text-color2">
                    <Phone />
                  </span>
                  <input
                    type="tel"
                    className="pl-10 w-full py-3 pr-4 border border-light3 focus:outline-none focus:border-color2 rounded-full"
                    name="phone"
                    id="phonenumber"
                    placeholder="Let us know your number"
                  />
                </div>
              </div>

              <div className="flex flex-col w-full gap-y-2">
                <label htmlFor="started_at">Started At</label>
                <div className="flex relative">
                  <Calendar />
                  <input
                    type="date"
                    className="pl-10 appearance-none w-full py-3 pr-4 border border-light3 focus:outline-none focus:border-color2 rounded-full"
                    name="started_at"
                    id="started_at"
                    placeholder="Write your complete date"
                  />
                </div>
              </div>
            </div>

            <hr />

            <span className="flex items-center gap-x-2">
              <Privacy />

              <span>WeddingOrg is protecting your privacy better</span>
            </span>
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
                <Packagequantity />
              </span>
              <span className="">Package Quantity</span>
              <span className="font-bold ml-auto">1 Wedding Package</span>
            </div>

            <div className="flex items-center gap-x-3">
              <span className="text-color2">
                <Price />
              </span>
              <span className="">Package Price (1x)</span>
              <span className="font-bold ml-auto">Rp 560.300.493</span>
            </div>

            <div className="flex items-center gap-x-3">
              <span className="text-color2">
                <Percent />
              </span>
              <span className="">Country Tax 11%</span>
              <span className="font-bold ml-auto">Rp 56.399.403</span>
            </div>

            <div className="flex items-center gap-x-3">
              <span className="text-color2">
                <Consultation />
              </span>
              <span className="">Consultation & Insurance</span>
              <span className="font-bold ml-auto">Rp 0 (Free)</span>
            </div>

            <div className="flex items-center gap-x-3">
              <span className="text-color2 fill-current">
                <Total />
              </span>
              <span className="font-bold">Grand Total Amount</span>
              <span className="font-bold text-xl text-color2 ml-auto">
                Rp 17.488.583.948
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-5 bg-white rounded-2xl p-7">
          <input
            type="checkbox"
            name="accordion"
            id="proceed-payment"
            className="peer hidden"
            defaultChecked
          />
          <label
            htmlFor="proceed-payment"
            className="flex justify-between [--state-rotate:0deg] peer-checked:[--state-rotate:180deg]"
          >
            <h6 className="text-xl font-bold">Proceed Payment to</h6>
            <span className="text-color2 flex items-center justify-center transition-all duration-300 [rotate:var(--state-rotate)]">
              <Arrowdown />
            </span>
          </label>
          <div className="flex flex-col gap-y-5 max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-screen">
            <hr />

            <div className="flex gap-x-5">
              <button
                type="button"
                className="border border-color2 gap-x-2 flex items-center justify-center py-3 rounded-full w-full"
              >
                <Wallet />
                <span>Bank Transfer</span>
              </button>

              <button
                type="button"
                className="border border-light3 gap-x-2 flex items-center justify-center py-3 rounded-full w-full"
              >
                <Wallet />

                <span>Credit Card</span>
              </button>

              <button
                type="button"
                className="border border-light3 gap-x-2 flex items-center justify-center py-3 rounded-full w-full"
              >
                <span className="w-6">
                  <Pointprogram className="text-color2" />
                </span>
                <span>Redeem Points</span>
              </button>
            </div>

            <div className="flex gap-x-5">
              <div className="w-6/12 flex gap-x-4 items-center">
                <Bca />
                <span className="flex flex-col">
                  <span className="flex gap-x-2">
                    <span className="font-semibold">Samawa Indonesia</span>
                    <GreenCheck />
                  </span>
                  <span>8008129839</span>
                </span>
              </div>

              <div className="w-6/12 flex gap-x-4 items-center">
                <Mandiri />

                <span className="flex flex-col">
                  <span className="flex gap-x-2">
                    <span className="font-semibold">Samawa Indonesia</span>
                    <GreenCheck />
                  </span>
                  <span>12379834983281</span>
                </span>
              </div>
            </div>

            <hr />

            <div className="flex flex-col w-full gap-y-2">
              <label htmlFor="proof" className="text-xl font-bold">
                Upload Proof of Payment
              </label>
              <div className="flex relative">
                <span className="absolute left-0 bottom-0 top-0 aspect-square flex items-center justify-center text-color2">
                  <span className="text-color2">
                    <Proof />
                  </span>
                </span>
                <input
                  type="file"
                  className="pl-10 block file:hidden appearance-none w-full py-3 pr-4 border border-light3 focus:outline-none focus:border-color2 rounded-full"
                  name="proof"
                  id="proof"
                  placeholder="Add an attachment"
                />
              </div>
            </div>
            <hr />

            <div className="flex gap-x-5">
              <button
                type="button"
                className="border border-dark1 gap-x-2 flex items-center font-semibold justify-center py-3 rounded-full w-full"
              >
                <span>Save as a Wishlist</span>
              </button>
              <button
                disabled={pending}
                aria-disabled={pending}
                type="submit"
                className={[
                  "font-semibold gap-x-2 flex items-center justify-center py-3 rounded-full w-full",
                  pending
                    ? "bg-color2/25 text-gray-600 pointer-events-none cursor-not-allowed"
                    : "bg-color2 text-light1",
                ].join(" ")}
              >
                <span>Confirm Payment</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
