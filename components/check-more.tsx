"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { UpdateStatus } from "@/function/details";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {
  Data: any;
};

export function CheckMorePage({ Data }: Props) {
  // console.log(Data);

  return (
    <div className="grid gap-5 leading-none">
      {Data ? (
        Data.map((data: any, index: number) => (
          <div className="items-top flex space-x-4" key={index}>
            <Checkbox
              onClick={async () => {
                await UpdateStatus(data.id);
              }}
              checked={data.status}
            />
            <div className="grid gap-1.5 leading-none">
              <span className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {data.title}
              </span>
              <p className="text-sm text-muted-foreground">
                {data.description}
              </p>
              {/* <p className="text-sm text-muted-foreground">{Link}</p> */}
            </div>
          </div>
        ))
      ) : (
        <p>Failed to fetch topics.</p>
      )}
    </div>
  );
}
