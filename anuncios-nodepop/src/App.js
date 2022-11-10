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
          element={<Adverts isLogged={isLogged} onLogout={handleLogout} />}
        />
        <Route path='/adverts/:advertsId' element={<AdvertDetail />} />
        <Route path='/adverts/new' element={<NewAdvertsPage />} />
        <Route path='/' element={<Navigate to='/adverts' />} />
        <Route path='/404' element={<div>404 | Not found</div>} />
        <Route path='*' element={<Navigate to='/404' />} />
      </Routes>
    </div>
  );
}

export default App;
