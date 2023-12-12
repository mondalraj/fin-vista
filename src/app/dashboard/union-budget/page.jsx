"use client";

import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";

const UnionBudget = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGetAnswer = (e) => {
    e.preventDefault();
    setAnswer("");
    setLoading(true);

    fetch(`https://sih-1fm0.onrender.com/constitution`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setAnswer(data.answer);
      });
  };
  return (
    <div>
      <div className="h-[93vh] overflow-y-scroll remove-scroll">
        <div className="text-2xl mt-5 text-white">
          Ask from Union Budget of India{" "}🇮🇳
        </div>
        <form
          className="mt-5 relative"
          autoComplete="off"
          onSubmit={(e) => handleGetAnswer(e)}
        >
          <input
            type="text"
            name="question"
            className="h-14 px-4 rounded-lg w-full bg-gray-800 text-white outline-none"
            placeholder="Enter your question"
            onChange={(e) => setQuestion(e.target.value)}
            value={question}
          />
          <button
            type="submit"
            className="absolute p-3  border-2 bg-black right-2 top-1 rounded-full"
          >
            <AiOutlineSend size={18} />
          </button>
        </form>
        {answer && (
          <div className="bg-slate-200 text-black text-lg p-5 rounded-lg mt-5 mx-20">
            <div className="text-blue-600 font-bold text-xl">
              Union Budget of India says ...
            </div>
            <div className="mt-4">{answer}</div>
          </div>
        )}
        {loading && (
          <div className="bg-slate-200 text-black text-lg p-5 rounded-lg mt-5 mx-20">
            <div className="text-violet-600 font-bold text-xl animate-pulse">
              Fetching from Union Budget of India ...
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UnionBudget;
