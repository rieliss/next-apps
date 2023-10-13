"use client";
import { useRouter } from "next/navigation";
import React from "react";

const MorePage = () => {
  const router = useRouter();
  return (
    <section className="flex justify-between gap-x-6 px-3 py-10 sm:px-6 lg:px-16 lg:py:24">
      <h1>More</h1>
    </section>
  );
};

export default MorePage;
