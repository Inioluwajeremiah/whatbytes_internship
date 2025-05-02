import React from "react";

interface ISyllabusWiseAnalysisData {
  id: string;
  title: string;
  value: number;
}

interface IData {
  data: ISyllabusWiseAnalysisData[];
}

const SyllabusWiseAnalysis: React.FC<IData> = ({ data }) => {
  return (
    <div className="flex flex-col p-4 border border-gray-200 rounded-md">
      {data.map((item) => (
        <div key={item.id} className="mt-5">
          <p className="text-gray-700 font-medium">{item.title}</p>
          <div className=" w-full flex flex-row items-center mt-2 gap-8">
            <div
              className={`relative w-full h-2 rounded-3xl flex-1 ${
                item.value >= 96
                  ? "bg-green-500/20"
                  : item.value >= 80 && item.value < 96
                  ? "bg-blue-500/20"
                  : item.value >= 60 && item.value < 80
                  ? "bg-orange-500/20"
                  : "bg-red-500/20"
              }`}
            >
              <div
                className={`absolute top-0 left-0 h-2 rounded-3xl ${
                  item.value >= 96
                    ? "bg-green-500"
                    : item.value >= 80 && item.value < 96
                    ? "bg-blue-500"
                    : item.value >= 60 && item.value < 80
                    ? "bg-orange-500"
                    : "bg-red-500"
                }`}
                style={{ width: `${item.value}%` }}
              ></div>
            </div>

            <p
              className={` text-base font-bold ${
                item.value >= 80 && item.value < 96
                  ? "text-blue-500"
                  : item.value >= 60 && item.value < 80
                  ? "text-orange-500"
                  : item.value >= 96
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {item.value}%
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SyllabusWiseAnalysis;
