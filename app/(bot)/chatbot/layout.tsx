import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Auth from "@/components/Auth";
import { getServerSession } from "next-auth";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      {session ? (
        <>{children}</>
      ) : (
        <>
          <Auth />
        </>
      )}
    </div>
  );
};

export default layout;
