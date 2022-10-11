import React, { useContext } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { TopicsContext } from "../../layouts/Main/Main";
const Statistics = () => {
  const { data } = useContext(TopicsContext);
  console.log("🚀 ~ file: Statistics.jsx ~ line 13 ~ Statistics ~ data", data);
  return (
    <div>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="total" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Statistics;
