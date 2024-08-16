"use client";
import React from "react";
import "../globals.css";

import { Hero } from "@/app/(home)/_components/hero";
import { Features } from "@/app/(home)/_components/features";
import { HowItWorks } from "@/app/(home)/_components/how-it-works";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
    </main>
  );
};

export default HomePage;
