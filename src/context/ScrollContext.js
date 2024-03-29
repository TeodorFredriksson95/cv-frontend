import { createContext, useContext, useState } from "react";

const ScrollContext = createContext();

export const useScroll = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const [lastClicked, setLastClicked] = useState(null);

  const triggerScroll = (identifier) => {
    setLastClicked({ identifier, timestamp: new Date().getTime() });
  };

  return <ScrollContext.Provider value={{ lastClicked, triggerScroll }}>{children}</ScrollContext.Provider>;
};
