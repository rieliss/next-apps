"use client";
import Nav from "@/components/Nav";
import React from "react";
import {
  HomeIcon,
  RocketIcon,
  SunIcon,
  MoonIcon,
  LightningBoltIcon,
  FaceIcon,
  StarFilledIcon,
  StarIcon,
  HeartIcon,
  HeartFilledIcon,
} from "@radix-ui/react-icons";

const TicketsPage = () => {
  return (
    <main className="p-4">
      <Nav />
      <section className="py-2 flex flex-col items-center text-center gap-8">
        <div className="grid text-center p-2 grid-cols-2 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="/2.pdf"
            className="group rounded-lg border border-transparent px-5 py-12 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_self"
            rel="noopener noreferrer"
          >
            <LightningBoltIcon />
            <h2 className={`mb-3 font-semibold`}>Inbound flight ticket</h2>
            <p className={`m-0 max-w-[30ch] text-xs opacity-50`}>
              Don Mueang International Airport, Terminal 1, AirAsia, FD359 --
              Changi Airport ,Terminal 4
            </p>
            <p className={`m-0 max-w-[30ch] text-xs opacity-50`}>
              06:10 DMK GMT+07 -- 09:35 SIN GMT+08
            </p>
          </a>

          <a
            href="/1.pdf"
            className="group rounded-lg border border-transparent px-5 py-12 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_self"
            rel="noopener noreferrer"
          >
            <MoonIcon />
            <h2 className={`mb-3 font-semibold`}>Outbound flight ticket</h2>
            <p className={`m-0 max-w-[30ch] text-xs opacity-50`}>
              Changi Airport ,Terminal 4 -- Don Mueang International Airport
              ,Terminal 1
            </p>
            <p className={`m-0 max-w-[30ch] text-xs opacity-50`}>
              22:10 SIN GMT+08 -- 23:40 DMK GMT+07
            </p>
          </a>

          <a
            href="/3.pdf"
            className="group rounded-lg border border-transparent px-5 py-12 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_self"
            rel="noopener noreferrer"
          >
            <RocketIcon />
            <h2 className={`mb-3 font-semibold`}>Universal Studio Ticket</h2>
            <p className={`m-0 max-w-[30ch] text-xs opacity-50`}>
              Timings: 11 am - 6 pm, closed on Tuesday
            </p>
          </a>
          <a
            href="/4.pdf"
            className="group rounded-lg border border-transparent px-5 py-12 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_self"
            rel="noopener noreferrer"
          >
            <HomeIcon />
            <h2 className={`mb-3 font-semibold`}>Hostel Booking</h2>
            <p className={`m-0 max-w-[30ch] text-xs opacity-50`}>
              Hostel Booking Confirmation.
            </p>
          </a>
          <a
            href="/5.pdf"
            className="group rounded-lg border border-transparent px-5 py-12 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_self"
            rel="noopener noreferrer"
          >
            <StarIcon />
            <h2 className={`mb-3 font-semibold`}>SG Arrival Card</h2>
            <p className={`m-0 max-w-[30ch] text-xs opacity-50`}>
              DE Number:Y0846L0214 - Ramida
            </p>
            <p className={`m-0 max-w-[30ch] text-xs opacity-50`}>
              DE Number:Y0846L0312 - Khessarin
            </p>
          </a>
          <a
            href="/7.pdf"
            className="group rounded-lg border border-transparent px-5 py-12 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_self"
            rel="noopener noreferrer"
          >
            <HeartIcon />
            <h2 className={`mb-3 font-semibold`}>SG Arrival Card th.ver</h2>
            <p className={`m-0 max-w-[30ch] text-xs opacity-50`}>
              DE Number:Y0846L0214 - Ramida
            </p>
            <p className={`m-0 max-w-[30ch] text-xs opacity-50`}>
              DE Number:Y0846L0312 - Khessarin
            </p>
          </a>
          <a
            href="/6.pdf"
            className="group rounded-lg border border-transparent px-5 py-12 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_self"
            rel="noopener noreferrer"
          >
            <FaceIcon />
            <h2 className={`mb-3 font-semibold`}>Sim Card Booking</h2>
            <p className={`m-0 max-w-[30ch] text-xs opacity-50`}>
              M1 4G SIM/eSIM (SG Airport OR City Pick Up) for Singapore
            </p>
            <p className={`m-0 max-w-[30ch] text-xs opacity-50`}>
              Singapore · Changi Airport · 15 days · 100 GB · Calls included
              (E-SIM)
            </p>
          </a>
        </div>
      </section>
    </main>
  );
};

export default TicketsPage;
