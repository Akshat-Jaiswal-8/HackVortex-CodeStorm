"use client";

import React from "react";
import { GkStore, useGkStore } from "@/lib/store";

export const CurrentScore = (): React.ReactNode => {
  const score: number = useGkStore((state: GkStore) => state.score);

  return (
    <h1 className={"text-slate-300 text-4xl font-semibold pl-2 py-4 border-b"}>
      Current Score :<span className={"ml-2 text-yellow-500"}>{score}</span>
    </h1>
  );
};
