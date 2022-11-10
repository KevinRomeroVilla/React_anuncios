import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Adverts from "./components/anuncios/Adverts";
import LoginPage from "./components/auth/Loginpage";
import RequireAuth from "./components/auth/RequireAuth";

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLoggeed] = useState(isInitiallyLogged);

  const handleLogin = () => setIsLoggeed(true);
  const handleLogout = () => setIsLoggeed(false);

  return (
    <div className='App'>
      <Routes>
        <Route path='/login' element={<LoginPage onLogin={handleLogin} />} />
        <Route
          path='/adverts'
          element={<Adverts isLogged={isLogged} onLogout={handleLogout} />}
        />
        <Route path='/' element={<Navigate to='/adverts' />} />
      </Routes>
    </div>
  );
}

export default App;
