import { useNavigate, useParams } from "react-router-dom";
import Page from "../layout/Page";
import { useEffect, useState } from "react";
import { getAdvertDetail } from "./service";
import Button from "../common/Button";

const AdvertDetail = (props) => {
  const [advert, setAdvert] = useState("");
  const { advertsId } = useParams();
  const navigate = useNavigate();
  const [venta, setVenta] = useState("venta");

  useEffect(() => {
    getAdvertDetail(advertsId)
      .then((advert) => setAdvert(advert))
      .catch((error) => {
        if (error.status === 404) {
          navigate("404");
        }
      });
    if (advert.sale === false) {
      setVenta("Compra");
    }
  }, [advertsId, navigate, advert.sale]);

  return (
    <Page title={"Adverts detail"} {...props}>
      <div>{console.log(advert)}</div>
      <div>
        <img
          height={200}
          width={200}
          className='advertDetailImage'
          src={advert.photo}
          alt='https://user-images.githubusercontent.com/43302778/106805462-7a908400-6645-11eb-958f-cd72b74a17b3.jpg'
        ></img>
        <p>Object name {advert.name}</p>
        <p>Object price {advert.price}</p>
        <p>{venta}</p>
        <p>Object Tags {advert.tags}</p>
      </div>
    </Page>
  );
};

export default AdvertDetail;
