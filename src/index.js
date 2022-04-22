import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DishContextProvider from "./context/DishContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DishContextProvider>
      <App />
    </DishContextProvider>
  </React.StrictMode>
);
