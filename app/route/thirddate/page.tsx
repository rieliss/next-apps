import Back from "@/components/back-page";
import { AccordionThird } from "@/components/thirddate/todo";
import { DialogAddDatetime } from "@/components/thirddate/Dialog-add";
import { PrismaClient } from "@prisma/client";
import React from "react";

const prisma = new PrismaClient();

export default async function ThirdDatePage() {
  const GetData = await prisma.thirddate.findMany();
  return (
    <main className="p-4">
      <Back />
      <section className="p-4 mt-4 flex flex-col text-center gap-2">
        <AccordionThird Data={GetData} />
        <footer className="w-full h-24 fixed left-0 bottom-0 flex justify-end items-center p-8 text-2xl">
          <nav>
            <DialogAddDatetime />
          </nav>
        </footer>
      </section>
    </main>
  );
}
