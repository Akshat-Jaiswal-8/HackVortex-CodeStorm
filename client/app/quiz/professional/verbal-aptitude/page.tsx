"use client";
import { MainQuiz } from "@/app/quiz/_components/main-quiz";
import { verbalAptitudeQuizData } from "@/app/quiz/professional/_data/verbal-aptitude-quiz-data";

const Page = () => {
  return <MainQuiz quizData={verbalAptitudeQuizData} />;
};

export default Page;
