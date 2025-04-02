import Header from "@/components/Header";
import WeddingPackages from "@/components/WeddingPackages";
import Thumbsup from "@/app/assets/images/thumbsup.svg";
import Creditcard from "@/app/assets/images/creditcard.svg";
import Place from "@/app/assets/images/place.svg";
import Link from "next/link";
import Cities from "@/components/Cities";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-16">
      <Header />
      <section className="">
        <WeddingPackages show="popular" type="slider" />
      </section>

      <section className="container mx-auto flex flex-col">
        <h2 className="text-3xl font-bold max-w-md mx-auto text-center mb-8">
          Alasan Mereka Memilih WeddingOrg
        </h2>
        <div className="grid grid-cols-3 gap-10">
          <div className="flex flex-col border rounded-3xl p-8 gap-y-5 items-start">
            <span className="text-color2">
              <Thumbsup />
            </span>
            <span className="flex flex-col gap-y-2">
              <h6 className="font-bold text-xl">
                Dipercaya oleh Lebih dari 10.000 Pelanggan
              </h6>
              <p className="">
                Kami telah melayani lebih dari 10.000 pelanggan dengan layanan
                berkualitas tinggi, memastikan pengalaman terbaik bagi setiap
                pengguna kami.
              </p>
            </span>
            <Link href="#" className="text-color2 hover:underline">
              Pelajari Lebih Lanjut
            </Link>
          </div>

          <div className="flex flex-col border rounded-3xl p-8 gap-y-5 items-start">
            <span className="text-color2">
              <Creditcard />
            </span>
            <span className="flex flex-col gap-y-2">
              <h6 className="font-bold text-xl">
                Fleksibilitas Jadwal & Metode Pembayaran
              </h6>
              <p className="">
                Pilih tanggal yang sesuai dengan kebutuhan Anda serta nikmati
                kemudahan dalam melakukan pembayaran dengan berbagai metode yang
                kami sediakan.
              </p>
            </span>
            <Link href="#" className="text-color2 hover:underline">
              Pelajari Lebih Lanjut
            </Link>
          </div>

          <div className="flex flex-col border rounded-3xl p-8 gap-y-5 items-start">
            <span className="text-color2">
              <Place />
            </span>
            <span className="flex flex-col gap-y-2">
              <h6 className="font-bold text-xl">
                Layanan Tersedia di Berbagai Kota di Indonesia
              </h6>
              <p className="">
                Layanan kami telah hadir di berbagai kota di seluruh Indonesia,
                memberikan kemudahan akses bagi Anda di mana pun berada.
              </p>
            </span>
            <Link href="#" className="text-color2 hover:underline">
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto flex flex-col">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold max-w-sm">
            Our Latest & Best Wedding Packages
          </h2>
          <Link
            href="/packages"
            className="border border-dark1 px-5 py-3 text-center rounded-full font-semibold"
          >
            Explore All
          </Link>
        </div>
        <WeddingPackages show="newest" type="grid" />
      </section>

      <section className="bg-light2 py-16">
        <div className="container px-32 mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold max-w-sm">
              Browse Packages City Recommendation
            </h2>
            <Link
              href={`${process.env.HOST_APP}/cities`}
              className="border border-dark1 px-5 py-3 text-center rounded-full font-semibold"
            >
              Explore All
            </Link>
          </div>
          <Cities/>
        </div>
      </section>
    </main>
  );
}
