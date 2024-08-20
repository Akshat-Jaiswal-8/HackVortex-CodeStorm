import {
  CalendarCheck,
  ChartNoAxesCombined,
  CreditCard,
  Lightbulb,
  ListTodo,
  Mic,
  Star,
  Timer,
} from "lucide-react";

interface quizCategoriesProps {
  title: string;
  icon: React.JSX.Element;
}

export const quizCategories: quizCategoriesProps[] = [
  {
    title: "Professional Quiz",
    icon: <CreditCard color="#00aaff" strokeWidth={1.25} absoluteStrokeWidth />,
  },
  {
    title: "Kids Quiz",
    icon: <Timer color="#00aaff" strokeWidth={1.25} absoluteStrokeWidth />,
  },
  {
    title: "General Knowledge Quiz",
    icon: <ListTodo color="#00aaff" strokeWidth={1.25} absoluteStrokeWidth />,
  },
];
