import { create, StoreApi, UseBoundStore } from "zustand";

export interface DataStore {
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

export const useDataStore: UseBoundStore<StoreApi<DataStore>> =
  create<DataStore>()((set) => ({
    score: 0,
    isCorrect: null,
    correctAnswers: new Set(),
    isWrong: null,
    wrongAnswers: new Set(),
    skippedQuestions: new Set(),
    setSkipped: (questionIndex: number) =>
      set((state: DataStore): { skippedQuestions: Set<number> } => ({
        skippedQuestions: new Set(state.skippedQuestions).add(questionIndex),
      })),
    setCorrect: (questionIndex: number) =>
      set(
        (
          state: DataStore,
        ): { isCorrect: boolean; correctAnswers: Set<number> } => ({
          isCorrect: true,
          correctAnswers: new Set(state.correctAnswers).add(questionIndex),
        }),
      ),
    setWrong: (questionIndex: number) =>
      set(
        (
          state: DataStore,
        ): { isWrong: boolean; wrongAnswers: Set<number> } => ({
          isWrong: true,
          wrongAnswers: new Set(state.wrongAnswers).add(questionIndex),
        }),
      ),
    increaseScore: () =>
      set((state: DataStore): { score: number } => ({
        score: state.score + 1,
      })),
  }));
