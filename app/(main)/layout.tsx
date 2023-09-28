import SideBar from "@/components/SideBar";
import SideBarMenu from "@/components/SideBarMenu";
import { Separator } from "@/components/ui/separator";

const MainLayout = async ({
  children
}: {
  children: React.ReactNode;
}) => {
    return ( 
      <div className="h-full">
        <div className=" md:flex z-30 max-md:hidden h-full w-[170px] flex-col fixed inset-y-0">
          <SideBarMenu/>
        </div>
        <main className="md:pl-[172px] h-full">
          {children}
        </main>
      </div>
     );
    }
export default MainLayout;