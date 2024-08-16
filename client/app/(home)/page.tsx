"use client";
import React from "react";
import "../globals.css";

import { Hero } from "@/app/(home)/_components/hero";
import { Features } from "@/app/(home)/_components/features";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Features />
    </main>
  );
};

export default HomePage;
