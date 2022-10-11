import React, { useContext } from "react";
import titleBar from "../../assets/Images/title.png";
import { TopicsContext } from "../../layouts/Main/Main";
import Topic from "../Topic/Topic";
const Home = () => {
  const { data } = useContext(TopicsContext);

  return (
    <div className="text-[#111D5E]">
      <div className="bg-no-repeat bg-cover h-[90vh] pt-[200px] flex justify-center bg-gradient-to-t  from-black to-gray-300">
        <img
          src="https://cdn.elearningindustry.com/wp-content/uploads/2019/01/8-types-of-interactive-quiz-formats-to-use-in-your-elearning-courses-1024x574.jpg"
          alt=""
          className="w-full h-full mix-blend-overlay absolute object-cover top-0"
        />
        <div className="text-white text-center">
          <h1 className="text-[52px] font-extrabold leading-[62px] tracking-[2px]">
            Welcome To Quiz Dudu
          </h1>
          <p>Here you can test yourself with bunch of quizes.</p>
        </div>
      </div>

      <div
        className="relative bg-[url('https://images.unsplash.com/photo-1588345921489-f61ad896c562?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-no-repeat"
        // style={{backgroundImage: `${mainBg}`}
      >
        <div className="relative mx-auto md:w-[80%] w-full md:top-[-100px] top-0 rounded-lg bg-white p-10">
          <h1 className="text-3xl font-bold text-center">Topics</h1>
          <img src={titleBar} alt="" className="mx-auto mt-1" />
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
