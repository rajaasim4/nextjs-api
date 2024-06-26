import User from "@/Models/Users";
import { NextResponse } from "next/server";
//Get Api Get Data based upon User
export async function GET(request, content) {
  let UserId = content.params.SingleUser;
  console.log(UserId);
  const filterdata = await User.findOne({ _id: UserId });
  if (filterdata.length <= 0) {
    return NextResponse.json({ result: "No Data Found" });
  } else {
    return NextResponse.json(filterdata);
  }
}
//Put or Update Api
export async function PUT(request, content) {
  let payload = await request.json();
  let userid = content.params.SingleUser;

  try {
    const update = await User.updateOne(
      { _id: userid },
      {
        $set: {
          name: payload.name,
          age: payload.age,
          email: payload.email,
          education: payload.education,
          phoneNumber: payload.phoneNumber,
        },
      }
    );
    return NextResponse.json({
      result: `data Added Successfully in ${payload}`,
    });
  } catch (error) {
    return NextResponse.json({
      result: `Error Occured While Updating the Data`,
    });
  }
}
//Delete Api
export async function DELETE(request, content) {
  let userid = content.params.SingleUser;
  try {
    const deletedUser = await User.deleteOne({ _id: userid });
  } catch (error) {}
  return NextResponse.json({
    result: `data Deleted Successfully in ${userid}`,
  });
}
