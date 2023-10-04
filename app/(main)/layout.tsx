
const MainLayout = async ({
  children
}: {
  children: React.ReactNode;
}) => {
    return ( 
      <>
      
      <main className="md:pl-[172px] h-full">
        {children}
      </main>
      
      </>
     );
    }
export default MainLayout;