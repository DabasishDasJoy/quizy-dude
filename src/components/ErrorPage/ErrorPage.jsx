import React from "react";
import { useRouteError } from "react-router-dom";

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
      </div>
    </div>
  );
};

export default ErrorPage;
