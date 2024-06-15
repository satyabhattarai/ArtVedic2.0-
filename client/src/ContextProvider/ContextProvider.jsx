import { createContext, useContext, useState } from "react";

const StateContext = createContext({
  user: null,
  token: null,
  setuser: () => {},
  settoken: () => {},
  ShowSearch: false,
  set_ShowSearch: () => {},
});

export const ContextProvider = ({ children }) => {
  const [token, settoken] = useState(null);
  const [ShowSearch, set_ShowSearch] = useState(false);
  return (
    <StateContext.Provider value={{ ShowSearch, set_ShowSearch }}>
      {children}
      {/* every component  sits here and accesses all the states */}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
