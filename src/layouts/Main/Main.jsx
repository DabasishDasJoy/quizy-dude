import React, { createContext, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";
import { CorrectAnsCountContext } from "../../Context/CorrectAnsContext";

export const TopicsContext = createContext([]);

const Main = () => {
  const topics = useLoaderData();
  let [correctAns, setCorrectAns] = useState(0);
  return (
    <CorrectAnsCountContext.Provider value={[correctAns, setCorrectAns]}>
      <TopicsContext.Provider value={topics}>
        <Header />
        <Outlet />
      </TopicsContext.Provider>
    </CorrectAnsCountContext.Provider>
  );
};

export default Main;
