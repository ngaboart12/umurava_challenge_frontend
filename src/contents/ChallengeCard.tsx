import React from "react";

const ChallengeCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 border">
      <div className="relative">
        <img src="/umura-logo.png" alt="Umurava" className="w-full h-36 bg-blue-500 rounded-lg" />
        <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
          Open
        </span>
      </div>
      <h3 className="text-lg font-semibold mt-4">Design a Dashboard for SokoFund</h3>
      <p className="text-sm text-gray-600">Skills Needed:</p>
      <div className="flex flex-wrap gap-2 my-2">
        <span className="bg-gray-200 px-2 py-1 text-xs rounded">UI/UX Design</span>
        <span className="bg-gray-200 px-2 py-1 text-xs rounded">User Research</span>
      </div>
      <p className="text-sm text-gray-600">Seniority Level: <span className="font-medium">Junior, Intermediate, Senior</span></p>
      <p className="text-sm text-gray-600">Timeline: <span className="font-medium">5 days</span></p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded w-full">
        View Challenge
      </button>
    </div>
  );
};

export default ChallengeCard;
