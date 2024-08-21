"use client";
import React from "react";
import { redirect } from "next/navigation";

const quizPage = (): React.ReactNode => {
  return redirect("/quiz/kids");
};

export default quizPage;
