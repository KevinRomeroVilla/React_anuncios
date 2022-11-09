import { Routes, Route, Navigate } from "react-router-dom";
import Adverts from "./components/anuncios/Adverts";
import LoginPage from "./components/auth/Loginpage";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/adverts' element={<Adverts />} />
        <Route path='/' element={<Navigate to='/adverts' />} />
      </Routes>
    </div>
  );
}

export default App;
