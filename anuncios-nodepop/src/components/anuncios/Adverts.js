import { useEffect, useState } from "react";
import { getLatestAdverts, getLatestAdverts1 } from "./service";
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
  const [selling, setSelling] = useState(null);
  const [nameObj, setNameObj] = useState(null);
  const [tags, setTags] = useState([]);
  const [lowerPrice, setLowerPrice] = useState("");
  const [higherPrice, setHigherPrice] = useState("");
  const [price, setPrice] = useState([]);

  useEffect(() => {
    getLatestAdverts().then((adverts) => setAdverts(adverts));
  }, []);

  const handleFiltering = () => {
    if (higherPrice === "") {
      getLatestAdverts(selling, tags, nameObj, lowerPrice).then((adverts) =>
        setAdverts(adverts)
      );
    } else {
      getLatestAdverts1(selling, tags, nameObj, lowerPrice, higherPrice).then(
        (adverts) => setAdverts(adverts)
      );
    }
  };
  const handleChangeSell = (event) => setSelling(event.target.value);
  const handlename = (event) => setNameObj(event.target.value);
  const handleTags = (event) =>
    setTags((prevTags) => [...prevTags, event.target.value]);
  const handleLowerPrice = (event) => setLowerPrice(event.target.value);
  const handleHigherPrice = (event) => setHigherPrice(event.target.value);
  const handleprice = (event) =>
    setPrice((prevTags) => [...prevTags, event.target.value]);

  return (
    <Page title='Adverts Page' {...props}>
      <div>
        <div>
          <span>nombre</span>
          <input onChange={handlename} value={nameObj}></input>
        </div>
        <select onChange={handleChangeSell} value={selling}>
          <option value=''>---</option>
          <option value='true'>Sell</option>
          <option value='false'>Buy</option>
        </select>
        <div>
          <div>
            <span>Select tags for your objet</span>
          </div>
          <span>Motor</span>
          <input type='radio' onChange={handleTags} value='motor'></input>
          <span>Work</span>
          <input type='radio' onChange={handleTags} value='work'></input>
          <span>Lifestyle</span>
          <input type='radio' onChange={handleTags} value='lifestyle'></input>
          <span>Mobile</span>
          <input type='radio' onChange={handleTags} value='mobile'></input>
        </div>
        <div>
          <span>Lower price</span>
          <input
            type='text'
            onChange={handleLowerPrice}
            value={lowerPrice}
          ></input>
        </div>
        <div>
          <span>Higher price</span>
          <input
            type='number'
            onChange={handleHigherPrice}
            value={higherPrice}
          ></input>
        </div>
        <Button onClick={handleFiltering}>Apply filters</Button>
      </div>
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
