import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";

const Topic = ({ topic: { id, name, total, logo } }) => {
  return (
    <Card className="w-45 border border-gray-400 rounded-xl p-2">
      <CardHeader floated={true}>
        <img src={logo} alt="topic-logo" className=" bg-slate-800 rounded-xl" />
      </CardHeader>
      <CardBody className="grid  grid-cols-3 mt-2 px-3">
        <div className="col-span-2">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography color="blue" className="font-medium" textGradient>
            Total Quizes: {total}
          </Typography>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <button
            className={`bg-[#FA4729] hover:bg-white hover:text-[#111D5E] hover:outline outline-2 outline-[#FA4729] text-white px-5 py-2 rounded-full font-medium transition delay-75`}
          >
            Practice
          </button>
        </div>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2"></CardFooter>
    </Card>
  );
};

export default Topic;
