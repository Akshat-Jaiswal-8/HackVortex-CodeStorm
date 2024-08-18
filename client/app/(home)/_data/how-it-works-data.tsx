import React from "react";
import {
  ChartNoAxesCombined,
  ListChecks,
  NotebookPen,
  ThumbsUp,
  User,
} from "lucide-react";
import signup from "@/public/sign-up.svg";
import progress from "@/public/progress-tracking.svg";
import quiz from "@/public/quiz.svg";
import topic from "@/public/topic-selection.svg";
import feedback from "@/public/emotional-feedback-concept-illustration.png";

export interface HowItWorksProps {
  step: number;
  heading: string;
  icon: React.JSX.Element;
  description: string;
  svg: any;
}

export const howItWorksData: HowItWorksProps[] = [
  {
    step: 1,
    heading: "Sign Up",
    icon: <User />,
    description:
      "Create your account and set up your profile in just a few clicks.",
    svg: signup,
  },
  {
    step: 2,
    heading: "Choose Your Topics",
    icon: <NotebookPen />,
    description:
      "Select from a variety of subjects and difficulty levels tailored to your age group.",
    svg: topic,
  },
  {
    step: 3,
    heading: "Take Daily Quizzes",
    icon: <ListChecks />,
    description:
      "Engage with interactive MCQs and voice-based questions in timed sessions.",
    svg: quiz,
  },
  {
    step: 4,
    heading: "Get Instant Feedback",
    icon: <ThumbsUp />,
    description:
      "Receive immediate results and explanations to boost your understanding.",
    svg: feedback,
  },
  {
    step: 5,
    heading: "Track Your Progress",
    icon: <ChartNoAxesCombined />,
    description:
      "View your scores, maintain streaks, and watch your knowledge grow over time.",
    svg: progress,
  },
];
