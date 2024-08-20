"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const quizPage = (): React.ReactNode => {
  return (
    <Link href={"/quiz/general-knowledge-quiz"}>
      <Button>General Knowledge quiz</Button>
    </Link>
  );
};

export default quizPage;
