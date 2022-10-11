import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const Quizes = () => {
  const {
    data: { name, questions },
  } = useLoaderData();

  console.log(
    "🚀 ~ file: Quizes.jsx ~ line 12 ~ Quizes ~ questions",
    questions
  );
  // console.log("🚀 ~ file: Quiz.jsx ~ line 12 ~ Quiz ~ logo", logo);
  return (
    <div
      className={`bg-fixed bg-[url('https://live.staticflickr.com/65535/52413593240_e00326e727_o.png')] bg-no-repeat bg-contain min-h-[100vh] bg-center pt-[120px]`}
    >
      <h1 className="text-3xl font-bold text-center">{name}</h1>
      {questions.map((question, idx) => (
        <Quiz key={question.id} question={question} idx={idx + 1}></Quiz>
      ))}
    </div>
  );
};

export default Quizes;
