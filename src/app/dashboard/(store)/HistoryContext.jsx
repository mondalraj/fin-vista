import { useLocalStorage } from "@mantine/hooks";
import { createContext, ReactNode } from "react";

const HistoryContext = createContext({
  history: [],
  setHistory: (history) => {},
  addHistoryElement: (element) => {},
  deleteHistoryElement: (id) => {},
});

export function HistoryContextProvider({ children }) {
  const [history, setHistory] = useLocalStorage({
    key: "History",
    defaultValue: [],
  });

  function setHistoryHandler(history) {
    setHistory(history);
  }

  // takes in a historyElement item and adds it to the history
  function addHistoryElementHandler(element) {
    // creates a new date
    var today = new Date();
    var date =
      today.getDate() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getFullYear();
    setHistory((prev) => [
      {
        label: element.label,
        amount: element.amount,
        id: element.id,
        type: element.type,
        dateCreated: date,
        category: element.category,
      },
      ...prev,
    ]);
  }

  // takes in an ID and deletes the history element with that ID
  function deleteHistoryElementHandler(id) {
    setHistory((prev) => {
      return prev.filter((h) => h.id !== id);
    });
  }

  const context = {
    history: history,
    setHistory: setHistoryHandler,
    addHistoryElement: addHistoryElementHandler,
    deleteHistoryElement: deleteHistoryElementHandler,
  };

  return (
    <HistoryContext.Provider value={context}>
      {children}
    </HistoryContext.Provider>
  );
}

export default HistoryContext;
