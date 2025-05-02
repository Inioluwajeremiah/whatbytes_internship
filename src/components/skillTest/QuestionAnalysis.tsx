import React from "react";
import QuestionAnalysisPieChart from "./QuestionAnalysisPieChart";
import { IQuestionAnalysis } from "@/interfaces/dashboardInterface";

const QuestionAnalysis: React.FC<IQuestionAnalysis> = ({
  score,
  totalQuestion,
}) => {
  const COLORS = ["#4ade80", "#f87171"];
  return (
    <div className="min-w-[300px] ">
      <div className="w-full flex flex-row justify-between items-center">
        <p className="font-bold text-base ">Comparison Graph</p>
        <p className="font-bold text-base text-blue-500">
          {score}/{totalQuestion}
        </p>
      </div>

      <p className="text-sm text-gray-500 mt-4">
        <b>
          You scored {score} question correct out of {totalQuestion}.
        </b>
        However it still needs some improvements
      </p>

      {/* pie chart */}

      <div className="relative w-[300px] flex flex-col items-center justify-center mx-auto">
        <QuestionAnalysisPieChart
          data={[
            { name: "Correct Answers", value: Number(score) },
            {
              name: "Wrong Answers",
              value: totalQuestion - Number(score),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default QuestionAnalysis;
