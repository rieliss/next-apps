"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function CreateMore(e: any) {
  try {
    await prisma.more.create({
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

export async function UpdateStatus(e: any) {
  try {
    const Check = await prisma.more.findUnique({
      where: {
        id: e,
      },
    });

    if (Check?.status) {
      await prisma.more.update({
        where: {
          id: e,
        },
        data: {
          status: false,
        },
      });
    } else {
      await prisma.more.update({
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
