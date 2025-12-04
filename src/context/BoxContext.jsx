import { createContext, useContext, useState } from "react";

const BoxContext = createContext();

export const useBoxes = () => useContext(BoxContext);

export const BoxProvider = ({ children }) => {
  const [boxes, setBoxes] = useState(() => {
    const stored = localStorage.getItem("boxes");
    return stored ? JSON.parse(stored) : [];
  });

  const addBox = (box) => {
    const newBoxes = [...boxes, box];
    setBoxes(newBoxes);
    localStorage.setItem("boxes", JSON.stringify(newBoxes));
  };

  return (
    <BoxContext.Provider value={{ boxes, addBox }}>
      {children}
    </BoxContext.Provider>
  );
};
