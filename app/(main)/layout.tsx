import Menu from "@/components/sidebar/Menu";
import Navbar from "@/components/navbar/Navbar";

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