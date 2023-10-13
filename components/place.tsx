import React, { useState } from "react";
import Image from "next/image";
import { Description } from "@radix-ui/react-toast";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button } from "@/components/ui/button";

type Props = {
  Img: string;
  Name: string;
  Description: string;
  Link: string;
};

export default function PlacePage({ Img, Name, Description, Link }: Props) {
  const [copyText, setCopyText] = useState("");
  return (
    <div className="flex items-center justify-center text-center">
      <a
        href={Link}
        className="flex flex-col rounded-lg p-2 h-full items-center group border border-transparent px-4 py-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/univer.jpg"
          width={150}
          height={0}
          alt="Picture of the author"
        />

        <h2 className={`mt-3 font-semibold text-[12px] text-dark:invert`}>
          {Name}
        </h2>
        <p className={`max-w-[30ch] text-[10px] opacity-50 text-dark:invert`}>
          {Description}
        </p>
      </a>
    </div>
  );
}
