import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Quizes from "../components/Quizes/Quizes";
import Statistics from "../components/Statistics/Statistics";

import Main from "../layouts/Main/Main";
import { homeLoader } from "../loader/homeLoader";
import { topicQuizLoader } from "../loader/TopicQuizLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: homeLoader,
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
