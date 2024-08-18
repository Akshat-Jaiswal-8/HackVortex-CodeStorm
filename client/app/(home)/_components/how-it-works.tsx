import { motion } from "framer-motion";
import React from "react";
import {
  howItWorksData,
  HowItWorksProps,
} from "@/app/(home)/_data/how-it-works-data";
import { HowItWorksCard } from "@/app/(home)/_components/how-it-works-card";

export const HowItWorks = () => {
  return (
    <section className={"container mt-20"}>
      <div>
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="my-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
        >
          Your journey to interactive learning in 5 simple steps
        </motion.h1>
        <motion.div className={"grid grid-cols-2 gap-40"}>
          {howItWorksData.map((data: HowItWorksProps) => (
            <div key={data.step}>
              <HowItWorksCard
                heading={data.heading}
                description={data.description}
                image={data.svg}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
