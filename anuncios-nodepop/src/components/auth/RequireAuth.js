import { Children } from "react";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ isLogged }) => {
  const location = useLocation();
  if (!isLogged) {
    return <Navigate to='/login' state={{ from: location }} />;
  }
  return Children;
};

export default RequireAuth;
