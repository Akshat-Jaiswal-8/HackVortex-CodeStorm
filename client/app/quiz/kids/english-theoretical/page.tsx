"use client";
import React from "react";
import { Theoretical } from "@/app/quiz/_components/theoretical";
import { englishTheoreticalData } from "@/app/quiz/kids/_data/english-theoretical-data";

const Page = () => {
  return (
    <div className={"w-[100vw] h-[100vh]"}>
      <Theoretical data={englishTheoreticalData} />
    </div>
  );
};
export default Page;
