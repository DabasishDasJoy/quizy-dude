import React, { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { CorrectAnsCountContext } from "../../Context/CorrectAnsContext";
import { OpenResultModalContext } from "../../Context/OpenResultModal";
import Quiz from "../Quiz/Quiz";
import Result from "../Result/Result";
import TitleBar from "../TitleBar";

const Quizes = () => {
  const {
    data: { logo, name, questions, total },
  } = useLoaderData();

  const [open, setOpen] = useContext(OpenResultModalContext);
  let [correctAns, setCorrectAns] = useContext(CorrectAnsCountContext);
  const hanldeBtnSubmit = () => {
    setOpen(true);
  };

  useEffect(() => setCorrectAns(0), [total]);

  return (
    <div
      className={
        "bg-fixed bg-[url('https://images.unsplash.com/photo-1527176930608-09cb256ab504?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80')] bg-no-repeat bg-cover min-h-[100vh] bg-center"
      }
    >
      <div className="backdrop-blur-sm bg-white/30 py-[100px]">
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

        <div className="flex justify-center items-center mt-5">
          <button
            onClick={hanldeBtnSubmit}
            className="bg-[#FA4729] hover:bg-white hover:text-[#111D5E] hover:outline outline-2 outline-[#FA4729] text-white px-5 py-2 rounded-lg font-bold transition delay-75 w-[50%] "
          >
            Submit
          </button>
        </div>

        <Result total={total}></Result>
      </div>
    </div>
  );
};

export default Quizes;
