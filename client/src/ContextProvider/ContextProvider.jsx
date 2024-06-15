import { createContext, useContext, useState } from "react";

const StateContext = createContext({
  user: null,
  token: null,
  setuser: () => {},
  settoken: () => {},
});

export const ContextProvider = ({ children }) => {
  const [token, settoken] = useState(null);
  return (
    <StateContext.Provider value={{ token }}>
      {children}
      {/* every component  sits here and accesses all the states */}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
