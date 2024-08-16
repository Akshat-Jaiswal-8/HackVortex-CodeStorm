import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effext";
import { features } from "@/app/(home)/_data/feature-data";
import { motion } from "framer-motion";

export const Features = () => {
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
          <HoverEffect items={features} />
        </motion.div>
      </div>
    </section>
  );
};
