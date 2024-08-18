import React from "react";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/app/quiz/_components/sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className={"h-[calc(100vh-10vh)] grid grid-cols-4"}>
        <Sidebar />
        {children}
      </div>
    </>
  );
};

export default layout;
