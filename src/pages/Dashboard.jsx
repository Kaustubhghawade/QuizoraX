import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {
  const navigate = useNavigate();

  // Check authentication
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/login"); // redirect if not logged in
    }
  }, [navigate]);

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#222831]">
    
      <div className="bg-[#393E46] shadow-xl rounded-2xl p-10 w-[400px] text-center">
        <h1 className="text-2xl font-bold text-[#948979] mb-4">
          Welcome, <span className="text-[#DFD0B8]">{user?.email}</span> 
        </h1>
        <p className="text-[#DFD0B8] mb-6">Choose an option to continue</p>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => navigate("/create-quiz")}
            className="bg-[#DDDAD0] text-[#57564F] py-2 rounded-lg shadow-md hover:bg-[#A2AF9B] transition"
          >
            Create Quiz
          </button>

          <button
            onClick={() => navigate("/attempt-quiz")}
            className="bg-[#DDDAD0] text-[#57564F] py-2 rounded-lg shadow-md hover:bg-[#A2AF9B] transition"
          >
            Attempt Quiz
          </button>

          <button
            onClick={() => navigate("/scores")}
            className="bg-[#DDDAD0] text-[#57564F] py-2 rounded-lg shadow-md hover:bg-[#A2AF9B] transition"
          >
            View Scores
          </button>

          <button
            onClick={() => {
              localStorage.removeItem("user");
              navigate("/login");
            }}
            className="bg-[#DDDAD0] text-[#57564F] py-2 rounded-lg shadow-md hover:bg-[#fa0707] transition mt-4"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
