"use client";
import { MainQuiz } from "@/app/quiz/_components/main-quiz";
import { englishQuizData } from "@/app/quiz/kids/_data/english-quiz-data";
import { mathsQuizData } from "@/app/quiz/kids/_data/maths-quiz-data";

const Page = () => {
  return <MainQuiz quizData={mathsQuizData} />;
};

export default Page;
