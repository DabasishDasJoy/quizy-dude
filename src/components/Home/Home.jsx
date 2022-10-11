import React, { useContext } from "react";
import { TopicsContext } from "../../layouts/Main/Main";
import Topic from "../Topic/Topic";

const Home = () => {
  const { data } = useContext(TopicsContext);

  return (
    <>
      <div className="bg-black bg-no-repeat bg-cover h-[80vh] pt-[300px] flex justify-center bg-gradient-to-t  from-black to-gray-300 relative">
        <img
          src="https://cdn.elearningindustry.com/wp-content/uploads/2019/01/8-types-of-interactive-quiz-formats-to-use-in-your-elearning-courses-1024x574.jpg"
          alt=""
          className="w-full h-full mix-blend-overlay absolute object-cover top-0"
        />
        <div className="text-white text-center">
          <h1 className="text-[48px] font-bold">Welcome To Quiz Dude</h1>
          <p>Here you can test yourself with bunch of quizes.</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[80%]  rounded-md mt-[-100px] bg-transparent grid grid-cols-3 gap-5">
          {/* <h1 className="text-3xl font-bold text-center">Topics</h1> */}
          {data.map((topic) => (
            <Topic key={topic.id} topic={topic}></Topic>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
