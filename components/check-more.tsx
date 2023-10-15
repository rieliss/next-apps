"use client";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {
  Topic: string;
  Description: string;
  Link: string;
};

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/details", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export async function CheckMorePage() {
  const { topics } = await getTopics();
  return (
    <>
      {Array.isArray(topics) ? (
        topics.map((data: any, index: number) => (
          <div className="items-top flex space-x-4" key={index}>
            <Checkbox />
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
    </>
  );
}
