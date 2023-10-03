import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getAuth } from "@clerk/nextjs/server";
import { NextApiRequest } from "next";
import { currentUser, redirectToSignIn } from "@clerk/nextjs";

export async function POST(request: Request,req:NextApiRequest) {
  try {

    const {userId}=await getAuth(req);

    if(!userId){
      return redirectToSignIn({returnBackUrl:"http://localhost:3000/sign-in"})
    }
      
    const body=await request.json();

    const { title, description, importance} = body;

    if(!title || !description || !importance ){
      return new NextResponse("Missing fields", { status: 400 });
    }
    
    const todo=await db.todo.create({
      data:{
        title,
        description,
        important:importance,
        userID:userId,
        completed:false,
      }
    })

    return NextResponse.json(todo);
  } catch (error: any) {
    console.log();
    return new NextResponse("Internal Error", { status: 500 });
  }
}
