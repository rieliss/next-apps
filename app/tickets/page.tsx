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
  const DownTick1 = () => {
    // using Java Script method to get PDF file
    fetch("2.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "2.pdf";
        alink.click();
      });
    });
  };
  const DownTick2 = () => {
    // using Java Script method to get PDF file
    fetch("1.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "1.pdf";
        alink.click();
      });
    });
  };
  const DownTick3 = () => {
    // using Java Script method to get PDF file
    fetch("3.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "3.pdf";
        alink.click();
      });
    });
  };
  const DownTick4 = () => {
    // using Java Script method to get PDF file
    fetch("4.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "4.pdf";
        alink.click();
      });
    });
  };
  return (
    <main className="p-4">
      <Nav />
      <section className="py-2 flex flex-col items-center text-center gap-8">
        <div className="grid text-center p-2 grid-cols-2 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            onClick={DownTick1}
            href="/tickets"
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
            onClick={DownTick2}
            href="/tickets"
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
            onClick={DownTick3}
            href="/tickets"
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
            onClick={DownTick4}
            href="/tickets"
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
        </div>
      </section>
    </main>
  );
};

export default TicketsPage;
