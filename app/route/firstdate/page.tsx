import Back from "@/components/back-page";
import { AccordionDemo } from "@/components/todo";
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
      <DialogAddDatetime />
      <section className="p-4 mt-4 flex flex-col text-center gap-2">
        <AccordionDemo Data={GetData} />
      </section>
    </main>
  );
}
