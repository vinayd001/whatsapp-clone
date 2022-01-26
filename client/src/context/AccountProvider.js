import { createContext, useState, useEffect, useRef } from "react";
// import { io } from "socket.io-client";

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const [showlogoutButton, setShowlogoutButton] = useState();
  const [showloginButton, setShowloginButton] = useState();

  return (
    <AccountContext.Provider
      value={{
        account,
        setAccount,
        showloginButton,
        setShowloginButton,
        showlogoutButton,
        setShowlogoutButton,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
