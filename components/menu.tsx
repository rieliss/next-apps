import Image from "next/image";

export default function MenuBar() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="grid grid-cols-2 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left p-2 mt-12">
        <a
          href="/route"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_self"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 font-semibold`}>Route </h2>
          <p className={`m-0 max-w-[30ch] text-xs opacity-50`}>
            Various information about traveling and things to prepare.
          </p>
        </a>

        <a
          href="/placeandapps"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_self"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 font-semibold`}>Places & Applications </h2>
          <p className={`m-0 max-w-[30ch] text-xs opacity-50`}>
            All places on the trip and all necessary applications.
          </p>
        </a>

        <a
          href="/tickets"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_self"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 font-semibold`}>Tickets</h2>
          <p className={`m-0 max-w-[30ch] text-xs opacity-50`}>
            Airplane tickets and various documents required for the trip.
          </p>
        </a>

        <a
          href="/more"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_self"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 font-semibold`}>Other </h2>
          <p className={`m-0 max-w-[30ch] text-xs opacity-50`}>
            Additional information you should know.
          </p>
        </a>
      </div>
    </main>
  );
}
