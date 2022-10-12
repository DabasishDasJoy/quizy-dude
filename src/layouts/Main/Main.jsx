import React, { createContext, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";
import { CorrectAnsCountContext } from "../../Context/CorrectAnsContext";
import { OpenResultModalContext } from "../../Context/OpenResultModal";
import { ShowCorrectAnsContext } from "../../Context/ShowCorrectAnsContext";

export const TopicsContext = createContext([]);

const Main = () => {
  const topics = useLoaderData();
  let [correctAns, setCorrectAns] = useState(0);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <OpenResultModalContext.Provider value={[open, setOpen]}>
      <ShowCorrectAnsContext.Provider value={[visible, setVisible]}>
        <CorrectAnsCountContext.Provider value={[correctAns, setCorrectAns]}>
          <TopicsContext.Provider value={topics}>
            <Header />
            <Outlet />
          </TopicsContext.Provider>
        </CorrectAnsCountContext.Provider>
      </ShowCorrectAnsContext.Provider>
    </OpenResultModalContext.Provider>
  );
};

export default Main;
