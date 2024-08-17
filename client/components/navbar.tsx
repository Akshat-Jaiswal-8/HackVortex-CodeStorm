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
        "container rounded-3xl mb-[10vh] flex justify-between items-center px-10 py-4 max-h-[10vh] shadow-lg shadow-blue-800"
      }
    >
      <Image
        className={"rounded-full  hover:shadow-xl hover:shadow-gray-100 p-0.5"}
        src={"/logo.webp"}
        alt={"mind sparks logo"}
        height={40}
        width={40}
      />
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
