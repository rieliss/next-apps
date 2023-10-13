"use client";
import Image from "next/image";
import { ModeToggle } from "./ui/toggle-mode";
import { SparklesIcon } from "@heroicons/react/24/solid";

export default function Nav() {
  return (
    <header>
      <nav>
        <ul className="flex items-center justify-between">
          <li>
            <a href="/" target="_self" rel="noopener noreferrer">
              {" "}
              <SparklesIcon className="h-8 w-8 text-dark:invert" />
            </a>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
