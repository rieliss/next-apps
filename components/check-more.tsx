"use client";

import { Checkbox } from "@/components/ui/checkbox";

type Props = {
  Topic: string;
  Description: string;
  Link: string;
};

export function CheckMorePage({ Topic, Description, Link }: Props) {
  return (
    <div className="items-top flex space-x-4">
      <Checkbox />
      <div className="grid gap-1.5 leading-none">
        <span className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {Topic}
        </span>
        <p className="text-sm text-muted-foreground">{Description}</p>
        <p className="text-sm text-muted-foreground">{Link}</p>
      </div>
    </div>
  );
}
