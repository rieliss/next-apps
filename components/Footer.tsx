"use client";
import Image from "next/image";
import { ModeToggle } from "./ui/toggle-mode";
import { Button } from "./ui/button";
import {
  InstagramLogoIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <footer className="w-full h-24 fixed left-0 bottom-0 flex justify-center items-center text-2xl">
      <nav>
        <ul className="gap-6 py-6 flex items-center justify-between">
          <li>
            <LinkedInLogoIcon href="/" />
          </li>
          <li>
            <InstagramLogoIcon href="https://instagram.com/fangliss" />
          </li>
          <li>
            <TwitterLogoIcon href="https://twitter.com/knnel_" />
          </li>
        </ul>
      </nav>
    </footer>
  );
}
