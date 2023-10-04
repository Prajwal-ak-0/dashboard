import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { intialProfile } from "@/lib/setInitialProfile";
import Menu from "@/components/sidebar/Menu";
import Navbar from "@/components/navbar/Navbar";
import Auth from "@/components/Auth";

const page =  async() => {
  const user = await intialProfile();
  const session = await getServerSession(authOptions);

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
