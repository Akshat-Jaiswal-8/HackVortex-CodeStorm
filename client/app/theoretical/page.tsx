"use client";
import data from "../_data/Theoretical.json";
import { useEffect, useState } from "react";

const Theoretical = () => {
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const handleAnswer = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = e.target.value;
    setUserAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < data.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
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
    }
  }, [currentQuestionIndex]);

  return (
    <div>
      <h1 className={"text-slate-300 text-4xl font-semibold pl-2 py-4"}>
        Questions
      </h1>
      <div>
        <div className="mt-4 text-2xl text-white">
          Ques {currentQuestionIndex + 1}. {currentQuestion}
        </div>
        <div>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your message..."
            value={userAnswers[currentQuestionIndex] || ""}
            onChange={handleAnswer}
          ></textarea>
        </div>
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
          disabled={currentQuestionIndex >= data.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Theoretical;
