"use client";
import React from "react";
import { DataStore, useDataStore } from "@/lib/store";
import { quizDataProps } from "@/types/quiz-data";

interface QuestionsPaletteProps {
  data: quizDataProps[];
}

export const QuestionsPalette = ({
  data,
}: QuestionsPaletteProps): React.ReactNode => {
  const correctAnswers: Set<number> = useDataStore(
    (state: DataStore) => state.correctAnswers,
  );
  const wrongAnswers: Set<number> = useDataStore(
    (state: DataStore) => state.wrongAnswers,
  );
  const skippedQuestions: Set<number> = useDataStore(
    (state: DataStore) => state.skippedQuestions,
  );
  return (
    <div>
      <h1 className={"text-slate-300 text-4xl font-semibold pl-2 py-4"}>
        Questions
      </h1>
      {data.map((eachData: quizDataProps, index: number) => {
        return (
          <div
            key={index}
            className={`flex flex-row border my-2 mx-2 px-2 rounded-xl 
            ${correctAnswers.has(index) ? "border-green-500" : ""}
            ${wrongAnswers.has(index) ? "border-red-500" : ""}
            ${skippedQuestions.has(index) ? "border-gray-50" : ""}
          }`}
          >
            <div className={"my-2"}>
              <span
                className={`mr-2 ${correctAnswers.has(index) ? "text-white" : "text-green-500"}`}
              >
                {`Ques-${index + 1}`}
              </span>
              {eachData.question}
            </div>
          </div>
        );
      })}
    </div>
  );
};
