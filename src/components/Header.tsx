import React from "react";
import { Button } from "./ui/Button";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

function Header() {
  const { data: sessionData } = useSession();

  return (
    <div className="flex bg-slate-200">
      <div className="flex-1 pl-5 text-3xl font-bold">
        {sessionData?.user?.name ? `Notes for ${sessionData.user.name}` : ""}
      </div>
      <div className="flex-none gap-2">
        {sessionData?.user ? (
          <label>
            <div className="w-10 rounded-full">
              <img
                src={sessionData?.user?.image ?? ""}
                alt={sessionData?.user?.name ?? ""}
              />
            </div>
          </label>
        ) : (
          <Button onClick={() => void signIn()}>Sign in</Button>
        )}
      </div>
    </div>
  );
}

export default Header;
