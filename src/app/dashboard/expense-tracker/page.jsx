"use client";

import { useContext } from "react";
import DisplayCard from "../components/DisplayCard";
import HistoryStack from "../components/HistoryStack";
import PieChart from "../components/PieChart";
import CategoriesContext from "../(store)/CategoriesContext";

const ExpenseTracker = () => {
  const { getTotalAmount } = useContext(CategoriesContext);
  const budget = getTotalAmount("Budget");
  const expenses = getTotalAmount("Expenses");
  return (
    <div style={{ margin: "30px" }}>
      <p className="text-2xl mb-5">YOUR BALANCE IS: ${budget - expenses}</p>
      <div className="grid grid-cols-2 gap-3">
        <DisplayCard
          label="Income / Budget"
          amount={budget}
          color="green-500"
        />
        <DisplayCard label="Expenses" amount={expenses} color="red-400" />
      </div>
      <div className="flex justify-between">

      <HistoryStack />
      {(budget > 0 || expenses > 0) && <PieChart />}
      </div>
    </div>
  );
};

export default ExpenseTracker;
