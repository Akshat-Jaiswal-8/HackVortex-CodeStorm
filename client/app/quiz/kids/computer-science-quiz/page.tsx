"use client";
import { MainQuiz } from "@/app/quiz/_components/main-quiz";
import { computerScienceQuizData } from "@/app/quiz/kids/_data/computer-science-quiz-data";

const Page = () => {
  return <MainQuiz quizData={computerScienceQuizData} />;
};

export default Page;
