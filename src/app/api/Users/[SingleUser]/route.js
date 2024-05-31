import User from "@/Database/Db";
import { NextResponse } from "next/server";

export async function GET(request, content) {
  let UserId = content.params.SingleUser;
  const filterdata = User.filter((item) => item.id == UserId);
  if (filterdata.length <= 0) {
    return NextResponse.json({ result: "No Data Found" });
  } else {
    return NextResponse.json(filterdata);
  }
}
