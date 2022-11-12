import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthContextConsumer = AuthContext.Consumer;

AuthContext.displayName = "Auth";

export const AuthContextProvider = ({ isInitiallyLogged, children }) => {
  const [isLogged, setIsLoggeed] = useState(isInitiallyLogged);

  const handleLogin = () => setIsLoggeed(true);
  const handleLogout = () => setIsLoggeed(false);

  return (
    <AuthContext.Provider value={{ isLogged, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const value = useContext(AuthContext);
  return value;
};

export default AuthContext;
