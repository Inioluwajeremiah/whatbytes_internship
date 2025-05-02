"use client";
import Modal from "@/components/Modal";
import QuestionAnalysis from "@/components/skillTest/QuestionAnalysis";
import QuickStats from "@/components/skillTest/QuickStats";
import SyllabusWiseAnalysis from "@/components/skillTest/SyllabusWiseAnalysis";
import UpdateScores from "@/components/skillTest/UpdateScores";
import { SyllabusWiseAnalysisData, htmlData } from "@/data/dashboardData";

import { useEffect, useState } from "react";

export default function Home() {
  const totalQuestion = 15;

  const [statsData, setStatsData] = useState({
    rank: 1,
    percentile: 30,
    correctAnswers: 10,
  });

  const [toggleUpdateModal, setToggleUpdateModal] = useState(false);

  const handleToggleUpdateModal = () => {
    setToggleUpdateModal(!toggleUpdateModal);
  };

  const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStatsData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  useEffect(() => {
    const getData = localStorage.getItem("stats_whatbytes");
    const parsedData = getData ? JSON.parse(getData) : null;

    if (parsedData) {
      setStatsData({
        rank: parsedData.rank || 1,
        percentile: parsedData.percentile || 30,
        correctAnswers: parsedData.correctAnswers || 10,
      });
    }
  }, []);

  return (
    <div className="p-10 flex flex-col lg:flex-row items-start gap-10 mt-20 lg:mt-0">
      {/* left container */}
      <div className="w-full lg:w-[60%]">
        {/* html div */}
        <div className="flex flex-col justify-start sm:flex-row items-start sm:items-center sm:justify-between gap-6 p-4 border border-gray-200 rounded-md">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <img src="/html.png" alt="html icon" className="w-10 h-10" />
            <div>
              <p className="font-bold text-base ">{htmlData.title}</p>
              <p className="text-base text-gray-700 font-medium">
                Questions: {htmlData.questions} | Duration: {htmlData.questions}{" "}
                | Submitted on {htmlData.dateSubmitted}
              </p>
            </div>
          </div>
          <button
            onClick={handleToggleUpdateModal}
            className="cursor-pointer mr-auto sm:mr-0 bg-blue-900 border-2  border-black text-white font-black rounded-md px-4 py-2"
          >
            Update
          </button>
        </div>
        {/* quick stats and comparison graph div  */}
        <QuickStats statsData={statsData} />
      </div>

      {/* right container */}
      <div className="w-full lg:w-[40%]">
        {/* syllabus wise analysis container */}
        <SyllabusWiseAnalysis data={SyllabusWiseAnalysisData} />
        {/* question analysis container */}
        <div className=" w-full p-4 rounded-md border border-gray-200 mt-4 mx-auto overflow-x-scroll">
          <QuestionAnalysis
            score={statsData.correctAnswers}
            totalQuestion={totalQuestion}
          />
        </div>
      </div>

      {/* update score modal by clicking on update button */}
      {toggleUpdateModal && (
        <Modal
          closeModal={() => setToggleUpdateModal(false)}
          children={
            <UpdateScores
              statsData={statsData}
              totalQuestion={totalQuestion}
              handleFormInput={handleFormInput}
              closeModal={() => setToggleUpdateModal(false)}
            />
          }
        />
      )}
    </div>
  );
}
