"use client";
import { MainQuiz } from "@/app/quiz/_components/main-quiz";
import { quantitativeAptitudeQuizData } from "@/app/quiz/professional/_data/quantitative-aptitude-quiz-data";

const Page = () => {
  return <MainQuiz quizData={quantitativeAptitudeQuizData} />;
};

export default Page;
