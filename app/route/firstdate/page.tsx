"use client";
import Back from "@/components/back-page";
import { AccordionDemo } from "@/components/todo";
import { useRouter } from "next/navigation";
import React from "react";

const FirstDayPage = () => {
  const router = useRouter();
  return (
    <main className="p-4">
      <Back />
      <section className="p-4 mt-4 flex flex-col items-center text-center gap-2">
        <AccordionDemo
          NameList="Check in at Airports"
          Topic="Goto Santosa"
          Description="By bus"
          Time="12:00 pm"
        />
        <AccordionDemo
          NameList="Goto Santosa"
          Topic="Goto Santosa"
          Description="By bus"
          Time="12:00 pm"
        />
        <AccordionDemo
          NameList="Goto Santosa"
          Topic="Goto Santosa"
          Description="By bus"
          Time="12:00 pm"
        />
        <AccordionDemo
          NameList="Goto Santosa"
          Topic="Goto Santosa"
          Description="By bus"
          Time="12:00 pm"
        />
        <AccordionDemo
          NameList="Goto Santosa"
          Topic="Goto Santosa"
          Description="By bus"
          Time="12:00 pm"
        />
        <AccordionDemo
          NameList="Goto Santosa"
          Topic="Goto Santosa"
          Description="By bus"
          Time="12:00 pm"
        />
        <AccordionDemo
          NameList="Goto Santosa"
          Topic="Goto Santosa"
          Description="By bus"
          Time="12:00 pm"
        />
      </section>
    </main>
  );
};

export default FirstDayPage;
