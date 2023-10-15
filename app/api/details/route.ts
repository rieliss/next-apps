import Topic from "@/models/topic";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    const { title, description } = await request.json();
    await connect();
    await Topic.create({ title, description });
    return NextResponse.json({ message: "Topic Created" }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    await connect();
    const topics = await Topic.find();
    return NextResponse.json({ topics }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const id = await request.nextUrl.searchParams.get("id");
    await connect();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({ message: "Topic Deleted" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
