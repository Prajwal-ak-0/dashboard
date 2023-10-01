import { currentUser, redirectToSignIn } from "@clerk/nextjs"
import { db } from "./db";
import { Router } from "next/router";


export const intialProfile=async () => {
    try {
        const user=await currentUser();

        if(!user) {
            return redirectToSignIn({returnBackUrl:"http://localhost:3000/sign-in"})
        }
    
        const profile =await db.user.findUnique({
            where:{
                userId:user.id
            }
        })
    
        if(profile) return profile;
    
        const newProfile=await db.user.create({
            data:{
                userId:user.id,
                name:`${user.firstName} ${user.lastName}`,
                imageUrl:user.imageUrl,
                email:user.emailAddresses[0].emailAddress
            }
        })
    
        return newProfile;
    } catch (error) {
        console.error("Erro in initialProfile",error)
        throw error;
    }
}