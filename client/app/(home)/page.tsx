"use client";
import React from "react";
import "../globals.css";

import { Hero } from "@/app/(home)/_components/hero";
import { Features } from "@/app/(home)/_components/features";
import { HowItWorks } from "@/app/(home)/_components/how-it-works";
import { Footer } from "@/app/(home)/_components/footer";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default HomePage;
