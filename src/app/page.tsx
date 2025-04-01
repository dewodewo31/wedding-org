import Header from "@/components/Header";
import WeddingPackages from "@/components/WeddingPackages";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-16">
      <Header />
      <section className="">
      <WeddingPackages show="popular" type="slider"/>
      </section>
    </main>
  );
}
