import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Overview from "../components/Overview/Overview";
import Quiz from "../components/Quiz/Quiz";
import Main from "../layouts/Main/Main";
import { homeLoader } from "../loader/homeLoader";
import { topicQuizLoader } from "../loader/TopicQuizLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "/overview",
        element: <Overview />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/topic/:topicId",
        loader: ({ params }) => topicQuizLoader(params.topicId),
        element: <Quiz />,
      },
    ],
  },
]);
