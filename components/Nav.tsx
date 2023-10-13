"use client";
import Image from "next/image";
import { ModeToggle } from "./ui/toggle-mode";

export default function Nav() {
  return (
    <header>
      <nav>
        <ul className="flex items-center justify-between">
          <li>
            <a
              className="pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto lg:p-0"
              href="https://twitter.com/knnel_"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <Image
                src="/logo.svg"
                alt="Logo"
                className="dark:invert"
                width={50}
                height={24}
                priority
              />
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
