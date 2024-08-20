import React from "react";
import { motion } from "framer-motion";
import { HoverEffect } from "@/components/ui/card-hover-effext";
import { quizCategories } from "@/app/(home)/_data/quiz-categories";

const QuizCategories = () => {
  return (
    <section className={"container mt-20"}>
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="my-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Discover MindSpark's Engaging Features
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <HoverEffect items={quizCategories} />
        </motion.div>
      </div>
    </section>
  );
};

export default QuizCategories;
