import { redirect } from "next/navigation";

export async function checkBooking(prevState: any, formData: FormData) {
  if (formData.get("booking_trx_id") === "")
    return {
      message: "Nomor Booking Anda Tidak Boleh Kosong!",
      status: 400,
    };

  if (formData.get("phone") === "")
    return {
      message: "Nomor HP Anda Tidak Boleh Kosong",
      status: 400,
    };

  return redirect(
    `/bookings/${formData.get("booking_trx_id")}?phone=${formData.get("phone")}`
  );
}
