"use client";

import Link from "next/link";
import {  BsRocketTakeoffFill, BsCashCoin } from 'react-icons/bs';
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { BiSolidAnalyse } from "react-icons/bi";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <div className="relative bg-[#121207] h-screen max-h-max flex flex-row justify-between items-stretch overflow-hidden">
          <div className="w-1/4 min-w-max bg-gradient-to-br from-black via-zinc-950 to-gray-800 rounded-[20px] m-4 mr-2 p-4 relative">
            <div>
              <div className="flex gap-4">
                <div className="text-sm my-auto">
                  <div className="tracking-widest font-semibold text-white text-xl">
                    Fin VISTA
                  </div>
                  
                </div>
              </div>
              <svg
                className="my-4 w-full"
                xmlns="http://www.w3.org/2000/svg"
                width="234"
                height="2"
                viewBox="0 0 234 2"
                fill="none"
              >
                <path
                  d="M0.292969 0.614014H233.543"
                  stroke="url(#paint0_linear_140_372)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_140_372"
                    x1="0.292969"
                    y1="0.614014"
                    x2="231.293"
                    y2="0.614014"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E0E1E2" stopOpacity="0" />
                    <stop offset="0.5" stopColor="#E0E1E2" />
                    <stop
                      offset="1"
                      stopColor="#E0E1E2"
                      stopOpacity="0.15625"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <Link href="/dashboard/financial-document-analyser">
                <div className="px-3 py-2 flex items-center gap-4 hover:gap-6 rounded-lg group  hover:bg-[#1A1F37] cursor-pointer transition-all">
                  <div className="p-2 rounded-xl bg-[#1A1F37] group-hover:bg-[#1976D2]">
                    <BiSolidAnalyse color="white" />
                  </div>
                  <div className="text-white">Financial Document Analyser</div>
                </div>
              </Link>

              <Link href="/dashboard/expense-tracker">
                <div className="px-3 py-2 flex items-center gap-4 hover:gap-6 rounded-lg group  hover:bg-[#1A1F37] cursor-pointer transition-all">
                  <div className="p-2 rounded-xl bg-[#1A1F37] group-hover:bg-[#1976D2]">
                    <BsCashCoin color="white" />
                  </div>
                  <div className="text-white">Expense Tracker</div>
                </div>
              </Link>
              <Link href="/dashboard/union-budget">
                <div className="px-3 py-2 flex items-center gap-4 hover:gap-6 rounded-lg group  hover:bg-[#1A1F37] cursor-pointer transition-all">
                  <div className="p-2 rounded-xl bg-[#1A1F37] group-hover:bg-[#1976D2]">
                    <FaMoneyCheckDollar color="white" />
                  </div>
                  <div className="text-white">Know about Union Budget</div>
                </div>
              </Link>
            </div>
            <div onClick={() => auth.signOut()}>
              <div className="absolute bottom-5 px-3 py-2 flex items-center gap-4 hover:gap-6 rounded-lg right-4 left-4 group  hover:bg-[#1A1F37] cursor-pointer transition-all">
                <div className="p-2 rounded-xl bg-[#1A1F37] group-hover:bg-[#1976D2]">
                  <BsRocketTakeoffFill color="white" />
                </div>
                <div className="text-white">Log Out</div>
              </div>
            </div>
          </div>

          <div className="w-full bg-gradient-to-br from-black via-zinc-950 to-gray-800 rounded-[20px] m-4 ml-2 p-3">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
