"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function CreateMore(e: any) {
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

export async function UpdateStatus(e: any) {
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

export async function CreateFirst(e: any) {
  try {
    await prisma.firstdate.create({
      data: {
        title: e.title,
        description: e.description,
        time: e.time,
      },
    });

    revalidatePath("/route/firstdate");
  } catch (error: any) {
    console.log(error);
  }
}

export async function UpdateStatusFirst(e: any) {
  try {
    const Check = await prisma.firstdate.findUnique({
      where: {
        id: e,
      },
    });

    if (Check?.status) {
      await prisma.firstdate.update({
        where: {
          id: e,
        },
        data: {
          status: false,
        },
      });
    } else {
      await prisma.firstdate.update({
        where: {
          id: e,
        },
        data: {
          status: true,
        },
      });
    }

    revalidatePath("/route/firstdate");
  } catch (error: any) {
    console.log(error);
  }
}
