import { useEffect, useState } from "react";
import { getLatestAdverts } from "./service";
import Layout from "../layout/Layout";

const Adverts = () => {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    getLatestAdverts().then((adverts) => setAdverts(adverts));
  }, []);

  return (
    <Layout title='Adverts Page'>
      <div className='advertsPage'>
        {adverts.length ? (
          <ul>
            {adverts.map((advert) => (
              <li key={advert.id}>{advert.name}</li>
            ))}
          </ul>
        ) : (
          <button>Crea el primer anuncio</button>
        )}
      </div>
    </Layout>
  );
};

export default Adverts;
