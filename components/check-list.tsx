"use client";

import { Checkbox } from "@/components/ui/checkbox";

type Props = {
  Topic: string;
  Description: string;
  Time: string;
};

export function CheckboxWithText({ Topic, Description, Time }: Props) {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {Topic}
        </span>
        <p className="text-sm text-muted-foreground">{Description}</p>
      </div>
      <div className="grid gap-1.5 leading-none">
        <span>{Time}</span>
      </div>
    </div>
  );
}
