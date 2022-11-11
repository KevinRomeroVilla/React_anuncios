import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = ({ title, children, ...props }) => {
  return (
    <div className='layout'>
      <Header className='layout-header bordered' {...props} />
      <main className='layout-main bordered'>
        <Outlet />
      </main>
      <footer className='layout-footer bordered'>Pagina de anuncios</footer>
    </div>
  );
};

export default Layout;
