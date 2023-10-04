import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, passone, passtwo } = body;

    if (!username || !passone || !passtwo) return NextResponse.error();

    const compare = await bcrypt.compare(passone, passtwo);

    if (!compare) {
      console.log("Password Does Not Match");
      return NextResponse.error();
    }

    const user = await db.user.findUnique({
      where: {
        username: username,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
  }
}
