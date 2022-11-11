import { useEffect, useState } from "react";
import { getLatestAdverts } from "./service";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";
import Page from "../layout/Page";

const Adverts = (props) => {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    getLatestAdverts().then((adverts) => setAdverts(adverts));
  }, []);

  return (
    <Page title='Adverts Page' {...props}>
      <div className='advertsPage'>
        {adverts.length ? (
          <ul>
            {adverts.map((advert) => (
              <li key={advert.id}>
                <Link to={`/adverts/${advert.id}`}>{advert.name}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <button>Crea el primer anuncio</button>
        )}
      </div>
    </Page>
  );
};

export default Adverts;
