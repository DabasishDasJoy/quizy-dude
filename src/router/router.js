import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Quizes from "../components/Quizes/Quizes";
import Statistics from "../components/Statistics/Statistics";

import Main from "../layouts/Main/Main";
import { topicQuizLoader } from "../loader/TopicQuizLoader";
import { topicsLoader } from "../loader/topicsLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: topicsLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/topic/:topicId",
        loader: ({ params }) => topicQuizLoader(params.topicId),
        element: <Quizes />,
      },
    ],
  },
]);
