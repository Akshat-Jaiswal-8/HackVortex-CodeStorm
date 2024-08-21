import React from "react";
import { QuestionsPalette } from "@/app/quiz/_components/QuestionsPalette";
import { CurrentScore } from "@/app/quiz/_components/currentScore";
import Timer from "./timer";
import { quizDataProps } from "@/types/quiz-data";

interface SidebarProps {
  data: quizDataProps[];
}

export const Sidebar = ({ data }: SidebarProps): React.ReactNode => {
  return (
    <div
      className={
        "w-full col-span-1 border-r border-dotted border-slate-600 overflow-y-scroll"
      }
    >
      <Timer />
      <CurrentScore />
      <QuestionsPalette data={data} />
    </div>
  );
};
