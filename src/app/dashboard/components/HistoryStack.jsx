import HistoryItem from "./HistoryItem";
import HistoryContext from "../(store)/HistoryContext";
import { useContext } from "react";

const HistoryStack = () => {
  const { history } = useContext(HistoryContext);

  const uniqueItems = new Set(history.map((item) => item.id));
  const uniqueHistory = Array.from(uniqueItems);

  console.log(history);

  return (
    <div className="w-[500px]">
      <p className="text-lg text-gray-100">Transaction History</p>
      <hr className="my-2 border-gray-700" />
      <div className="overflow-auto w-[100%] h-64 p-4">
        <div>
          {uniqueHistory.map((item) => {
            const historyItem = history.find((i) => i.id === item);
            return (
              <div
                key={historyItem.id}
                className="bg-gray-900 p-2 my-2 rounded-md"
              >
                <HistoryItem
                  id={historyItem.id}
                  label={historyItem.label}
                  amount={historyItem.amount}
                  type={historyItem.type}
                  dateCreated={historyItem.dateCreated}
                  category={historyItem.category}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HistoryStack;
