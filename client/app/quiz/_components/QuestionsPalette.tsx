import React from "react";
import { generalKnowledge, generalKnowledgeProps } from "@/app/_data/Data";

export const QuestionsPalette = () => {
  return (
    <div>
      <h1 className={"text-slate-300 text-4xl font-semibold pl-2 py-4"}>
        Questions
      </h1>
      {generalKnowledge.map((gk: generalKnowledgeProps, index: number) => (
        <div className={"flex flex-row border my-2 mx-2 px-2 rounded-xl"}>
          <div className={"my-2"}>
            <span className={"text-green-500 mr-2"}>{`Ques-${index}`}</span>
            {gk.question}
          </div>
        </div>
      ))}
    </div>
  );
};
