"use client";
import Nav from "@/components/Nav";
import { useRouter } from "next/navigation";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Here is your toast.");

const ApplicationPage = () => {
  const router = useRouter();
  return (
    <main className="p-4">
      <Nav />
      <section className="py-8 flex flex-col items-center text-center gap-8">
        <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left p-4">
          Application
        </div>
        <button onClick={notify}>Make me a toast</button>
        <Toaster />
      </section>
    </main>
  );
};

export default ApplicationPage;
