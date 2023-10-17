import Nav from "@/components/Nav";
import { CheckMorePage } from "@/components/check-more";
import { DialogDemo } from "@/components/popup";
import React from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function MorePage() {
  const GetData = await prisma.more.findMany();
  return (
    <main className="p-4">
      <Nav />
      <section className="py-8 flex flex-col items-center text-center">
        <DialogDemo />
        <div className="grid text-left gap-8 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left p-4">
          <CheckMorePage Data={GetData} />
        </div>
      </section>
    </main>
  );
}
