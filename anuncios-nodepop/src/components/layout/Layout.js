import Header from "./Header";

const Layout = ({ title, children }) => {
  return (
    <div>
      <Header />
      <main>
        <h2>{title}</h2>
        <section>{children}</section>
      </main>
      <footer>Pagina de anuncios</footer>
    </div>
  );
};

export default Layout;
