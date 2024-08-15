import React from "react";
import Image from "next/image";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { currentUser, User } from "@clerk/nextjs/server";
import { ToggleTheme } from "@/components/toggle-theme";

export const Navbar = async () => {
  const user: User | null = await currentUser();
  return (
    <div className={"flex justify-between items-center px-10 py-4"}>
      <Image
        className={"rounded-full bg-white p-0.5"}
        src={"/logo.webp"}
        alt={"mind sparks logo"}
        height={40}
        width={40}
      />
      {!user && (
        <SignInButton>
          <Button>Login</Button>
        </SignInButton>
      )}
      <div className={"flex items-center gap-x-6"}>
        <UserButton />
        <ToggleTheme />
      </div>
    </div>
  );
};
