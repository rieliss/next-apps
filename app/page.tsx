import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import MenuBar from "@/components/menu";
import { RocketIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-6">
      <Nav />
      <section className="py-8 flex flex-col items-center text-center gap-4">
        <h1 className="text-2xl font-bold">
          <RocketIcon />
          Singapore Travel Guide
        </h1>
        <p className="text-xs text-primary">
          This website is intended to be a travel guide <br /> for ttlazymimi
          and fangliss <br /> on their B Day Trip, Singapore, 3 days 2 nights.
        </p>
        <MenuBar />
        <Footer />
      </section>
    </main>
  );
}
