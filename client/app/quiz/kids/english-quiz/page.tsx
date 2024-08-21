"use client";
import { MainQuiz } from "@/app/quiz/_components/main-quiz";
import { englishQuizData } from "@/app/quiz/kids/_data/english-quiz-data";

const Page = () => {
  return <MainQuiz quizData={englishQuizData} />;
};

export default Page;
