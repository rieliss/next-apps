"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ApplicationPage = () => {
  const router = useRouter();
  return (
    <section className="px-5 py-10 sm:px-6 lg:px-16 lg:py:24">
      Application
    </section>
  );
};

export default ApplicationPage;
