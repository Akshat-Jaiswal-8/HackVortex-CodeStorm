import React from "react";
import { QuestionsPalette } from "@/app/quiz/_components/QuestionsPalette";
import { CurrentScore } from "@/app/quiz/_components/currentScore";

export const Sidebar = (): React.ReactNode => {
  return (
    <div
      className={
        "w-full col-span-1 border-r border-dotted border-slate-600 overflow-y-scroll"
      }
    >
      <CurrentScore />
      <QuestionsPalette />
    </div>
  );
};
