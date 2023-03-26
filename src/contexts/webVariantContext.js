import {createContext, useContext, useState} from "react";

export const WebVariantContext = createContext(null);

export const WebVariantProvider = ({ children }) => {
  const [oldVariant, setOldVariant] = useState(false);

  const changeWebVariantOld = () => {
    setOldVariant(true);
  };

  const changeWebVariantNew = () => {
    setOldVariant(false);
  };

  return (
    <WebVariantContext.Provider
      value={{
        oldVariant,
        changeWebVariantOld,
        changeWebVariantNew,
      }}
    >
      {children}
    </WebVariantContext.Provider>
  );
}

export const useWebVariantContext = () => useContext(WebVariantContext);
