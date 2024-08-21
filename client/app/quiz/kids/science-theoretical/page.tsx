"use client";
import React from "react";
import { Theoretical } from "@/app/quiz/_components/theoretical";
import { scienceTheoreticalData } from "@/app/quiz/kids/_data/science-theoretical-data";

const Page = () => {
  return (
    <div className={"w-[100vw] h-[100vh]"}>
      <Theoretical data={scienceTheoreticalData} />
    </div>
  );
};
export default Page;
