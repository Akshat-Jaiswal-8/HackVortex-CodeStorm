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

interface FeatureDataProps {
  title: string;
  icon: React.JSX.Element;
  description: string;
}

export const features: FeatureDataProps[] = [
  {
    title: "Interactive Quiz Cards",
    icon: <CreditCard color="#00aaff" strokeWidth={1.25} absoluteStrokeWidth />,
    description:
      "Colorful, easy-to-navigate question cards that make learning feel like a game.",
  },
  {
    title: "Timed Challenges",
    icon: <Timer color="#00aaff" strokeWidth={1.25} absoluteStrokeWidth />,
    description:
      "Exciting time limits to boost quick thinking and decision-making skills.",
  },
  {
    title: "Multiple Choice Questions",
    icon: <ListTodo color="#00aaff" strokeWidth={1.25} absoluteStrokeWidth />,
    description:
      "Varied MCQ formats to test and expand knowledge across subjects.",
  },
  {
    title: "Speech-Based Answers",
    icon: <Mic color="#00aaff" strokeWidth={1.25} absoluteStrokeWidth />,
    description:
      "Innovative voice-answer questions to improve verbal skills and confidence.",
  },
  {
    title: "Adaptive Scoring System",
    icon: <Star color="#00aaff" strokeWidth={1.25} absoluteStrokeWidth />,
    description: "Fair point system rewarding correct answers and effort.",
  },
  {
    title: "Daily Streak Rewards",
    icon: (
      <CalendarCheck color="#00aaff" strokeWidth={1.25} absoluteStrokeWidth />
    ),
    description:
      "Motivating streak system to encourage consistent daily learning.",
  },
  {
    title: "Instant Feedback",
    icon: <Lightbulb color="#00aaff" strokeWidth={1.25} absoluteStrokeWidth />,
    description:
      "Immediate answer reveals to reinforce learning after each quiz.",
  },
  {
    title: "Progress Tracking",
    icon: (
      <ChartNoAxesCombined
        color="#00aaff"
        strokeWidth={1.25}
        absoluteStrokeWidth
      />
    ),
    description:
      "Detailed score summaries and progress reports to celebrate growth.",
  },
];
