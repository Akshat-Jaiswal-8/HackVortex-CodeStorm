"use client";

import React from "react";
import { DataStore, useDataStore } from "@/lib/store";

export const CurrentScore = (): React.ReactNode => {
  const score: number = useDataStore((state: DataStore) => state.score);

  return (
    <h1 className={"text-slate-300 text-4xl font-semibold pl-2 py-4 border-b"}>
      Current Score :<span className={"ml-2 text-yellow-500"}>{score}</span>
    </h1>
  );
};
