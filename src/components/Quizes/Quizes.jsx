import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const Quizes = () => {
  const {
    data: { name, questions },
  } = useLoaderData();

  return (
    <div
      className={
        "bg-fixed bg-[url('http://iguru.wgl-demo.net/wp-content/uploads/2019/09/home_03-bg.jpg?id=2599')] bg-no-repeat object-cover min-h-[100vh] bg-center pt-[120px] flex flex-col gap-5 bg-80"
      }
    >
      <h1 className="text-3xl font-bold text-center">{name}</h1>
      {questions.map((question, idx) => (
        <Quiz key={question.id} question={question} idx={idx + 1}></Quiz>
      ))}
    </div>
  );
};

export default Quizes;
