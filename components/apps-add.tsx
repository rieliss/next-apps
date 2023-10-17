import React from "react";
import Image from "next/image";

type Props = {
  Img: string;
  Apps: string;
  Description: string;
  Link: string;
};

export default function AddApplication({
  Img,
  Apps,
  Description,
  Link,
}: Props) {
  return (
    <div className="flex items-center justify-center text-center">
      <a
        href={Link}
        className="flex flex-col rounded-lg p-2 h-full items-center group border border-transparent px-4 py-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={`${Img}`}
          width={150}
          height={0}
          alt="Picture of the author"
        />

        <h2 className={`mt-3 font-semibold text-[12px] text-dark:invert`}>
          {Apps}
        </h2>
        <p className={`max-w-[30ch] text-[10px] opacity-50 text-dark:invert`}>
          {Description}
        </p>
      </a>
    </div>
  );
}
