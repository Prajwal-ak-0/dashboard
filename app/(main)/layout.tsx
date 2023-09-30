import Menu from "@/components/sidebar/Menu";
import Navbar from "@/components/navbar/Navbar";
import { intialProfile } from "@/lib/setInitialProfile";

const MainLayout = async ({
  children
}: {
  children: React.ReactNode;
}) => {
  const user=await intialProfile();
    return ( 
      <>
      
      <main className="md:pl-[172px] h-full">
        {children}
      </main>
      </>
     );
    }
export default MainLayout;