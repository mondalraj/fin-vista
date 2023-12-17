"use client"

import { useContext } from "react";
import CategoriesContext from "../(store)/CategoriesContext";
import AddToExpenses from "../components/AddToExpenses";

const AddExpensePage = () => {
 const { getTotalAmount } = useContext(CategoriesContext);
 const expenses = getTotalAmount("Expenses");

 return (
   <div className="m-8">
     <p className="text-xl font-bold text-white">
       Add an Expense
     </p>
     <p className="text-xs text-gray-500">
       Adds on to your current expense amount.
     </p>
     <AddToExpenses />
     <div className="divider"></div>
   </div>
 );
};

export default AddExpensePage;
