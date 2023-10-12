import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/toggle-mode";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-24 ">
      <Nav />
      <section className="py-12 flex flex-col items-center text-center gap-8">
        <h1 className="text-4xl font-bold">Love you na ttuunn 🌼💕</h1>
        <p className="text-2xl text-primary">
          All of your contact information and certificate or everything.
        </p>
        <div className="flex gap-6 py-6"></div>
      </section>
      <div className="flex gap-6 py-6 items-center justify-center">
        <Button variant={"secondary"}>Learn more</Button>
        <Button>Enroll Now</Button>
      </div>
    </main>
  );
}
