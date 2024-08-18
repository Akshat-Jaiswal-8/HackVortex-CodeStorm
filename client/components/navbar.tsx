import React from "react";
import Image from "next/image";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { currentUser, User } from "@clerk/nextjs/server";
import { ToggleTheme } from "@/components/toggle-theme";

export const Navbar = async (): Promise<React.JSX.Element> => {
  const user: User | null = await currentUser();
  return (
    <nav
      className={
        "p-4 max-h-[10vh] flex justify-between items-center border-b border-dotted border-blue-800"
      }
    >
      <div className={"flex items-center gap-x-4"}>
        <Image
          className={"rounded-full hover:shadow-xl hover:shadow-gray-100 p-0.5"}
          src={"/logo.webp"}
          alt={"mind sparks logo"}
          height={40}
          width={40}
        />
        <p className={"text-xl font-semibold text-slate-300"}>Mind Sparks</p>
      </div>
      <div className={"flex items-center gap-x-6"}>
        {!user && (
          <SignInButton>
            <Button
              className={"bg-blue-700 dark:text-white dark:hover:bg-blue-900"}
            >
              Login
            </Button>
          </SignInButton>
        )}
        <UserButton />
        <ToggleTheme />
      </div>
    </nav>
  );
};
