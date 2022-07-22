import { createContext, useContext, useState } from "react";

const AppContext = createContext({});

export function StateContexts({ children }) {
  const [monitorIcon, setMonitorIcon] = useState(true);

  return (
    <AppContext.Provider value={[ monitorIcon, setMonitorIcon ]}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
