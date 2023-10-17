import Back from "@/components/back-page";
import { AccordionFirst } from "@/components/firstdate/todo";
import { useRouter } from "next/navigation";
import React from "react";
import { PrismaClient } from "@prisma/client";
import { DialogAddDatetime } from "@/components/firstdate/Dialog-add";

const prisma = new PrismaClient();

export default async function FirstDayPage() {
  const GetData = await prisma.firstdate.findMany();
  return (
    <main className="p-4">
      <Back />
      <section className="p-4 mt-4 flex flex-col text-center gap-2">
        <AccordionFirst Data={GetData} />
        <footer className="w-full h-24 fixed left-0 bottom-0 flex justify-end items-center p-8 text-2xl">
          <nav>
            <DialogAddDatetime />
          </nav>
        </footer>
      </section>
    </main>
  );
}
