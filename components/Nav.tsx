"use client";
import Image from "next/image";
import { ModeToggle } from "./ui/toggle-mode";
import { Button } from "./ui/button";
import {
  RocketIcon,
  ExclamationTriangleIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";

export default function Nav() {
  return (
    <header>
      <nav>
        <ul className="flex items-center justify-between">
          <li>
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
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
