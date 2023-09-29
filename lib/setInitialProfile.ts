import { currentUser, redirectToSignIn } from "@clerk/nextjs"
import { db } from "./db";


export const intialProfile=async () => {
    try {
        const user=await currentUser();

        if(!user) return redirectToSignIn();
    
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