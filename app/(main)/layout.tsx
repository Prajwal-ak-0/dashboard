import SideBarMenu from "@/components/SideBarMenu";

const MainLayout = async ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="h-full">
      <div className=" md:flex max-md:hidden h-full w-[55px] z-30 flex-col fixed inset-y-0">
        <SideBarMenu/>
      </div>
      <main className="md:pl-[72px] h-full">
        {children}
      </main>
    </div>
   );
}
 
export default MainLayout;