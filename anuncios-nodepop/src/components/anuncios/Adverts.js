import { useEffect, useState } from "react";
import { getLatestAdverts } from "./service";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";
import Page from "../layout/Page";
import Button from "../common/Button";

const EmptyList = () => (
  <div style={{ textAlign: "center" }}>
    <p>Be the first one!</p>
    <Button as={Link} to='/adverts/new'>
      Crea el primer anuncio
    </Button>
  </div>
);

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
          <EmptyList />
        )}
      </div>
    </Page>
  );
};

export default Adverts;
