import User from "@/Database/Db";
import { NextResponse } from "next/server";

export async function GET() {
  const data = User;
  return NextResponse.json(data);
}

export async function POST(request) {
  const data = await request.json();
  console.log(data);
  if (!data.age || !data.name) {
    return NextResponse.json(
      { result: "Please Fill the Required Data" },
      { status: 400 }
    );
  }
  return NextResponse.json({ result: "This is Post API" });
}
