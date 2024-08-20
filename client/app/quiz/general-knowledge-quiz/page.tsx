"use client";
import React, { useCallback } from "react";
import { Quiz } from "@/app/quiz/_components/quiz";
import { DataStore, useDataStore } from "@/lib/store";
import { generalKnowledge } from "@/app/_data/general-knowledge-data";
import { Sidebar } from "@/app/quiz/_components/sidebar";

const Page = () => {
  const increaseScore = useDataStore((state: DataStore) => state.increaseScore);
  const handleScoreIncrease = useCallback(() => {
    increaseScore();
  }, [increaseScore]);

  return (
    <>
      <Sidebar data={generalKnowledge} />
      <Quiz data={generalKnowledge} onScoreIncrease={handleScoreIncrease} />
    </>
  );
};

export default Page;
