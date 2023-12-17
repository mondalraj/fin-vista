import { useState, useContext } from "react";
import AvailableCategoriesContext from "../(store)/AvailableCategoriesContext";
import CategoriesContext from "../(store)/CategoriesContext";
import HistoryContext from "../(store)/HistoryContext";

const AddToExpenses = () => {
  const { addHistoryElement } = useContext(HistoryContext);
  const { availableCategories, setAvailableCategories } = useContext(
    AvailableCategoriesContext
  );
  const { addCategory } = useContext(CategoriesContext);
  const [label, setLabel] = useState("");
  const [value, setValue] = useState(0);

  const [category, setCategory] = useState([""]);

  return (
    <div>
      <div className="mt-5">
        <p className="text-md mb-2 font-normal text-gray-100 ">Label*</p>
        <input
          type="text"
          placeholder="Ex: Car payments"
          label="Label"
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
          label="Amount"
          required
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setValue(Number.parseFloat(e.currentTarget.value))}
        />
      </div>

      <div className="divider"></div>

      <p className="text-xl font-bold text-gray-100 ">
        Add a Category to Your Expense
      </p>

      {/* <MultiSelect
        w="40%"
        mt={10}
        data={availableCategories}
        label="Select a Category"
        placeholder="Select a category or create a new one"
        searchable
        creatable
        value={category}
        onChange={setCategory}
        maxSelectedValues={1}
        getCreateLabel={(query) =>
          `+ Create ${query[0].toUpperCase() + query.substring(1)}`
        }
        onCreate={(query) => {
          const capQuery = query[0].toUpperCase() + query.substring(1);
          const item = {
            value: capQuery,
            label: capQuery,
            isused: "false",
          };
          console.log("hello");

          setAvailableCategories((current) => [item, ...current]);
          return item;
        }}
      /> */}

      <div className="mt-5">
        <p className="text-md mb-2 font-normal text-gray-100 ">
          Select a category*
        </p>
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={(e) => setCategory([e.currentTarget.value])}
          value={category[0]}
        >
          {availableCategories.map((category) => {
            return (
              <option key={category.value} value={category.value}>
                {category.value}
              </option>
            );
          })}
        </select>
      </div>

      <div className="flex items-center mt-5 gap-5">
        <button
          className="btn btn-info"
          onClick={(e) => {
            console.log(category);
            e.preventDefault();
            if (label === "" || value <= 0 || Number.isNaN(value)) {
              alert(
                "Invalid Entries. Make sure the label is not empty and the amount is greater than zero."
              );
            } else {
              category[0] === undefined ||
              category[0] === null ||
              category[0] === ""
                ? (category[0] = "Uncategorized")
                : null;

                addHistoryElement({
                    label: label,
                    amount: value,
                    id: crypto.randomUUID(),
                    type: "Expense",
                    dateCreated: "",
                    category: category[0],
                });
                window.location.href = "/dashboard/expense-tracker";
            }
          }}
        >
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default AddToExpenses;
