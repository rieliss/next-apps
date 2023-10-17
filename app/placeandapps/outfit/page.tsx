"use client";
import Nav from "@/components/Nav";
import Image from "next/image";
import React from "react";

const OutfitPage = () => {
  return (
    <main className="p-4">
      <Nav />
      <section className="py-2 flex flex-col items-center text-center gap-8">
        <div className="grid text-center grid-cols-1 gap-8 lg:max-w-4xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="/placeandapps/outfit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/out1.png"
              width={350}
              height={0}
              alt=""
              className="rounded"
            />
          </a>
          <a
            href="/placeandapps/outfit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/out2.png"
              width={350}
              height={0}
              alt=""
              className="rounded"
            />
          </a>
          <a
            href="/placeandapps/outfit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/out3.png"
              width={350}
              height={0}
              alt=""
              className="rounded"
            />
          </a>
          <a
            href="/placeandapps/outfit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/outfit_night.png"
              width={350}
              height={0}
              alt=""
              className="rounded"
            />
          </a>
        </div>
      </section>
    </main>
  );
};

export default OutfitPage;
