"use client";
import React, { useCallback } from "react";
import { Quiz } from "@/app/quiz/_components/quiz";
import { generalKnowledge } from "@/app/_data/Data";
import { GkStore, useGkStore } from "@/lib/store";

const Page = () => {
  const increaseScore = useGkStore((state: GkStore) => state.increaseScore);
  const handleScoreIncrease = useCallback(() => {
    increaseScore();
  }, [increaseScore]);

  return (
    <>
      <Quiz data={generalKnowledge} onScoreIncrease={handleScoreIncrease} />;
    </>
  );
};

export default Page;
