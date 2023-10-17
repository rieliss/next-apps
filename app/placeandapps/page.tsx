import Nav from "@/components/Nav";
import { useRouter } from "next/navigation";
import React from "react";

const MainPage = () => {
  return (
    <main className="p-4">
      <Nav />
      <section className="py-8 flex flex-col items-center text-center gap-8">
        <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left p-4">
          <a
            href="/placeandapps/locations"
            className="group rounded-lg border border-transparent px-5 py-12 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_self"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>Locations</h2>
            <p className={`m-0 max-w-[30ch] text-xs opacity-50`}>
              Various places to go and routes, including transportation!&nbsp;
            </p>
          </a>

          <a
            href="/placeandapps/applications"
            className="group text-2xl rounded-lg border border-transparent px-5 py-12 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_self"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 font-semibold`}>Applications</h2>
            <p className={`m-0 max-w-[30ch] text-xs opacity-50`}>
              Applications that you should have when going to Singapore.
            </p>
          </a>
        </div>
      </section>
    </main>
  );
};

export default MainPage;
