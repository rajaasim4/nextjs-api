// import User from "@/Database/Db";
import ConnectDB from "@/Database/Connection";
import User from "@/Models/Users";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await ConnectDB();
    const data = await User.find({});
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { result: "Error occurred while fetching data" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const data = await request.json();

  if (!data.age || !data.name) {
    return NextResponse.json(
      { result: "Please Fill the Required Data" },
      { status: 400 }
    );
  }
  try {
    const user = new User(data);
    const savedUser = await user.save();
    console.log("Saved User:", savedUser); // Log the saved user to verify it
    const allUsers = await User.find({}); // Fetch all users to verify the data
    console.log("All Users:", allUsers);
    return NextResponse.json({
      result: "Data Saved Successfully",
      user: savedUser,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { result: "Error Occured While Saving data" },
      { status: 500 }
    );
  }
}
