"use client";
import { useEffect, useState } from "react";
import { data } from "@/app/_data/Data";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentOption, setCurrentOption] = useState<string[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < data.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1); // Move to completion
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  useEffect(() => {
    if (currentQuestionIndex < data.length) {
      setCurrentQuestion(data[currentQuestionIndex].question);
      setCurrentOption(data[currentQuestionIndex].answers);
    }
  }, [currentQuestionIndex]);

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      {currentQuestionIndex < data.length ? (
        <>
          <div className="flex flex-col items-start w-full">
            <h4 className="mt-10 text-xl text-white/60">
              Question {currentQuestionIndex + 1} of {data.length}
            </h4>
            <div className="mt-4 text-2xl text-white">{currentQuestion}</div>
          </div>

          <div className="flex flex-col gap-4 my-6">
            {currentOption.map((item, index) => (
              <button
                key={index}
                className="flex items-center gap-4 text-lg bg-indigo-700 hover:bg-indigo-600 focus:bg-indigo-500 text-white px-6 py-3 rounded-md shadow-md transition-all text-left w-full"
              >
                <span>{item}</span>
              </button>
            ))}
          </div>

          <div className="flex justify-between w-full mt-6">
            <button
              onClick={handlePreviousQuestion}
              className="w-[48%] py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white"
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            <button
              onClick={handleNextQuestion}
              className="w-[48%] py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white"
              disabled={currentQuestionIndex >= data.length}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-white">Quiz Completed</h1>
          <h2 className="text-xl text-white mt-4">Your Score is {score}</h2>
        </div>
      )}
    </div>
  );
};

export default Quiz;
