"use client";
import React, { useCallback } from "react";
import { Quiz } from "@/app/quiz/_components/quiz";
import { DataStore, useDataStore } from "@/lib/store";
import { computerScience } from "@/app/_data/computer-science";
import { Sidebar } from "@/app/quiz/_components/sidebar";

const Page = () => {
  const increaseScore = useDataStore((state: DataStore) => state.increaseScore);
  const handleScoreIncrease = useCallback(() => {
    increaseScore();
  }, [increaseScore]);

  return (
    <>
      <Sidebar data={computerScience} />
      <Quiz data={computerScience} onScoreIncrease={handleScoreIncrease} />
    </>
  );
};

export default Page;
