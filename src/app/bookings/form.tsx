"use client";

import React, { useEffect } from "react";
import InvNumber from "@/app/assets/images/inv-number.svg";
import Phone from "@/app/assets/images/phone.svg";
import { useFormState, useFormStatus } from "react-dom";
import { checkBooking } from "./action";
import { toast } from "react-toastify";

const initialState: {
  message: string;
  status: 400 | 200;
} = {
  message: "",
  status: 200,
};

export const Content = () => {
  const { pending } = useFormStatus();

  const [state, formAction] = useFormState(checkBooking, initialState);

  useEffect(() => {
    if (state.status === 400) {
      toast.error(state.message);
    } else {
      toast.success(state.message);
    }
  }, [state]);

  return (
    <form
      action={formAction}
      className="bg-light1 rounded-2xl flex flex-col gap-y-5 w-8/12 p-5 mx-auto"
    >
      <h1 className="text-xl font-bold">Check My Booking</h1>

      <div className="flex flex-col w-full gap-y-2">
        <label htmlFor="booking_trx_id">Booking ID</label>
        <div className="flex relative">
          <span className="absolute left-0 bottom-0 top-0 aspect-square flex items-center justify-center text-color2">
            <InvNumber />
          </span>
          <input
            type="text"
            className="pl-10 w-full py-3 pr-4 border border-light3 focus:outline-none focus:border-color2 rounded-full"
            name="booking_trx_id"
            id="booking_trx_id"
            placeholder="Write your booking id"
          />
        </div>
      </div>

      <div className="flex flex-col w-full gap-y-2">
        <label htmlFor="phone">Phone Number</label>
        <div className="flex relative">
          <span className="absolute left-0 bottom-0 top-0 aspect-square flex items-center justify-center text-color2">
            <Phone />
          </span>
          <input
            type="text"
            className="pl-10 w-full py-3 pr-4 border border-light3 focus:outline-none focus:border-color2 rounded-full"
            name="phone"
            id="phone"
            placeholder="Gunakan phone number saat Anda register"
          />
        </div>
      </div>

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
        <span>Cari Detail Booking Anda</span>
      </button>
    </form>
  );
};

export default Content;
