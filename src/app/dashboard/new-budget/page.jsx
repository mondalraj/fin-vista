"use client"

import AddToBudget from "../components/AddToBudget";
import SetBudget from "../components/SetBudget";
import { useContext } from "react";
import CategoriesContext from "../(store)/CategoriesContext";

const AddBudgetPage = () => {
  const { getTotalAmount } = useContext(CategoriesContext);
  const budget = getTotalAmount("Budget");

  return (
    <div className="m-8">
      <p className="text-xl font-bold text-white">Set Your Income / Budget</p>
      <p className="text-sm text-gray-500">
        Sets your income / budget to the entered value.
      </p>
      <SetBudget />
      <div className="divider"></div>
      <p className="text-sm text-white">Add an Income Source</p>
      <p className="text-sm text-gray-500">
        Adds on to your current income / budget amount.
      </p>

      <AddToBudget />
      <div className="divider"></div>
    </div>
  );
};

export default AddBudgetPage;
