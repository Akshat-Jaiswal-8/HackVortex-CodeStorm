"use client";
import React from "react";
import { QuizCategory } from "@/app/quiz/_components/kids-quiz-category";
import { ProfessionalQuizCategoryData } from "@/app/quiz/professional/_data/professional-quiz-category-data";

const KidsQuiz = () => {
  return (
    <div className="w-[100vw] h-[100vh]">
      <QuizCategory
        categories={ProfessionalQuizCategoryData}
        heading={"Explore MindSpark's Professionals Quizzes"}
      ></QuizCategory>
    </div>
  );
};

export default KidsQuiz;
