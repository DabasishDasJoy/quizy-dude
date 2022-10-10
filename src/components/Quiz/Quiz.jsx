import React from "react";
import { useLoaderData } from "react-router-dom";

const Quiz = () => {
  const quiz = useLoaderData();
  console.log("🚀 ~ file: Quiz.jsx ~ line 6 ~ Quiz ~ quiz", quiz);
  return (
    <div>
      <h1>Quiz</h1>
    </div>
  );
};

export default Quiz;
