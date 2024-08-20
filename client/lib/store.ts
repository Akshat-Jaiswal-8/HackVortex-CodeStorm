import { create } from "zustand";

export interface GkStore {
  score: number;
  isCorrect: boolean | null;
  correctAnswers: Set<number>;
  isWrong: boolean | null;
  wrongAnswers: Set<number>;
  skippedQuestions: Set<number>;
  setSkipped: (questionIndex: number) => void;
  setCorrect: (questionIndex: number) => void;
  setWrong: (questionIndex: number) => void;
  increaseScore: () => void;
}

export const useGkStore = create<GkStore>()((set) => ({
  score: 0,
  isCorrect: null,
  correctAnswers: new Set(),
  isWrong: null,
  wrongAnswers: new Set(),
  skippedQuestions: new Set(),
  setSkipped: (questionIndex: number) =>
    set((state) => ({
      skippedQuestions: new Set(state.skippedQuestions).add(questionIndex),
    })),
  setCorrect: (questionIndex: number) =>
    set((state) => ({
      isCorrect: true,
      correctAnswers: new Set(state.correctAnswers).add(questionIndex),
    })),
  setWrong: (questionIndex: number) =>
    set((state) => ({
      isWrong: true,
      wrongAnswers: new Set(state.wrongAnswers).add(questionIndex),
    })),
  increaseScore: () => set((state: GkStore) => ({ score: state.score + 1 })),
}));
