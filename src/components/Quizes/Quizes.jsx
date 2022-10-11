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
      className={`bg-fixed bg-[url('https://live.staticflickr.com/65535/52413593240_e00326e727_o.png')] bg-no-repeat bg-contain h-[100vh] bg-center pt-[120px] text-center`}
    >
      <h1 className="text-3xl font-bold">{name}</h1>
      {questions.map((question) => (
        <Quiz key={question.id} question={question}></Quiz>
      ))}
    </div>
  );
};

export default Quizes;
