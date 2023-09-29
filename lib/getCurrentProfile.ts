import { auth } from "@clerk/nextjs";
import { db } from "./db";

export const getCurrentProfile = async () => {
    const {userId}= await auth();

    if(!userId) return null;

    const profile =await db.user.findUnique({
        where: {
            id: userId,
        }
    });

    return profile;
}