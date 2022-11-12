import { Routes, Route, Navigate } from "react-router-dom";
import Adverts from "./components/anuncios/Adverts";
import AdvertDetail from "./components/anuncios/AdvertsDetail";
import NewAdvertsPage from "./components/anuncios/NewAdvertsPage";
import LoginPage from "./components/auth/Loginpage";
import RequireAuth from "./components/auth/RequireAuth";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/adverts' element={<Layout />}>
          <Route
            index
            element={
              <RequireAuth>
                <Adverts />
              </RequireAuth>
            }
          />
          <Route
            path=':advertsId'
            element={
              <RequireAuth>
                <AdvertDetail />
              </RequireAuth>
            }
          />
          <Route
            path='new'
            element={
              <RequireAuth>
                <NewAdvertsPage />
              </RequireAuth>
            }
          />
        </Route>
        <Route path='/' element={<Navigate to='/adverts' />} />
        <Route path='/404' element={<div>404 | Not found</div>} />
        <Route path='*' element={<Navigate to='/404' />} />
      </Routes>
    </div>
  );
}

export default App;
