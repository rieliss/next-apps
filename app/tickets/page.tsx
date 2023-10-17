import Nav from "@/components/Nav";
import AddApplication from "@/components/apps-add";
import React from "react";

const TicketsPage = () => {
  return (
    <main className="p-4">
      <Nav />
      <section className="py-2 flex flex-col items-center text-center gap-8">
        {/* <div className="flex items-center">
          <ComboboxDemo />
        </div> */}
        <div className="grid text-center grid-cols-2 gap-8 lg:max-w-4xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
      </section>
    </main>
  );
};

export default TicketsPage;
