import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import MenuBar from "@/components/menu";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="p-4">
      <Nav />
      <section className="py-12 flex flex-col items-center text-center gap-8">
        <h1 className="text-4xl font-bold">Shadcn is awesome</h1>
        <p className="text-2xl text-primary">
          Head-Picked theme that you can copy and paste into your apps.
        </p>
        <div className="flex gap-6 py-6"></div>
      </section>
      <div className="flex gap-6 py-6 items-center justify-center">
        <Button variant={"secondary"}>Learn more</Button>
        <Button>Enroll Now</Button>
      </div>
      <MenuBar />
      <Footer />
    </main>
  );
}
