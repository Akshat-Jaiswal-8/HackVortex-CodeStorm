"use client";
import { motion } from "framer-motion";
import React from "react";
import { Button } from "@/components/ui/button";
import "../globals.css";

const HomePage = () => {
  return (
    <main>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -20, y: 40 },
          visible: { opacity: 1, x: 0, y: 0 },
        }}
        initial={"hidden"}
        animate={"visible"}
        transition={{ duration: 0.5, delay: 0.25 }}
        className={
          "h-[80vh] bg-blue-800 rounded-br-full rounded-tr-lg bg-opacity-20 shadow-node "
        }
      >
        <div
          className={"relative h-full container grid grid-cols-2 items-center "}
        >
          <motion.div
            className={"grid-cols-1 flex flex-col gap-y-12 items-start "}
          >
            <h1 className={"text-7xl"}>Spark Curiosity, Ignite Learning</h1>
            <h2 className={"text-3xl"}>
              Interactive quizzes that make learning fun for young minds
            </h2>
            <p className={"text-xl"}>
              MindSpark offers engaging daily quizzes, voice-based questions,
              and exciting rewards to keep young learners motivated and excited
              about education.
            </p>
            <Button
              className={
                "bg-blue-700 dark:text-white dark:hover:bg-blue-900 w-1/3"
              }
            >
              Start Now
            </Button>
          </motion.div>

          <img
            src={"/hero.svg"}
            alt={"hero svg"}
            height={600}
            width={600}
          ></img>
        </div>
      </motion.div>
    </main>
  );
};

export default HomePage;
