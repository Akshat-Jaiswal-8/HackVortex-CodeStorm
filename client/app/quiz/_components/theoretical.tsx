"use client";

import React, { useState, useEffect } from "react";
import "regenerator-runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import axios from "axios";
import { theoreticalDataProps } from "@/types/theoretical-data";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import checkAnswer from "@/lib/rating";

export const Theoretical = ({ data }: { data: theoreticalDataProps[] }) => {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(0);
  const [answerText, setAnswerText] = useState<string>("");
  const [start, setStart] = useState<boolean>(false);
  const [finish, setFinish] = useState<boolean>(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  const { transcript, browserSupportsSpeechRecognition, resetTranscript } =
    useSpeechRecognition();

  useEffect(() => {
    setAnswerText(transcript);
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  const handleStop = () => {
    setStart(false);
    console.log(answerText);
    SpeechRecognition.stopListening();
  };

  const handleStart = () => {
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
    setStart(true);
  };

  const handleNextQuestion = () => {
    setFinish(false);
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setAnswerText("");
    resetTranscript();
    setCurrentQuestionNumber((prevNumber) => prevNumber + 1);
  };

  const handleFinish = async () => {
    setFinish(true);
    await checkAnswer({
      question: data[currentQuestionNumber]["question"],
      answer: answerText,
    });
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:8000/synthesize",
        data: { text: answerText },
        responseType: "blob",
      });

      const audioBlob = response.data;
      const audioUrl = URL.createObjectURL(audioBlob);
      const newAudio: HTMLAudioElement = new Audio(audioUrl);
      setAudio(newAudio);
      newAudio.play();
    } catch (error) {
      console.error("Error:", error);
    }
  };

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

  const currentQuestion: string = data[currentQuestionNumber]["question"];

  return (
    <div className="flex flex-col items-center justify-center mt-10 ">
      <motion.div
        key={currentQuestionNumber}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        className={"p-10 rounded-xl border w-3/4 h-full"}
      >
        <motion.div className="flex items-center font-semibold rounded-lg p-4 text-2xl border border-dotted border-gray-600">
          <span className="text-center font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5 mr-2">
            Ques. {currentQuestionNumber + 1}/{data.length}
          </span>
          <span>{currentQuestion}</span>
        </motion.div>
        <div className={"flex flex-col gap-y-8"}>
          <h2 className="text-4xl text-slate-300 mt-10">Your Answer - </h2>
          <div className="border rounded-xl h-[20rem] mb-10 mx-20 text-2xl">
            <p className="">{answerText}</p>
          </div>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className={"flex gap-x-4"}>
            <Button onClick={handleStart} disabled={start}>
              Start
            </Button>
            <Button onClick={handleStop} disabled={!start}>
              Stop
            </Button>
          </div>
          <div>
            {currentQuestionNumber <= data.length - 1 ? (
              <div>
                <Button className={"mx-2"} onClick={handleFinish}>
                  Finish
                </Button>
                <Button
                  disabled={!finish}
                  className={"mx-2"}
                  onClick={handleNextQuestion}
                >
                  Next
                </Button>
              </div>
            ) : (
              <Button
                disabled={finish}
                className={"mx-2"}
                onClick={handleFinish}
              >
                Finish
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
