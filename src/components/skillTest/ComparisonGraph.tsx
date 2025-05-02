import { IQuestionAnalysisGraphData } from "@/interfaces/Interface";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const PercentileLineChart: React.FC<IQuestionAnalysisGraphData> = ({
  data,
}) => {
  const userPercentile = data.find((item) => item.name === "You");
  return (
    <ResponsiveContainer width="100%" height={300} className="">
      <LineChart data={data} margin={{ top: 20, bottom: 5 }} className="-ml-6">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 100]} />
        <Tooltip />

        <Line
          type="basis"
          dataKey="value"
          stroke="#8884d8"
          strokeWidth={3}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />

        <ReferenceLine
          y={userPercentile?.value}
          label="Your Percentile"
          stroke="#f87171"
          strokeDasharray="5 5"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PercentileLineChart;
