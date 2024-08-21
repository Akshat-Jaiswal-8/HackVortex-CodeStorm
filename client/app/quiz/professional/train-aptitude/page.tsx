"use client";
import { MainQuiz } from "@/app/quiz/_components/main-quiz";
import { trainAptitudeQuizData } from "@/app/quiz/professional/_data/train-aptitude-quiz-data";

const Page = () => {
  return <MainQuiz quizData={trainAptitudeQuizData} />;
};

export default Page;
