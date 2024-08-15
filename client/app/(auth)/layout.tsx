import React from "react";
import { Logo } from "@/app/(auth)/_components/Logo";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={
        "h-full flex flex-col space-y-6 items-center justify-center my-2"
      }
    >
      <Logo />
      {children}
    </div>
  );
};

export default AuthLayout;
