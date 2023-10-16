"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function CreateDetails(e: any) {
  try {
    await prisma.details.create({
      data: {
        title: e.title,
        description: e.description,
      },
    });

    revalidatePath("/more");
  } catch (error: any) {
    console.log(error);
  }
}

export async function UpdateStatus(e: string) {
  try {
    const Check = await prisma.details.findUnique({
      where: {
        id: e,
      },
    });

    if (Check?.status) {
      await prisma.details.update({
        where: {
          id: e,
        },
        data: {
          status: false,
        },
      });
    } else {
      await prisma.details.update({
        where: {
          id: e,
        },
        data: {
          status: true,
        },
      });
    }

    revalidatePath("/more");
  } catch (error: any) {
    console.log(error);
  }
}
