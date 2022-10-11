import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div>
        <h1>Opps!</h1>
        <p>An unexpected error occured.</p>
        <p>
          <i>
            {error.status}
            {error.statusText || error.message}
          </i>
        </p>
        <button className="btn">
          <Link to={"/"}>Back to Home</Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
