import { useLocalStorage } from "@mantine/hooks";
import { createContext, ReactNode } from "react";


const AvailableCategoriesContext =
  createContext({
    availableCategories: [],
    setAvailableCategories: (callBack) => {},
  });

export function AvailableCategoriesContextProvider({
  children,
}) {
  const [availableCategories, setAvailableCategories] = useLocalStorage({
    key: "multiSelectCategories",
    defaultValue: [
      {
        label: "Entertainment",
        value: "Entertainment",
        isused: "false",
      },
      {
        label: "Groceries",
        value: "Groceries",
        isused: "false",
      },
      {
        label: "EMI",
        value: "EMI",
        isused: "false",
      },
      {
        label: "Investments",
        value: "Investments",
        isused: "false",
      },
      {
        label: "Transportation",
        value: "Transportation",
        isused: "false",
      },
      { label: "Uncategorized", value: "Uncategorized", isused: "false" },
    ],
  });

  function setAvailableCategoriesHandler(callBack) {
    setAvailableCategories(callBack);
  }

  const context = {
    availableCategories: availableCategories,
    setAvailableCategories: setAvailableCategoriesHandler,
  };

  return (
    <AvailableCategoriesContext.Provider value={context}>
      {children}
    </AvailableCategoriesContext.Provider>
  );
}

export default AvailableCategoriesContext;
