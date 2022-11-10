import Header from "./Header";

const Layout = ({ title, children, ...props }) => {
  return (
    <div className='layout'>
      <Header className='layout-header bordered' {...props} />
      <main className='layout-main bordered'>
        <h2 className='layout-title bordered'>{title}</h2>
        <section className='layout-content'>{children}</section>
      </main>
      <footer className='layout-footer bordered'>Pagina de anuncios</footer>
    </div>
  );
};

export default Layout;
