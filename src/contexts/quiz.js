import React, { createContext } from "react";
import questions from "../data";

const initialState = {
  questions,
  currentQuestionIndex: 0,
};

export const QuizContext = createContext();
export const QuizProvider = ({ children }) => {
  

  return <QuizContext.Provider >{children}</QuizContext.Provider>;
};
