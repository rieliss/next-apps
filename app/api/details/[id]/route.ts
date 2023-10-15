import { connect } from "@/lib/mongodb";
import Topic from "@/models/topic";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, { params }: any) {
  try {
    const id = params.id;
    const { newTitle: title, newDescription: description } = await req.json();
    await connect();
    await Topic.findByIdAndUpdate(id, { title, description });
    return NextResponse.json({ message: "Topic Updated" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(req: NextRequest, { params }: any) {
  try {
    const id = params.id;
    await connect();
    const topics = await Topic.findOne({ _id: id });
    return NextResponse.json({ topics }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
