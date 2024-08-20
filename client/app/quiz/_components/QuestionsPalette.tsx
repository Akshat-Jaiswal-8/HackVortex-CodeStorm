"use client";
import React from "react";
import { generalKnowledge, generalKnowledgeProps } from "@/app/_data/Data";
import { useGkStore } from "@/lib/store";
import { number } from "prop-types";

export const QuestionsPalette = (): React.ReactNode => {
  const correctAnswers: Set<number> = useGkStore(
    (state) => state.correctAnswers,
  );
  const wrongAnswers: Set<number> = useGkStore((state) => state.wrongAnswers);
  const skippedQuestions: Set<number> = useGkStore(
    (state) => state.skippedQuestions,
  );
  return (
    <div>
      <h1 className={"text-slate-300 text-4xl font-semibold pl-2 py-4"}>
        Questions
      </h1>
      {generalKnowledge.map((gk: generalKnowledgeProps, index: number) => {
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
                {`Ques-${index}`}
              </span>
              {gk.question}
            </div>
          </div>
        );
      })}
    </div>
  );
};
