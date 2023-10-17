import Nav from "@/components/Nav";
import { CheckMorePage } from "@/components/check-more";
import { DialogDemo } from "@/components/popup";
import React from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function MorePage() {
  const GetData = await prisma.details.findMany();
  return (
    <main className="p-4">
      <Nav />
      <section className="py-8 flex flex-col items-center text-center">
        <CheckMorePage Data={GetData} />
        <footer className="w-full h-24 fixed left-0 bottom-0 flex justify-end items-center p-8 text-2xl">
          <nav>
            <DialogDemo />
          </nav>
        </footer>
      </section>
    </main>
  );
}
