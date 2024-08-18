"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { generalKnowledge, generalKnowledgeProps } from "@/app/_data/Data";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component
import { motion } from "framer-motion";

const Quiz = (): React.ReactNode => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  const handleNextQuestion = (): void => {
    if (currentQuestion < generalKnowledge.length - 1) {
      paginate(1);
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    }
  };

  const handlePreviousQuestion = (): void => {
    if (currentQuestion > 0) {
      paginate(-1);
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer("");
    }
  };

  const paginate = (newDirection: number): void => {
    setPage([page + newDirection, newDirection]);
  };

  const currentQuiz: generalKnowledgeProps = generalKnowledge[currentQuestion];
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
            Ques. {currentQuestion + 1}/{generalKnowledge.length}
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
                checked={selectedAnswer === answer}
                onCheckedChange={() => setSelectedAnswer(answer)}
              />
              <Label className="text-2xl font-semibold" htmlFor={`${answer}`}>
                {answer}
              </Label>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-6">
          <Button
            onClick={handlePreviousQuestion}
            disabled={currentQuestion === 0}
          >
            Previous
          </Button>
          <Button
            onClick={handleNextQuestion}
            disabled={currentQuestion === generalKnowledge.length - 1}
          >
            Next
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Quiz;
