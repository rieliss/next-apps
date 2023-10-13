import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import MenuBar from "@/components/menu";
import { Button } from "@/components/ui/button";
import { RocketIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="p-4">
      <Nav />
      <section className="py-12 flex flex-col items-center text-center gap-8">
        <h1 className="text-4xl font-bold">
          <RocketIcon />
          Singapore Travel Guide
        </h1>
        <p className="text-2xl text-primary px-48">
          This website is intended to be a travel guide for ttlazymimi and
          fangliss <br /> on their B Day Trip, Singapore, 3 days 2 nights.
        </p>
        {/* <div className="flex gap-6 py-6"></div> */}
      </section>
      {/* <div className="flex gap-6 py-6 items-center justify-center">
        <Button variant={"secondary"}>Learn more</Button>
        <Button>Enroll Now</Button>
      </div> */}
      <MenuBar />
      <Footer />
    </main>
  );
}
