import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import MenuBar from "@/components/menu";
import { Button } from "@/components/ui/button";
import { RocketIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="p-4">
      <Nav />
      <section className="py-8 flex flex-col items-center text-center gap-8">
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
