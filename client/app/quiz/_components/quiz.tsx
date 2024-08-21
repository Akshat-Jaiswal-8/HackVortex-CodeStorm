"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { DataStore, useDataStore } from "@/lib/store";

type data = {
  question: string;
  answers: string[];
  correct: string;
};

interface QuizDataProps {
  data: data[];
  onScoreIncrease: () => void;
}

export const Quiz = ({
  data,
  onScoreIncrease,
}: QuizDataProps): React.ReactNode => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>(Array(data.length).fill(""));
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const [finished, setFinished] = useState<boolean>(false);

  const score = useDataStore((state) => state.score);
  const setCorrect = useDataStore((state: DataStore) => state.setCorrect);
  const setWrong = useDataStore((state: DataStore) => state.setWrong);
  const setSkipped = useDataStore((state: DataStore) => state.setSkipped);

  const handleNextQuestion = (): void => {
    if (!answers[currentQuestion]) setSkipped(currentQuestion);
    if (data[currentQuestion]["correct"] === answers[currentQuestion]) {
      onScoreIncrease();
      setCorrect(currentQuestion);
    }
    if (
      answers[currentQuestion] &&
      data[currentQuestion]["correct"] !== answers[currentQuestion]
    ) {
      setWrong(currentQuestion);
    }

    if (currentQuestion < data.length - 1) {
      paginate(1);
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleFinish = () => {
    handleNextQuestion();
    setFinished(true);
  };

  const handleAnswerChange = (answer: string): void => {
    const newAnswers: string[] = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const paginate = (newDirection: number): void => {
    setPage([page + newDirection, newDirection]);
  };

  const currentQuiz: data = data[currentQuestion];

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 200 : -200,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 200 : -200,
        opacity: 0,
      };
    },
  };

  return (
    <div className="col-span-3 flex items-center justify-center">
      {!finished ? (
        <motion.div
          key={currentQuestion}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className={"p-10 rounded-xl border w-3/4 h-[80vh]"}
        >
          <motion.div className="flex items-center font-semibold rounded-lg p-4 text-2xl border border-dotted border-gray-600">
            <span className="font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5 mr-2">
              Ques. {currentQuestion + 1}/{data.length}
            </span>
            {currentQuiz.question}
          </motion.div>
          <div className="flex flex-col justify-evenly gap-4 mt-10 rounded-lg w-full">
            {currentQuiz.answers.map((answer: string, index: number) => (
              <div
                key={index}
                className="flex items-center space-x-4 border rounded-xl p-4"
              >
                <Checkbox
                  className="text-2xl"
                  id={`${answer}`}
                  checked={answers[currentQuestion] === answer}
                  onCheckedChange={() => handleAnswerChange(answer)}
                />
                <Label className="text-2xl font-semibold" htmlFor={`${answer}`}>
                  {answer}
                </Label>
              </div>
            ))}
          </div>
          <div className="mt-6 w-full">
            {currentQuestion === data.length - 1 ? (
              <Button className={"w-full"} onClick={handleFinish}>
                Finish
              </Button>
            ) : (
              <Button
                className={"w-full"}
                onClick={handleNextQuestion}
                disabled={currentQuestion === data.length - 1}
              >
                Next
              </Button>
            )}
          </div>
        </motion.div>
      ) : (
        <div>
          <h1 className={"text-4xl"}>Your Score is : {score}</h1>
        </div>
      )}
    </div>
  );
};
