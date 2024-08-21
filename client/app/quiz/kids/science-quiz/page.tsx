"use client";
import { MainQuiz } from "@/app/quiz/_components/main-quiz";
import { scienceQuizData } from "@/app/quiz/kids/_data/science-quiz-data";

const Page = () => {
  return <MainQuiz quizData={scienceQuizData} />;
};

export default Page;
