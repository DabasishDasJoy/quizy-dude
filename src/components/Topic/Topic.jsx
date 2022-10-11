import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic: { id, name, total, logo } }) => {
  return (
    <Card className="w-45 border border-gray-200 rounded-xl p-2 shadow-2xl">
      <CardHeader floated={true}>
        <img
          src={logo}
          alt="topic-logo"
          className=" bg-slate-800 rounded-xl w-full"
        />
      </CardHeader>
      <CardBody className="flex lg:flex-row md:flex-col justify-between mt-2">
        <div className="">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography color="blue" className="font-medium" textGradient>
            Total <span className="text-[#FA4729]">{total}</span> Quizes
          </Typography>
        </div>

        <div className=" flex md:justify-center justify-end items-center">
          <button className="bg-[#FA4729] hover:bg-white hover:text-[#111D5E] hover:outline outline-2 outline-[#FA4729] text-white px-5 py-2 rounded-lg font-medium transition delay-75 md:mt-2">
            <Link
              to={`/topic/${id}`}
              className="flex justify-center items-center gap-1"
            >
              <FontAwesomeIcon icon={faHandPointRight} />
              Practice
            </Link>
          </button>
        </div>
      </CardBody>
    </Card>
  );
};

export default Topic;
