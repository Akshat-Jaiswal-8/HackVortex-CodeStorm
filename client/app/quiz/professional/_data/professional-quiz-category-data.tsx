import React from "react";
import { BookA, Calculator, TrainFront } from "lucide-react";

export interface ProfessionalQuizCategoryDataProps {
  title: string;
  icon: React.JSX.Element;
  description: string;
  href: string;
}

export const ProfessionalQuizCategoryData: ProfessionalQuizCategoryDataProps[] =
  [
    {
      title: "Quantitative Aptitude",
      icon: (
        <Calculator color="#00aaff" strokeWidth={1.25} absoluteStrokeWidth />
      ),
      description:
        "Challenge your numerical problem-solving skills with our quantitative aptitude quiz.",
      href: "/quiz/professional/quantitative-aptitude",
    },
    {
      title: "Verbal Aptitude",
      icon: <BookA color="#00aaff" strokeWidth={1.25} absoluteStrokeWidth />,
      description:
        "Sharpen your language skills and critical thinking abilities with our verbal reasoning quiz.",
      href: "/quiz/professional/verbal-aptitude",
    },
    {
      title: "Train Aptitude Quiz",
      icon: (
        <TrainFront color="#00aaff" strokeWidth={1.25} absoluteStrokeWidth />
      ),
      description:
        "Test your aptitude for solving railway-related logical and technical problems.",
      href: "/quiz/professional/train-aptitude",
    },
  ];
