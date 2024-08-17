"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { generalKnowledge, generalKnowledgeProps } from "@/app/_data/Data";
import { Button } from "@/components/ui/button";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentOption, setCurrentOption] = useState<string[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < generalKnowledge.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  useEffect(() => {
    if (currentQuestionIndex < generalKnowledge.length) {
      setCurrentQuestion(generalKnowledge[currentQuestionIndex].question);
      setCurrentOption(generalKnowledge[currentQuestionIndex].answers);
    }
  }, [currentQuestionIndex]);

  const Highlight = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <span
        className={cn(
          "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
          className,
        )}
      >
        {children}
      </span>
    );
  };

  let CARDS: any[] = [];
  generalKnowledge.map((gk: generalKnowledgeProps, index: number) => {
    CARDS.push({
      id: index,
      content: (
        <>
          <div
            className={
              "font-semibold rounded-lg p-8 text-2xl border border-dotted border-gray-600"
            }
          >
            <Highlight className={"mr-2"}> Ques.</Highlight>
            {gk.question}
          </div>
          <div
            className={
              "mt-10 rounded-lg p-8 h-[60%] w-full border border-dotted border-slate-600"
            }
          >
            {gk.answers.map((answer: string, index: number) => (
              <div
                key={index}
                className="flex items-center space-x-2 space-y-2"
              >
                <Checkbox className={"text-2xl"} id={`${answer}`} />
                <Label
                  className={"text-2xl font-semibold"}
                  htmlFor={`${answer}`}
                >
                  {answer}
                </Label>
              </div>
            ))}
          </div>
        </>
      ),
    });
  });

  const [index, setIndex] = useState<number>(0);

  return (
    // TODO : ADD PROGRESS BAR AND TIMER SECTION.
    // TODO : ADD THE MOTION FOR THE QUIZ CARD.
    <div
      className={"h-[calc(100vh-20vh)] w-full flex justify-center items-center"}
    >
      <div className="w-1/2 h-full border rounded-lg p-4 shadow-2xl shadow-blue-800">
        {CARDS[index].content}
        <Button
          className={"mx-auto w-full mt-4"}
          onClick={() => {
            setIndex((index) => index + 1);
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
export default Quiz;

//     <div className="max-w-xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
//       {currentQuestionIndex < generalKnowledge.length ? (
//         <>
//           <div className="flex flex-col items-start w-full">
//             <h4 className="mt-10 text-xl text-white/60">
//               Question {currentQuestionIndex + 1} of {generalKnowledge.length}
//             </h4>
//             <div className="mt-4 text-2xl text-white">{currentQuestion}</div>
//           </div>
//
//           <div className="flex flex-col gap-4 my-6">
//             {currentOption.map((item, index) => (
//               <button
//                 key={index}
//                 className="flex items-center gap-4 text-lg bg-indigo-700 hover:bg-indigo-600 focus:bg-indigo-500 text-white px-6 py-3 rounded-md shadow-md transition-all text-left w-full"
//               >
//                 <span>{item}</span>
//               </button>
//             ))}
//           </div>
//
//           <div className="flex justify-between w-full mt-6">
//             <button
//               onClick={handlePreviousQuestion}
//               className="w-[48%] py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white"
//               disabled={currentQuestionIndex === 0}
//             >
//               Previous
//             </button>
//             <button
//               onClick={handleNextQuestion}
//               className="w-[48%] py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white"
//               disabled={currentQuestionIndex >= generalKnowledge.length}
//             >
//               Next
//             </button>
//           </div>
//         </>
//       ) : (
//         <div className="flex flex-col items-center">
//           <h1 className="text-2xl text-white">Quiz Completed</h1>
//           <h2 className="text-xl text-white mt-4">Your Score is {score}</h2>
//         </div>
//       )}
//     </div>
//   );
// };
