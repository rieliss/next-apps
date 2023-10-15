"use client";
import Image from "next/image";
import { ModeToggle } from "@/components/ui/toggle-mode";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";

export default function Back() {
  return (
    <header>
      <nav>
        <ul className="flex items-center justify-between">
          <li>
            <ModeToggle />
          </li>
          <li>
            <a href="/route" target="_self" rel="noopener noreferrer">
              {" "}
              <ArrowLeftCircleIcon className="h-8 w-8 text-dark:invert" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
