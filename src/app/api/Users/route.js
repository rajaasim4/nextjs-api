import User from "@/Database/Db";
import { NextResponse } from "next/server";

export async function GET() {
  const data = User;
  return NextResponse.json(data);
}
