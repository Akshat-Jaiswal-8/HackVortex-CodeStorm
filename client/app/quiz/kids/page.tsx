"use client";
import React from "react";
import { KidsQuizCategoryData } from "@/app/quiz/kids/_data/kids-quiz-category-data";
import { QuizCategory } from "@/app/quiz/_components/kids-quiz-category";

const KidsQuiz = () => {
  return (
    <div className="w-[100vw] h-[100vh]">
      <QuizCategory
        categories={KidsQuizCategoryData}
        heading={"Explore MindSpark's Kids Quizzes"}
      ></QuizCategory>
    </div>
  );
};

export default KidsQuiz;
