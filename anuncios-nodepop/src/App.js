import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Adverts from "./components/anuncios/Adverts";
import AdvertDetail from "./components/anuncios/AdvertsDetail";
import NewAdvertsPage from "./components/anuncios/NewAdvertsPage";
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
          element={
            <RequireAuth isLogged={isLogged}>
              <Adverts isLogged={isLogged} onLogout={handleLogout} />
            </RequireAuth>
          }
        />
        <Route
          path='/adverts/:advertsId'
          element={
            <RequireAuth isLogged={isLogged}>
              <AdvertDetail isLogged={isLogged} onLogout={handleLogout} />
            </RequireAuth>
          }
        />
        <Route
          path='/adverts/new'
          element={
            <RequireAuth isLogged={isLogged}>
              <NewAdvertsPage isLogged={isLogged} onLogout={handleLogout} />
            </RequireAuth>
          }
        />
        <Route path='/' element={<Navigate to='/adverts' />} />
        <Route path='/404' element={<div>404 | Not found</div>} />
        <Route path='*' element={<Navigate to='/404' />} />
      </Routes>
    </div>
  );
}

export default App;
