"use client";

import { storage } from "../../../config/Firebase";
import { ref, uploadBytes } from "firebase/storage";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { FormEvent, useEffect, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { BsCloudUploadFill } from "react-icons/bs";

const LegalDocumentAI = () => {
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState(null);
  const [pdfURL, setPdfURL] = useState(null);
  const [question, setQuestion] = useState("");
  const [pdfSummary, setPdfSummary] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("legal-pdf-url")) {
      setPdfURL(localStorage.getItem("legal-pdf-url"));
    }
  }, []);

  useEffect(() => {
    if (!file) return;
    if (file.type !== "application/pdf") {
      Notify.warning("Please upload a PDF file");
      return;
    }

    const storageRef = ref(storage, `legal-documents/${file.name}`);

    uploadBytes(storageRef, file)
      .then((snapshot) => {
        setPdfURL(
          `https://firebasestorage.googleapis.com/v0/b/${snapshot.metadata.bucket
          }/o/legal-documents%2F${encodeURI(snapshot.metadata.name)}?alt=media`
        );

        localStorage.setItem(
          "legal-pdf-url",
          `https://firebasestorage.googleapis.com/v0/b/${snapshot.metadata.bucket
          }/o/legal-documents%2F${encodeURI(snapshot.metadata.name)}?alt=media`
        );
        Notify.success("File uploaded successfully");
        setUploading(false);
        setFile(null);

        fetch(`https://sih-1fm0.onrender.com/legal-ai-upload`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pdfurl: `https://firebasestorage.googleapis.com/v0/b/${snapshot.metadata.bucket
              }/o/legal-documents%2F${encodeURI(
                snapshot.metadata.name
              )}?alt=media`,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("legal-ai-pdf", data.pdf_ID);
            setPdfSummary(data.summary);
          });
      })

      .catch((error) => {
        console.log(error);
        Notify.failure("Something went wrong, please try again");
        setUploading(false);
        setFile(null);
      });
  }, [file]);

  const handleGetAnswer = (e) => {
    e.preventDefault();
    setChat((prev) => [...prev, question]);
    setQuestion("");
    setLoading(true);

    fetch(`https://sih-1fm0.onrender.com/legal-ai-chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pdf_ID: localStorage.getItem("legal-ai-pdf"),
        message: question,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);

        setChat((prev) => [...prev, data.answer]);
      });
  };

  return (
    <>
      {pdfURL ? (
        <div className="text-white w-full h-full flex gap-5">
          <iframe src={`${pdfURL}#toolbar=0`} width="50%" height="100%" />
          <div className="h-[93vh] w-1/2 bg-black p-4 flex flex-col">
            <h1 className="text-2xl text-center border-b-2 py-5 flex justify-between items-center">
              Navigating your finances. One question at a time.
              <div
                className="border-2 p-2 rounded-full cursor-pointer"
                onClick={() => {
                  localStorage.removeItem("legal-pdf-url");
                  localStorage.removeItem("legal-ai-pdf");
                  setPdfURL(null);
                  setFile(null);
                  setQuestion("");
                }}
              >
                <BsCloudUploadFill size={16} />
              </div>
            </h1>
            <div className="py-4">
              {pdfSummary ? (
                pdfSummary
              ) : (
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-blue-600 animate-pulse"></div>
                  <span className="text-blue-600">Generating Summary...</span>
                </div>
              )}
            </div>
            <div className="overflow-y-scroll remove-scroll py-2">
              {chat?.map((message, index) =>
                index % 2 === 0 ? (
                  <div key={index} className="flex justify-end">
                    <div className="bg-gray-800 rounded-lg p-2 text-white ml-6 my-1">
                      {message}
                    </div>
                  </div>
                ) : (
                  <div key={index} className="flex justify-start">
                    <div className="bg-blue-500 rounded-lg p-2 text-white mr-6 my-1">
                      {message}
                    </div>
                  </div>
                )
              )}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-blue-500 rounded-lg p-2 text-white mr-6 my-1 animate-pulse">
                    Fin AI is typing...
                  </div>
                </div>
              )}
            </div>
            <div className="mt-auto relative">
              <form autoComplete="off" onSubmit={(e) => handleGetAnswer(e)}>
                <input
                  type="text"
                  name="question"
                  className="h-10 px-4 rounded-lg w-full bg-gray-800 text-white outline-none"
                  placeholder="Enter your question"
                  onChange={(e) => setQuestion(e.target.value)}
                  value={question}
                />
                <button
                  type="submit"
                  className="absolute p-2 bg-black right-2 top-1 rounded-full"
                >
                  <AiOutlineSend size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-full">
          <label className="flex justify-center w-full h-full px-4 transition  border-2 border-gray-300 border-dashed rounded-xl appearance-none cursor-pointer hover:border-gray-400 hover:bg-black focus:outline-none">
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              {file?.name ? (
                <span className="font-medium text-gray-400 w-80 truncate">
                  {file.name}{" "}
                  <div>
                    {uploading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-blue-600 animate-pulse"></div>
                        <span className="text-blue-600">Uploading...</span>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </span>
              ) : (
                <span className="font-medium text-gray-300">
                  Click to Upload any Finance Document
                </span>
              )}
            </span>
            <input
              type="file"
              name="file_upload"
              className="hidden"
              accept="application/pdf"
              onChange={(e) => {
                setUploading(true);
                setFile(e.target.files?.[0] ?? null);
              }}
            />
          </label>
        </div>
      )}
    </>
  );
};

export default LegalDocumentAI;