import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import SideBarMenu from "@/components/SideBarMenu";
import { Separator } from "@/components/ui/separator";

const MainLayout = async ({
  children
}: {
  children: React.ReactNode;
}) => {
    return ( 
      <Menu>
        <Navbar/>
      </Menu>
     );
    }
export default MainLayout;