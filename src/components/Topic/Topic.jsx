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
    <Card className="w-45 border border-gray-400 rounded-xl p-2">
      <CardHeader floated={true}>
        <img
          src={logo}
          alt="topic-logo"
          className=" bg-slate-800 rounded-xl w-full"
        />
      </CardHeader>
      <CardBody className="grid  grid-cols-2 mt-2">
        <div className="col-span-1">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography color="blue" className="font-medium" textGradient>
            Total <span className="text-[#FA4729]">{total}</span> Quizes
          </Typography>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <button className="bg-[#FA4729] hover:bg-white hover:text-[#111D5E] hover:outline outline-2 outline-[#FA4729] text-white px-5 py-2 rounded-full font-medium transition delay-75">
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
