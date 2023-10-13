"use client";
import Image from "next/image";
import { ModeToggle } from "@/components/ui/toggle-mode";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <header>
      <nav>
        <ul className="flex items-center justify-between">
          <li>
            <a
              className="pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto lg:p-0"
              href="/"
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
