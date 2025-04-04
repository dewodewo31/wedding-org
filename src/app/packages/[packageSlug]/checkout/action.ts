import { redirect } from "next/navigation";

interface File {
  size: number;
  type: string;
  name: string;
  lastModified: number;
}

export async function booking(prevState: any, formData: FormData) {
  if (formData.get("name") === "")
    return {
      message: "Nama Tidak Boleh Kosong!",
      status: 400,
    };

  if (formData.get("email") === "")
    return {
      message: "Email Tidak Boleh Kosong!",
      status: 400,
    };

  if (formData.get("phone") === "")
    return {
      message: "No. Telepon Tidak Boleh Kosong!",
      status: 400,
    };

  if (formData.get("started_at") === "")
    return {
      message: "Anda Belum Memilih Tanggal Mulai Acara",
      status: 400,
    };

  const files = formData.get("proof") as File;
  if (files.size === 0)
    return {
      message: "Wajib Melampirkan Bukti Pembayaran",
      status: 400,
    };

  const res = await fetch(`http://127.0.0.1:8000/api/booking-transaction`, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  return redirect(
    `/packages/${formData.get("slug")}/checkout/success?bookingId=${
      data.data.booking_trx_id
    }`
  );
}
