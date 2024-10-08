import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { motion } from "framer-motion";
import { FeatureDataProps } from "@/app/(home)/_data/feature-data";

interface FeaturesProps {
  features: FeatureDataProps[];
  heading: string;
}

export const Features = ({ features, heading }: FeaturesProps) => {
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
          {heading}
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
