import React, { useContext } from "react";
import { TopicsContext } from "../../layouts/Main/Main";
import TitleBar from "../TitleBar";
import Topic from "../Topic/Topic";
const Home = () => {
  const { data } = useContext(TopicsContext);

  return (
    <div className="text-[#111D5E]">
      <div className="bg-no-repeat bg-cover md:h-[90vh] h-[50vh] flex justify-center bg-gradient-to-t  from-black to-gray-300">
        <img
          src="https://cdn.elearningindustry.com/wp-content/uploads/2019/01/8-types-of-interactive-quiz-formats-to-use-in-your-elearning-courses-1024x574.jpg"
          alt=""
          className="w-full h-full mix-blend-overlay absolute object-cover top-0"
        />
        <div className="text-white text-center flex flex-col items-center justify-center">
          <h1 className="text-[52px] font-extrabold leading-[62px] tracking-[2px]">
            Welcome to{" "}
            <span className="font-extrabold text-[#FA4729]">Quizy Dude</span>
          </h1>
          <p>Here you can test yourself with bunch of quizes.</p>
        </div>
      </div>

      <div className="relative bg-[url('https://images.unsplash.com/photo-1588345921586-7408ea1b2c3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-no-repeat">
        <div className="relative mx-auto lg:w-[85%] md:w-[90%] w-full md:top-[-100px] top-0 md:rounded-lg bg-white p-10">
          <h1 className="text-3xl font-bold text-center">Topics</h1>
          <TitleBar></TitleBar>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
            {data.map((topic) => (
              <Topic key={topic.id} topic={topic}></Topic>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
