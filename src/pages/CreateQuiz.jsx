import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

export default function CreateQuiz() {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState(null);

  const addQuestion = () => {
    if (!questionText || options.some((opt) => opt.trim() === "") || correctAnswer === null) {
      toast.error("⚠️ Please fill all fields and select a correct answer!");
      return;
    }

    const newQuestion = {
      text: questionText,
      options,
      correctAnswer,
    };

    setQuestions([...questions, newQuestion]);
    setQuestionText("");
    setOptions(["", "", "", ""]);
    setCorrectAnswer(null);
    toast.success("✅ Question added!");
  };

  const deleteQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
    toast.info("🗑️ Question deleted");
  };

  const saveQuiz = () => {
    if (!title || questions.length === 0) {
      toast.error("⚠️ Please add a title and at least one question!");
      return;
    }

    const quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
    const newQuiz = { title, questions };
    quizzes.push(newQuiz);
    localStorage.setItem("quizzes", JSON.stringify(quizzes));

    toast.success("🎉 Quiz saved successfully!");
    setTitle("");
    setQuestions([]);
  };

  return (
    <div className="min-h-screen bg-[#181C14] flex flex-col items-center py-10 px-4">
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#3C3D37] p-8 rounded-2xl shadow-xl w-full max-w-3xl"
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-[#ECDFCC]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <path d="M6.08938 14.9992C5.71097 14.1486 5.5 13.2023 5.5 12.2051C5.5 8.50154 8.41015 5.49921 12 5.49921C15.5899 5.49921 18.5 8.50154 18.5 12.2051C18.5 13.2023 18.289 14.1486 17.9106 14.9992" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
            <path d="M12 1.99921V2.99921" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M22 11.9992H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M3 11.9992H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M19.0704 4.92792L18.3633 5.63503" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M5.6368 5.636L4.92969 4.92889" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M14.517 19.3056C15.5274 18.9788 15.9326 18.054 16.0466 17.1238C16.0806 16.8459 15.852 16.6154 15.572 16.6154L8.47685 16.6156C8.18725 16.6156 7.95467 16.8614 7.98925 17.1489C8.1009 18.0773 8.3827 18.7555 9.45345 19.3056M14.517 19.3056C14.517 19.3056 9.62971 19.3056 9.45345 19.3056M14.517 19.3056C14.3955 21.2506 13.8338 22.0209 12.0068 21.9993C10.0526 22.0354 9.60303 21.0833 9.45345 19.3056" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg> Create a New Quiz
        </h1>

        {/* Quiz Title */}
        <input
          type="text"
          placeholder="Enter quiz title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-[#e9ebe4] w-full border border-[#ECDFCC] p-3 rounded-lg mb-6 focus:ring-2 focus:ring-[#697565] outline-none"
        />

        {/* Add Question */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Enter question"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            className=" text-[#e9ebe4] w-full border border-[#ECDFCC] p-3 rounded-lg mb-4 focus:ring-2 focus:ring-[#697565] outline-none"
          />

          {options.map((opt, idx) => (
            <div key={idx} className="flex items-center mb-2">
              <input
                type="text"
                placeholder={`Option ${idx + 1}`}
                value={opt}
                onChange={(e) => {
                  const newOptions = [...options];
                  newOptions[idx] = e.target.value;
                  setOptions(newOptions);
                }}
                className="text-[#e9ebe4] w-full border border-[#ECDFCC] p-2 rounded-lg mr-2 focus:ring-2 focus:ring-[#697565] outline-none"
              />
              <input
                type="radio"
                name="correctAnswer"
                checked={correctAnswer === idx}
                onChange={() => setCorrectAnswer(idx)}
                className="accent-[#A9B5DF]"
              />
            </div>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={addQuestion}
            className="bg-[#D8D2C2] text-[#4A4947] px-6 py-2 rounded-lg mt-4 hover:bg-[#4A4947] hover:text-[#D8D2C2] "
          >Add Question
          </motion.button>
        </div>

        {/* Questions Preview */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3 text-[#baa47d]">
            Questions Added :-
          </h2>
          {questions.length === 0 && (
            <p className="text-gray-400">No questions added yet.</p>
          )}
          {questions.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="border border-gray-200 p-3 rounded-lg mb-2 bg-[#D8D2C2] shadow-sm"
            >
              <div className="flex justify-between items-center">
                <p className="font-medium text-gray-800">
                  {i + 1}. {q.text}
                </p>
                <button onClick={() => deleteQuestion(i)} className="text-red-600 font-bold"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" />
    <path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" />
    <path d="M9.5 16.5L9.5 10.5" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" />
    <path d="M14.5 16.5L14.5 10.5" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" />
</svg></button>
              </div>
              <ul className="ml-5 list-disc">
                {q.options.map((opt, idx) => (
                  <li
                    key={idx}
                    className={
                      idx === q.correctAnswer
                        ? "text-green-600 font-semibold"
                        : "text-gray-600"
                    }
                  >
                    {opt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Save Quiz */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={saveQuiz}
          className="bg-[#D8D2C2] text-[#4A4947] px-8 py-3 rounded-lg hover:bg-[#4A4947] hover:text-[#D8D2C2] w-full transition"
        >
           Save Quiz
        </motion.button>
      </motion.div>
     <div className="bg-[#D8D2C2] text-[#4A4947] px-6 py-2 rounded-lg mt-4 hover:bg-[#4A4947] hover:text-[#D8D2C2] "> <a href="/dashboard">Back</a></div>
    </div>
  );
}
