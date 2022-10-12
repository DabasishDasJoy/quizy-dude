import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div>
        <h1 className="text-[56px] font-extrabold">Opps!</h1>
        <p>An unexpected error occured.</p>
        <p>
          <i>
            {error.status}
            {error.statusText || error.message}
          </i>
        </p>
        <button className="px-5 py-2 font-bold mt-5 bg-white text-black rounded-lg hover:bg-slate-300">
          <Link to={"/"}>Go to Home</Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
