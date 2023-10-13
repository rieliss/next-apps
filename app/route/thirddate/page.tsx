"use client";
import Back from "@/components/back-page";
import { AccordionDemo } from "@/components/todo";

import { useRouter } from "next/navigation";
import React from "react";

const ThirdDatePage = () => {
  const router = useRouter();
  return (
    <main className="p-4">
      <Back />
      <section className="py-2 flex flex-col items-center text-center gap-8"></section>
    </main>
  );
};

export default ThirdDatePage;
