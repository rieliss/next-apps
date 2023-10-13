import Image from "next/image";

export default function MenuBar() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="/route"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Route </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Various information about traveling and things to prepare.
          </p>
        </a>

        <a
          href="/location"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Location </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Various places to go and routes, including transportation!&nbsp;
          </p>
        </a>

        <a
          href="/expenses"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Applications</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Applications that you should have when going to Singapore.
          </p>
        </a>

        <a
          href="/more"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Other </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Additional information you should know.
          </p>
        </a>
      </div>
    </main>
  );
}