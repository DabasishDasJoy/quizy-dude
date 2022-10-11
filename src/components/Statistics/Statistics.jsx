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
    <div className="bg-fixed bg-[url('https://images.unsplash.com/photo-1527176930608-09cb256ab504?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80')] bg-no-repeat bg-cover min-h-[100vh] bg-center py-[100px]">
      <div className="w-[60%] mx-auto border border-gray-400 bg-white rounded-lg p-5">
        <h1 className="text-3xl font-medium text-center mb-3 text-[#000A38]">
          Statistics
        </h1>
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
    </div>
  );
};

export default Statistics;
