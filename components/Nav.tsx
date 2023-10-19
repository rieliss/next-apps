"use client";
import Image from "next/image";
import { ModeToggle } from "./ui/toggle-mode";
import { SparklesIcon, HomeIcon } from "@heroicons/react/24/solid";

export default function Nav() {
  return (
    <header>
      <nav>
        <ul className="flex items-center justify-between">
          <li>
            <ModeToggle />
          </li>
          <li>
            <a href="/" target="_self" rel="noopener noreferrer">
              {" "}
              <Image
                src="/mainimg.png"
                width={60}
                height={0}
                alt="Picture of the author"
                className="rounded"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
