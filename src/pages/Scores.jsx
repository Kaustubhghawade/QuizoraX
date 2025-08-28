import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";

export default function ScorePage({ score, total }) {
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  const wrong = total - score;
  const accuracy = ((score / total) * 100).toFixed(1); // ✅ Calculate accuracy %

  const data = [
    { name: "Correct", value: score },
    { name: "Wrong", value: wrong },
  ];

  const COLORS = ["#4CAF50", "#F44336"];

  useEffect(() => {
    if (score === total) {
      setShowConfetti(true);
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [score, total]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('https://images.unsplash.com/photo-1673526759327-54f1f5b27322?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
        />
      )}

      <div className="bg-[url('https://images.unsplash.com/photo-1673526759327-54f1f5b27322?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] p-8 rounded-2xl shadow-lg text-center w-[90%] md:w-[500px]">
        <h1 className="text-3xl font-bold mb-4 text-[#EEF1DA]">
          {score === total ? " Perfect Score!" : " Quiz Completed!"}
        </h1>

        <p className="text-lg mb-6 text-[#EEF1DA]">
          You scored <span className="text-[#D5E5D5] font-bold">{score}</span> out of{" "}
          <span className="text-[#DDF4E7] font-bold">{total}</span>
        </p>

        {score === total ? (
          <p className="text-yellow-300 font-semibold mb-4">
            🌟 Amazing! You nailed every question!
          </p>
        ) : (
          <p className="text-yellow-300 font-semibold mb-4">
            💪 Keep going! You're improving step by step.
          </p>
        )}

        <PieChart width={400} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend /> 
        </PieChart>

        <div className="mt-6">
          <p className="text-[#769777] font-semibold text-2xl"> Correct: {score}</p>
          <p className="text-[#9b8377] font-semibold text-2xl">  Wrong: {wrong}</p>
          <p className="text-3xl font-bold  mt-3 text-[#c9cfb3] ">
             Accuracy: {accuracy}%
          </p>
        </div>

        <button
          onClick={() => navigate("/dashboard")}
          className="mt-8 px-6 py-3 bg-[#4A4947] text-[#D8D2C2] rounded-xl shadow-md hover:bg-[#D8D2C2] hover:text-[#4A4947] transition"
        >
          Try Another
        </button>
      </div>
    </div>
  );
}
