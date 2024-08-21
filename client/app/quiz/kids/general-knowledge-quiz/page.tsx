"use client";
import { MainQuiz } from "@/app/quiz/_components/main-quiz";
import { generalKnowledge } from "@/app/quiz/kids/_data/general-knowledge-quiz-data";

const Page = () => {
  return <MainQuiz quizData={generalKnowledge} />;
};

export default Page;
