import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { NextApiRequest } from "next";
import { getAuth } from "@clerk/nextjs/server";

export async function POST(request: Request, req: NextApiRequest) {
  try {
    const body = await request.json();

    const { title, description, userId } = body;

    if (!userId) {
      return new NextResponse("Unauthorized!", { status: 500 });
    }

    if (!title || !description) {
      return new NextResponse("Title or description is missing!", {
        status: 500,
      });
    }

    try {
      const calendar = await db.calendarEvent.create({
        data: {
          title,
          description,
          userId: userId,
        },
      });

      return NextResponse.json(calendar);
    } catch (error) {
      return new NextResponse("Something went wrong in [CALENDAR_POST]", {
        status: 500,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function GET(request: Request, req: NextApiRequest) {
  try {
    const calendar = await db.calendarEvent.findMany();

    return NextResponse.json(calendar);
  } catch (error) {
    console.log(error);
    return new NextResponse("Something went wrong in [CALENDAR_POST]", {
      status: 500,
    });
  }
}
