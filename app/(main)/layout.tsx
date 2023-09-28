import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/sidebar/SideBar";
import SideBarMenu from "@/components/sidebar/SideBarMenu";
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