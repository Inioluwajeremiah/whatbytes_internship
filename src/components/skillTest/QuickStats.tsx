import React from "react";
import { quickStatsData } from "@/data/dashboardData";
import { IQuickStats } from "@/interfaces/Interface";
import PercentileLineChart from "./ComparisonGraph";

const QuickStats: React.FC<IQuickStats> = ({ statsData }) => {
  const averagePercentile = "72%";

  return (
    <div>
      <div className="w-full p-4 rounded-md border border-gray-200 mt-4 ">
        <p className="font-bold text-base ">Quick Statistics</p>
        <div className="w-full flex flex-row gap-2 items-start md:items-center lg:items-start xl:items-center flex-wrap justify-start md:flex-nowrap lg:flex-wrap xl:flex-nowrap mt-2 ">
          {quickStatsData.map((item, index) => (
            <div
              key={item.id}
              className={`w-full flex flex-row items-center md:justify-center md:px-4 lg:justify-start lg:px-0 xl:justify-center xl:px-4 mt-4 md:mt-0 lg:mt-4 xl:mt-0 gap-3 ${
                index !== 0 &&
                "md:border-l lg:border-l-0 xl:border-l border-l-gray-200"
              }`}
            >
              {/* icon */}
              <div className="min-w-12 h-12 flex flex-col justify-center items-center rounded-full bg-[#e8e8e8] ">
                <img
                  key={item.id}
                  src={item.icon}
                  alt={`${item.title} icon`}
                  className="w-6 h-6"
                />
              </div>
              {/* title and subtitle */}
              <div>
                <p className="text-lg font-bold">
                  {item.id === "rank"
                    ? statsData.rank
                    : item.id === "percentile"
                    ? statsData.percentile + "%"
                    : statsData.correctAnswers + "/15"}
                </p>
                <p className="text-sm text-gray-500">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* comparison graph */}
      <div className="w-full p-4 rounded-md border border-gray-200 mt-4 ">
        <p className="font-bold text-base ">Comparison Graph</p>
        <div className="w-full flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between my-4">
          <p className="text-sm text-gray-500 mt-4">
            <b>You scored {statsData.percentile} percentile</b> which is lower
            than the average {averagePercentile} of all the engineers that took
            the test
          </p>
          {/* icon */}
          <div className="min-w-12 h-12 flex flex-col justify-center items-center rounded-full bg-[#e8e8e8]">
            <img src="/graph.png" alt={`graph icon`} className="w-6 h-6" />
          </div>
        </div>

        <PercentileLineChart
          data={[
            { name: "Student 1", value: 35 },
            { name: "Student 2", value: 65 },
            { name: "Student 3", value: 85 },
            { name: "Student 4", value: 10 },
            { name: "Student 5", value: 80 },
            { name: "You", value: Number(statsData.percentile) },
          ]}
        />
      </div>
    </div>
  );
};

export default QuickStats;
