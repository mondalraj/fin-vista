import { useState, useContext } from "react";
import HistoryContext from "../(store)/HistoryContext";
import CategoriesContext from "../(store)/CategoriesContext";

const AddToBudget = () => {
  const { addCategory } = useContext(CategoriesContext);
  const { addHistoryElement } = useContext(HistoryContext);

  const [label, setLabel] = useState("");
  const [value, setValue] = useState(0);
  return (
    <div>
      <div className="mt-5">
        <p className="text-md mb-2 font-normal text-gray-100 ">Label*</p>
        <input
          type="text"
          placeholder="Ex: Christmas bonus"
          required
          className=" input input-bordered w-full max-w-xs mr-5"
          onChange={(e) => setLabel(e.currentTarget.value)}
        />
      </div>

      <div className="mt-5">
        <p className="text-md mb-2 font-normal text-gray-100 ">Amount*</p>
        <input
          type="text"
          placeholder="Ex: 3000"
          required
          className=" input input-bordered w-full max-w-xs mr-5"
          onChange={(e) => setValue(Number.parseFloat(e.currentTarget.value))}
        />
      </div>

      <button
        className="btn btn-info mt-6"
        onClick={() => {
          // Checks if the user input is valid
          if (label === "" || value <= 0 || Number.isNaN(value)) {
            alert(
              "Invalid Entries. Make sure the label is not empty and the amount is greater than zero."
            );
          } else {
            addCategory({
              label: "Budget",
              id: crypto.randomUUID(),
              amount: value,
            });
            
            addHistoryElement({
              label: label,
              amount: value,
              id: crypto.randomUUID(),
              type: "Budget",
              dateCreated: "",
              category: "Budget",
            });

            // navigate to home page
            window.location.href = "/dashboard/expense-tracker";
          }
        }}
      >
        Add To Budget
      </button>
    </div>
  );
};

export default AddToBudget;
