import { Children } from "react";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ isLogged }) => {
  if (!isLogged) {
    return <Navigate to='/login' />;
  }
  return Children;
};

export default RequireAuth;
