"use client";
import React from "react";
import "../globals.css";

import { Hero } from "@/app/(home)/_components/hero";
import { features } from "@/app/(home)/_data/feature-data";

import { Features } from "@/app/(home)/_components/features";
import { HowItWorks } from "@/app/(home)/_components/how-it-works";
import { Footer } from "@/app/(home)/_components/footer";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Features
        features={features}
        heading={"Discover MindSpark's Engaging Features"}
      />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default HomePage;
