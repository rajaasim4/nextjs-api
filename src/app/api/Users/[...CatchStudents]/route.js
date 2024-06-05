import { NextResponse } from "next/server";
//This is Catch all Segments in the Next Js APi Routes
export async function GET(request, content) {
  const id = content.params.CatchStudents;

  return NextResponse.json({ result: "Data Found" });
}
