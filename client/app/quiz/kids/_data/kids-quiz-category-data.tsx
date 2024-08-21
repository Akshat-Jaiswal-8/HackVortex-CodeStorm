import React from "react";
import {
  BookOpenText,
  Calculator,
  Computer,
  FlaskConical,
  Lightbulb,
} from "lucide-react";

export interface KidsQuizCategoryDataProps {
  title: string;
  icon: React.JSX.Element;
  description: string;
  href: string;
}

export const KidsQuizCategoryData: KidsQuizCategoryDataProps[] = [
  {
    title: "Math Quiz",
    icon: <Calculator color="#00aaff" strokeWidth={1.25} absoluteStrokeWidth />,
    description:
      "Challenge your child's numeracy skills with engaging math quizzes.",
    href: "/quiz/kids/maths-quiz",
  },
  {
    title: "Science Quiz",
    icon: (
      <FlaskConical color="#00aaff" strokeWidth={1.25} absoluteStrokeWidth />
    ),
    description:
      "Ignite their curiosity and expand their scientific knowledge.",
    href: "/quiz/kids/science-quiz",
  },
  {
    title: "English Quiz",
    icon: (
      <BookOpenText color="#00aaff" strokeWidth={1.25} absoluteStrokeWidth />
    ),
    description:
      "Improve their language proficiency with interactive English quizzes.",
    href: "/quiz/kids/english-quiz",
  },
  {
    title: "General Knowledge Quiz",
    icon: <Lightbulb color="#00aaff" strokeWidth={1.25} absoluteStrokeWidth />,
    description:
      "Broaden their horizons with diverse general knowledge quizzes.",
    href: "/quiz/kids/general-knowledge-quiz",
  },
  {
    title: "Computer science Quiz",
    icon: <Computer color="#00aaff" strokeWidth={1.25} absoluteStrokeWidth />,
    description:
      "Introduce your child to the fundamental concepts of computer science.",
    href: "/quiz/kids/computer-science-quiz",
  },
  {
    title: "English Theoretical",
    icon: (
      <BookOpenText color="#00aaff" strokeWidth={1.25} absoluteStrokeWidth />
    ),
    description:
      "Improve their language proficiency with interactive English quizzes.",
    href: "/quiz/kids/english-theoretical",
  },
  {
    title: "Science Theoretical",
    icon: (
      <FlaskConical color="#00aaff" strokeWidth={1.25} absoluteStrokeWidth />
    ),
    description:
      "Ignite their curiosity and expand their scientific knowledge.",
    href: "/quiz/kids/science-theoretical",
  },
];
