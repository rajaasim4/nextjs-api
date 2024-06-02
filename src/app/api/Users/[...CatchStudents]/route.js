import { NextResponse } from "next/server";

export async function GET(request, content) {
  const id = content.params.CatchStudents;
  console.log(id);
  return NextResponse.json({ result: "Data Found" });
}
