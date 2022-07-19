import { FC, createContext, useEffect, useState } from "react";

import { IContext } from "./interface/IContext";
import { IContextProvider } from "./interface/IContextProvider";
import { getLabelsPack } from "../helpers/getLabelsPack";

export const AppContext = createContext<IContext>(null);

const initialCountryCode = "pl-PL";
const initial = {
  labelsPackage: getLabelsPack(initialCountryCode),
};

const ContextProvider: FC<IContextProvider> = ({ children }) => {
  const [intl, setIntl] = useState<string>(initialCountryCode);
  const [labelsPackage, setLabelsPack] = useState(initial.labelsPackage);

  useEffect(() => {
    const labelsPackage = getLabelsPack(intl);
    setLabelsPack(labelsPackage);
  }, [intl]);

  const contextValue = {
    intl: intl,
    changeIntl: setIntl,
    labels: labelsPackage,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default ContextProvider;
