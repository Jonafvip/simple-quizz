import { createContext, useState, useContext } from "react";
import Preguntas from "../db/Preguntas.json";

const UseContex = createContext();

export const useAccionContext = () => {
  const context = useContext(UseContex);

  if (!context) {
    return new Error("Algo salio mal con el context");
  }
  return context;
};

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState(Preguntas);

  const value = {
    data,
  };
  return <UseContex.Provider value={value}>{children}</UseContex.Provider>;
};
