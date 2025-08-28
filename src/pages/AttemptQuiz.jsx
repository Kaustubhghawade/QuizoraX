import React, { useState, useEffect } from "react";
import ScorePage from "./Scores"; // ✅ Import ScorePage
import { useNavigate } from "react-router-dom";

const AttemptQuiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
 const navigate = useNavigate();

  // load saved quizzes
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("quizzes")) || [];
    setQuizzes(stored);
  }, []);

  const handleAnswer = (qIndex, option) => {
    setAnswers({ ...answers, [qIndex]: option });
  };

  const handleSubmit = () => {
    let correct = 0;
    selectedQuiz.questions.forEach((q, i) => {
      if (answers[i] === q.options[q.correctAnswer]) {  // ✅ FIX: compare correctly
        correct++;
      }
    });
    setScore(correct);
  };

  if (!selectedQuiz) {
    return (
      <div className="bg-[#6c6363] h-screen w-screen">
      <div className="p-6 ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M8.50625 2.14053C8.9926 2.04828 9.49451 2 10.0077 2C10.5209 2 11.0228 2.04828 11.5091 2.14053M8.50625 17.8749C8.8333 17.9369 9.16739 17.979 9.50721 18M2.14053 11.5091C2.04828 11.0228 2 10.5209 2 10.0077C2 9.49451 2.04828 8.99259 2.14053 8.50625M17.8749 8.50625C17.9369 8.8333 17.979 9.16739 18 9.50721M14.5089 3.38308C14.9181 3.66174 15.3071 3.98251 15.67 4.34539C16.0329 4.70827 16.3536 5.09731 16.6323 5.50644M5.50645 16.6323C5.09731 16.3536 4.70827 16.0329 4.34539 15.67C3.98252 15.3071 3.66175 14.9181 3.38309 14.5089M3.38309 5.50644C3.66175 5.09731 3.98252 4.70827 4.34539 4.34539C4.70827 3.98251 5.09731 3.66174 5.50645 3.38308" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M12.7723 19.6052L10.8168 13.9874L10.8168 13.9874C10.0814 11.8748 9.71367 10.8184 10.2664 10.2662C10.8191 9.71389 11.8762 10.0813 13.9906 10.8162L19.601 12.7661C20.7738 13.1737 21.3603 13.3775 21.4868 13.7723C21.5217 13.8811 21.5337 13.996 21.5222 14.1096C21.4802 14.522 20.9488 14.8429 19.8859 15.4845C19.2044 15.8958 18.8637 16.1015 18.7728 16.4119C18.7471 16.4998 18.7361 16.5912 18.7402 16.6827C18.7549 17.0057 19.0371 17.2863 19.6016 17.8473L21.4569 19.6912L21.4569 19.6912C21.7347 19.9673 21.8735 20.1053 21.9373 20.2597C22.0206 20.4617 22.0209 20.6885 21.9381 20.8907C21.8748 21.0453 21.7363 21.1837 21.4593 21.4605L21.4593 21.4605L21.4593 21.4605C21.1829 21.7366 21.0448 21.8747 20.8904 21.9379C20.6884 22.0207 20.4619 22.0207 20.2599 21.9379C20.1055 21.8747 19.9673 21.7366 19.691 21.4605L19.691 21.4605L17.8288 19.5998L17.8288 19.5998C17.2736 19.045 16.9959 18.7676 16.6773 18.7509C16.5809 18.7459 16.4843 18.7577 16.392 18.7858C16.0867 18.8786 15.8841 19.2146 15.4789 19.8867C14.8453 20.9377 14.5285 21.4632 14.1218 21.5094C14.0019 21.5231 13.8804 21.5104 13.7658 21.4724C13.3774 21.3435 13.1757 20.764 12.7723 19.6052Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
        <h1 className="text-xl font-bold mb-4">Choose a Quiz</h1>
        {quizzes.length === 0 ? (
          <p>No quizzes available</p>
        ) : (
          quizzes.map((quiz, i) => (
            <button
              key={i}
              onClick={() => setSelectedQuiz(quiz)}
              className="block w-full text-left p-3 mb-2 bg-[#FFDAB3] hover:bg-[#574964] hover:text-[#FFDAB3] rounded"
            >
              {quiz.title}
            </button>
          ))
        )}
      </div>
      </div>
    );
  }

  // ✅ Show ScorePage after submit
  if (score !== null) {
    return <ScorePage score={score} total={selectedQuiz.questions.length} />;
  }

  return (<div className=" h-screen w-screen bg-[url('https://cdn.prod.website-files.com/6768f29a6d5da42209173f20/67b81abb4efff7a7b7189bd3_Visible%20Village-t.svg')]">
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4 text-[#D5E5D5]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M8.5 7.5C8.5 6.48748 9.39543 5.5 10.5 5.5C11.6046 5.5 12.5 6.32081 12.5 7.33333C12.5 7.69831 12.3837 8.03837 12.1831 8.32406C11.5854 9.17553 10.5 9.98748 10.5 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
    <path d="M10.5 13.5H10.509" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M8 19.5C9.05038 20.3697 10.3145 20.9238 11.7635 21.0188C12.9052 21.0937 14.0971 21.0936 15.2365 21.0188C15.6288 20.9931 16.0565 20.9007 16.4248 20.751C16.8345 20.5845 17.0395 20.5012 17.1437 20.5138C17.2478 20.5264 17.3989 20.6364 17.7011 20.8563C18.2339 21.244 18.9051 21.5225 19.9005 21.4986C20.4038 21.4865 20.6555 21.4804 20.7681 21.2909C20.8808 21.1013 20.7405 20.8389 20.4598 20.3141C20.0706 19.5862 19.824 18.7529 20.1977 18.0852C20.8413 17.1315 21.3879 16.0021 21.4678 14.7823C21.5107 14.1269 21.5107 13.4481 21.4678 12.7927C21.4146 11.9799 21.2173 11.2073 20.9012 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M12.2365 17.0188C15.5829 16.7993 18.2485 14.1315 18.4678 10.7823C18.5107 10.1269 18.5107 9.4481 18.4678 8.79268C18.2485 5.44345 15.5829 2.77563 12.2365 2.55611C11.0948 2.48122 9.90285 2.48137 8.76352 2.55611C5.41711 2.77563 2.75153 5.44345 2.53219 8.79268C2.48927 9.4481 2.48927 10.1269 2.53219 10.7823C2.61208 12.0021 3.15875 13.1315 3.80233 14.0852C4.17601 14.7529 3.92939 15.5862 3.54017 16.3141C3.25953 16.8389 3.11921 17.1013 3.23187 17.2909C3.34454 17.4804 3.59621 17.4865 4.09954 17.4986C5.09493 17.5225 5.76615 17.244 6.29894 16.8563C6.60112 16.6364 6.75221 16.5264 6.85635 16.5138C6.96048 16.5012 7.16541 16.5845 7.57521 16.751C7.94352 16.9007 8.37117 16.9931 8.76352 17.0188C9.90285 17.0936 11.0948 17.0937 12.2365 17.0188Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
</svg> Quiz {selectedQuiz.title}</h1>
      {selectedQuiz.questions.map((q, i) => (
        <div key={i} className="mb-4">
          <p className="font-semibold underline text-3xl"> {q.text}?</p>
          {q.options.map((opt, j) => (
            <label key={j} className="block text-2xl">
              <input
                type="radio"
                name={`q-${i}`}
                value={opt}
                checked={answers[i] === opt}
                onChange={() => handleAnswer(i, opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="bg-[#2f2c2c] text-[#EAEBD0] px-4 py-2 rounded hover:bg-amber-100 hover:text-black"
      >
        Submit
      </button>
      <button
  onClick={() => navigate("/dashboard")}
  className="ml-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
>
  Quit
</button>
    </div>
    </div>
  );
};

export default AttemptQuiz;
