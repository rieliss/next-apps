import React from "react";
import Image from "next/image";
import { Description } from "@radix-ui/react-toast";

type Props = {
  Img: string;
  Name: string;
  Description: string;
  Link: string;
};

export default function PlacePage({ Img, Name, Description, Link }: Props) {
  return (
    <div className="flex items-center justify-center">
      <a
        href={Link}
        className="flex flex-col bg-gray-100 rounded-lg p-2 h-full items-center group border border-transparent px-4 py-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/univer.jpg"
          width={150}
          height={0}
          alt="Picture of the author"
        />
        <h2 className={`mt-3 font-semibold`}>{Name}</h2>
        <p className={`max-w-[30ch] text-xs opacity-50`}>{Description}</p>
      </a>
    </div>
  );
}
