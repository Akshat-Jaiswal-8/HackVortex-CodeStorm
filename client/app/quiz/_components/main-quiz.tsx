import React, { useCallback } from "react";
import { DataStore, useDataStore } from "@/lib/store";
import { Sidebar } from "@/app/quiz/_components/sidebar";
import { Quiz } from "@/app/quiz/_components/quiz";
import { quizDataProps } from "@/types/quiz-data";

export const MainQuiz = ({ quizData }: { quizData: quizDataProps[] }) => {
  const increaseScore = useDataStore((state: DataStore) => state.increaseScore);
  const handleScoreIncrease = useCallback(() => {
    increaseScore();
  }, [increaseScore]);

  return (
    <>
      <Sidebar data={quizData} />
      <Quiz data={quizData} onScoreIncrease={handleScoreIncrease} />
    </>
  );
};
