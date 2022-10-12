import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { CorrectAnsCountContext } from "../../Context/CorrectAnsContext";
import Quiz from "../Quiz/Quiz";
import TitleBar from "../TitleBar";

const Quizes = () => {
  const {
    data: { logo, name, questions, total },
  } = useLoaderData();

  let [correctAns, setCorrectAns] = useContext(CorrectAnsCountContext);

  const hanldeBtnSubmit = () => {
    toast.success(`You got ${correctAns} out ${total}`);
    setCorrectAns(0);
  };

  return (
    <div
      className={
        "bg-fixed bg-[url('https://images.unsplash.com/photo-1527176930608-09cb256ab504?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80')] bg-no-repeat bg-cover min-h-[100vh] bg-center py-[100px]"
      }
    >
      <div className="flex justify-center items-center">
        <div className="flex gap-2">
          <img src={logo} alt="" className="w-10 rounded-full" />
          <h1 className="text-3xl font-bold text-center text-[#000A38]">
            {name}
          </h1>
        </div>
      </div>
      <TitleBar></TitleBar>

      <div className="flex flex-col gap-5 bg-80 text-[#000A38] mt-5">
        {questions.map((question, idx) => (
          <Quiz key={question.id} question={question} idx={idx + 1}></Quiz>
        ))}
      </div>
      <div>
        <button onClick={hanldeBtnSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Quizes;
