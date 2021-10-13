import { createContext, useContext, useState, FC } from 'react';
import {
  IGlobalContext,
  Children,
  IParamsToggleAlert
} from 'src/shared/models/global.model';

const globalContext = createContext<Partial<IGlobalContext>>({});

export const GlobalProvider: FC<Children> = ({ children }) => {
  const [alertData, setAlertData] = useState<IParamsToggleAlert | null>(null);
  const [isVisibleAlert, setVisibleAlert] = useState<boolean>(false);

  const toggleAlert = (params: IParamsToggleAlert) => {
    setAlertData(params);
    setVisibleAlert(!isVisibleAlert);
  };

  return (
    <globalContext.Provider
      value={{
        alertData,
        toggleAlert,
        isVisibleAlert
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(globalContext);

  if (!context) {
    throw new Error('globalContext must be used within a useGlobal');
  }

  return context;
};
