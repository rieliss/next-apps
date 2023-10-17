"use client";
import Nav from "@/components/Nav";
import PlacePage from "@/components/place";
import { ComboboxDemo } from "@/components/select-location";
import { useRouter } from "next/navigation";
import React from "react";

const LocationPage = () => {
  const router = useRouter();
  return (
    <main className="p-4">
      <Nav />
      <section className="py-2 flex flex-col items-center text-center gap-8">
        {/* <div className="flex items-center">
          <ComboboxDemo />
        </div> */}
        <div className="grid text-center grid-cols-2 gap-8 lg:max-w-4xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <PlacePage
            Name="Universal Studios Singapore"
            Link="https://maps.app.goo.gl/8sFXimWMXu76TWhB6"
            Img="/univer.jpg"
            Description="Universal Studios Singapore is Southeast Asia’s first and only Universal Studios theme park."
          />
          {/* <PlacePage Name="" Link="" Img="" Description="" />
          <PlacePage Name="" Link="" Img="" Description="" />
          <PlacePage Name="" Link="" Img="" Description="" />
          <PlacePage Name="" Link="" Img="" Description="" />
          <PlacePage Name="" Link="" Img="" Description="" />
          <PlacePage Name="" Link="" Img="" Description="" />
          <PlacePage Name="" Link="" Img="" Description="" />
          <PlacePage Name="" Link="" Img="" Description="" /> */}
        </div>
      </section>
    </main>
  );
};

export default LocationPage;
