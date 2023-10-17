"use client";
import Nav from "@/components/Nav";
import AddApplication from "@/components/apps-add";
import React from "react";

const ApplicationPage = () => {
  return (
    <main className="p-4">
      <Nav />
      <section className="py-2 flex flex-col items-center text-center gap-8">
        {/* <div className="flex items-center">
          <ComboboxDemo />
        </div> */}
        <div className="grid text-center grid-cols-2 gap-8 lg:max-w-4xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <AddApplication
            Apps="TraceTogether"
            Link="https://apps.apple.com/th/app/tracetogether/id1498276074?l=th"
            Img="/tracetogether.png"
            Description="TraceTogether supports Singapore’s efforts to fight the spread of COVID-19 through community-driven contact tracing."
          />
          {/* <AddApplication Apps="" Link="" Img="" Description="" />
          <AddApplication Apps="" Link="" Img="" Description="" />
          <AddApplication Apps="" Link="" Img="" Description="" />
          <AddApplication Apps="" Link="" Img="" Description="" />
          <AddApplication Apps="" Link="" Img="" Description="" />
          <AddApplication Apps="" Link="" Img="" Description="" />
          <AddApplication Apps="" Link="" Img="" Description="" />
          <AddApplication Apps="" Link="" Img="" Description="" /> */}
        </div>
      </section>
    </main>
  );
};

export default ApplicationPage;
