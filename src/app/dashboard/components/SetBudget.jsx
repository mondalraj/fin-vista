import { useState, useContext } from "react";
import HistoryContext from "../(store)/HistoryContext";
import CategoriesContext from "../(store)/CategoriesContext";

const SetBudget = () => {
  const { addHistoryElement } = useContext(HistoryContext);
  const { addCategory, getTotalAmount } = useContext(CategoriesContext);

  const [value, setValue] = useState(0);
  return (
    <div>
      <div className="mt-5">
        <p className="text-md mb-2 font-normal text-gray-100 ">
          Enter your budget*
        </p>
        <input
          type="text"
          placeholder="Ex: 5000"
          required
          className="input input-bordered w-full max-w-xs mr-5"
          onChange={(e) => setValue(Number.parseFloat(e.currentTarget.value))}
        />
      </div>

      <button
        className="btn btn-info mt-6"
        onClick={() => {
          // checks that the user inputted valid values
          if (value <= 0 || Number.isNaN(value)) {
            alert("Invalid Entry. Make sure the amount is greater than zero.");
          } else {
            const budget = getTotalAmount("Budget");
            addCategory({
              label: "Budget",
              id: crypto.randomUUID(),
              amount: -1 * budget,
            });
            addCategory({
              label: "Budget",
              id: crypto.randomUUID(),
              amount: value,
            });

            addHistoryElement({
              label: "Budget has been set to $" + value,
              id: crypto.randomUUID(),
              amount: value,
              type: "Budget",
              dateCreated: "", // dateCreated passes an empty string here as the actual date creation is handled in the addHisotyrElement function
              category: "Budget",
            });

            // navigate to home page
            window.location.href = "/dashboard/expense-tracker";
          }
        }}
      >
        Set Budget
      </button>
    </div>
  );
};

export default SetBudget;
