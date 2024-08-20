"use client";
import React, { useCallback } from "react";
import { Quiz } from "../_components/quiz";
import { professionalQuiz } from "@/app/_data/Aptitude/Data";
import { GkStore, useGkStore } from "@/lib/store";

const ProfessionalQuiz = () => {
  const increaseScore = useGkStore((state: GkStore) => state.increaseScore);
  const handleScoreIncrease = useCallback(() => {
    increaseScore();
  }, [increaseScore]);
  return (
    <>
      <Quiz data={professionalQuiz} onScoreIncrease={handleScoreIncrease} />;
    </>
  );
};

export default ProfessionalQuiz;
