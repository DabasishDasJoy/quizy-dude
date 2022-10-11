import { useContext } from "react";
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { TopicsContext } from "../../layouts/Main/Main";

const Statistics = () => {
  const { data } = useContext(TopicsContext);
  console.log("🚀 ~ file: Statistics.jsx ~ line 13 ~ Statistics ~ data", data);

  return (
    <div className="mt-[200px] w-[60%] mx-auto border border-gray-400 rounded-lg p-5">
      <h1 className="text-4xl text-center mb-3">Statistics</h1>
      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Line
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
