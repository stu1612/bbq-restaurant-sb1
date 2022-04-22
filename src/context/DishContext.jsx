// npm
import { createContext, useState } from "react";

export const DishContext = createContext();

export default function DishContextProvider({ children }) {
  const [dishesList, setDishesList] = useState([]);
  return (
    <DishContext.Provider value={{ dishesList, setDishesList }}>
      {children}
    </DishContext.Provider>
  );
}
