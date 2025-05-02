"use client";
import { IUpdateScores } from "@/interfaces/dashboardInterface";
import React from "react";

const UpdateScores: React.FC<IUpdateScores> = ({
  statsData,
  totalQuestion,
  handleFormInput,
  closeModal,
}) => {
  const isRankError = statsData.rank === ""; // checks if rank field is empty
  const isPercentileError =
    statsData.percentile === "" || Number(statsData.percentile) > 100; // checks if percentile field is empty or greater than 0
  const isScoreError =
    statsData.correctAnswers === "" ||
    Number(statsData.correctAnswers) > totalQuestion; // checks if correct answers is not empty and is not greater than total questions

  const disableButton = isPercentileError || isPercentileError || isScoreError; // disable button if an error exists in the form

  const handleSaveButton = () => {
    localStorage.setItem("stats_whatbytes", JSON.stringify(statsData));
    closeModal();
  };
  const handleCancelButton = () => {
    closeModal();
  };
  return (
    <form className="w-[98%]  md:w-full md:h-full lg:mt-0 bg-white rounded-2xl p-4 md:p-8 lg:p-10 overflow-y-scroll">
      {/* form header */}
      <div className="w-full flex flex-row justify-between items-center mb-10">
        <p className="text-lg sm:text-xl md:text-2xl font-bold">
          Update Scores
        </p>
        <img
          src="/html.png"
          alt="html icon"
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
        />
      </div>

      {/* form fields */}
      {/* rank */}
      <div className="flex flex-row items-center justify-between gap-4 mt-4 ">
        <div className="w-[60%] flex flex-row items-center  gap-4">
          <p className="w-6 h-6  sm:w-8 sm:h-8 p-2 sm:p-2 text-sm sm:text-base font-bold bg-blue-900 flex justify-center items-center rounded-full text-white text-center">
            1
          </p>
          <p className="text-sm sm:text-base  ">
            Update your <b>Rank</b>
          </p>
        </div>
        <div className="w-[40%] flex flex-col justify-end">
          <input
            type="number"
            value={statsData.rank}
            placeholder="Rank"
            name="rank"
            id="rank"
            className={`outline-none p-2 rounded-md ${
              isRankError ? "border  border-red-500" : "border border-blue-500"
            }`}
            onChange={handleFormInput}
          />
          {isRankError && (
            <p className="text-red-600 text-xs sm:text-sm font-semibold mt-2">
              required | should be a number
            </p>
          )}
        </div>
      </div>
      {/* percentile */}
      <div className="flex flex-row items-center justify-between gap-4 mt-6 ">
        <div className="w-[60%] flex flex-row items-center  gap-4">
          <p className="w-6 h-6  sm:w-8 sm:h-8 p-2 sm:p-2 text-sm sm:text-base font-bold bg-blue-900 flex justify-center items-center rounded-full text-white text-center">
            2
          </p>
          <p className="text-sm sm:text-base">
            Update your <b>Percentile</b>
          </p>
        </div>
        <div className="w-[40%] flex flex-col justify-end">
          <input
            type="number"
            value={statsData.percentile}
            placeholder="Percentile"
            name="percentile"
            id="percentile"
            className={`outline-none p-2 rounded-md ${
              isPercentileError
                ? "border border-red-500"
                : "border border-blue-500"
            }`}
            onChange={handleFormInput}
          />
          {isPercentileError && (
            <p className="text-red-600 text-xs sm:text-sm font-semibold">
              required | percentile 0-100
            </p>
          )}
        </div>
      </div>

      {/* update score */}
      <div className="w-full flex flex-row items-center justify-between gap-4  mt-6">
        <div className="w-[60%] flex flex-row items-center  gap-4">
          <p className="w-6 h-6  sm:w-8 sm:h-8 p-2 sm:p-2 text-sm sm:text-base font-bold bg-blue-900 flex justify-center items-center rounded-full text-white text-center">
            3
          </p>
          <p className="text-sm sm:text-base">
            Update your <b>Current Score (out of {totalQuestion})</b>
          </p>
        </div>
        <div className="w-[40%] flex flex-col justify-end">
          <input
            type="number"
            value={statsData.correctAnswers}
            placeholder="Correct Answer"
            name="correctAnswers"
            id="correctAnswers"
            className={`outline-none p-2 rounded-md ${
              isScoreError ? "border border-red-500" : "border border-blue-500"
            }`}
            onChange={handleFormInput}
          />
          {isScoreError && (
            <p className="text-red-600 text-xs sm:text-sm font-semibold">
              required | should be a number | should not exceed total number of
              questions
            </p>
          )}
        </div>
      </div>

      {/* buttons */}
      <div className="w-full flex flex-row items-center justify-end gap-4 mt-8">
        <button
          onClick={handleCancelButton}
          className="cursor-pointer bg-white hover:bg-blue-900 rounded-md border-2 border-blue-900 px-4 py-2"
        >
          <p className="text-blue-900 hover:text-white text-base font-bold">
            Cancel
          </p>
        </button>
        <button
          disabled={disableButton}
          className={`flex flex-row items-center gap-3 ${
            !disableButton && "cursor-pointer"
          }  ${disableButton ? "bg-blue-400" : "bg-blue-900"}   ${
            !disableButton && "hover:bg-blue-600"
          } rounded-md border-2 border-black px-4 py-2`}
          onClick={handleSaveButton}
        >
          <p className="text-base font-bold text-white ">Save</p>
          <img src="/arrow.svg" alt="forward arrow" />
        </button>
      </div>
    </form>
  );
};

export default UpdateScores;
