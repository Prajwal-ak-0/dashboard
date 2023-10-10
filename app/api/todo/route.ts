import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { NextApiRequest } from "next";

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
      const calendar = await db.todo.create({
        data: {
          title,
          description,
          userId: userId,
        },
      });

      return NextResponse.json(calendar);
    } catch (error) {
      return new NextResponse("Something went wrong in [TODO_POST]", {
        status: 500,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function GET(request: Request, req: NextApiRequest) {
  try {
    const todo = await db.todo.findMany();

    return NextResponse.json(todo);
  } catch (error) {
    console.log(error);
    return new NextResponse("Something went wrong in [TODO_POST]", {
      status: 500,
    });
  }
}
