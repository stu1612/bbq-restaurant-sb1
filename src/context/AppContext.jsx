// npm
import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [dishes, setDishes] = useState([]);
  return (
    <AppContext.Provider value={{ dishes, setDishes }}>
      {children}
    </AppContext.Provider>
  );
}
