import User from "@/Database/Db";
import { NextResponse } from "next/server";

export async function GET(request, content) {
  console.log(request);
  let UserId = content.params.SingleUser;
  const filterdata = User.filter((item) => item.id == UserId);
  if (filterdata.length <= 0) {
    return NextResponse.json({ result: "No Data Found" });
  } else {
    return NextResponse.json(filterdata);
  }
}
export async function PUT(request, content) {
  let payload = await request.json();
  let userid = content.params.SingleUser;
  console.log(payload);
  return NextResponse.json({ result: `data Added Successfully in ${payload}` });
}
export async function DELETE(request, content) {
  let userid = content.params.SingleUser;

  return NextResponse.json({
    result: `data Deleted Successfully in ${userid}`,
  });
}
