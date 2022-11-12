import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import storage from "./utils/storage";
import { setAutorizationHeader } from "./api/client";
import { AuthContextProvider } from "./components/auth/context";

const accessToken = storage.get("auth");
setAutorizationHeader(accessToken);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <AuthContextProvider isInitiallyLogged={!!accessToken}>
      <App />
    </AuthContextProvider>
  </Router>
);
