import React from "react";
import AuthPageContext from "./authPageContext";
export default function AuthPageContextProvider({ children }) {
  const [authPage, setAuthPage] = React.useState(false);
  return (
    <AuthPageContext.Provider value={{ authPage, setAuthPage }}>
      {children}
    </AuthPageContext.Provider>
  );
}
