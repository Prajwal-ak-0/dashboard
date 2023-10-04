import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { intialProfile } from "@/lib/setInitialProfile";
import Menu from "@/components/sidebar/Menu";
import Navbar from "@/components/navbar/Navbar";
import Auth from "@/components/Auth";
import { signOut } from "next-auth/react";

const page =  async() => {
  const user = await intialProfile();
  const session = await getServerSession(authOptions);

  if(!user){
    return signOut();
  }

  return (
    <>
        {
          session ? (
            <>
              <Navbar user={user} />
              <Menu />
            </>
          ) : (
            <>
              <Auth/>
            </>
          )
        }
    </>
  )
};

export default page;
