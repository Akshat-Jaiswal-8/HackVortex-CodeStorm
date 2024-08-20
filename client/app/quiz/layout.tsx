import React from "react";
import { Navbar } from "@/components/navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className={"h-[calc(100vh-10vh)] grid grid-cols-4"}>{children}</div>
    </>
  );
};

export default layout;
