import React from "react";
import { Navbar } from "@/components/navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={"h-full w-full"}>
      <Navbar />
      {children}
    </div>
  );
};

export default HomeLayout;
