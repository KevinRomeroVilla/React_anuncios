import { useNavigate, useParams } from "react-router-dom";
import Page from "../layout/Page";
import { useEffect, useState } from "react";
import { deleteAdvertDetail, getAdvertDetail } from "./service";
import Button from "../common/Button";

const AdvertDetail = (props) => {
  const [advert, setAdvert] = useState("");
  const { advertsId } = useParams();
  const navigate = useNavigate();
  const [venta, setVenta] = useState("venta");
  const [deleteAdvert, setDeletAdvert] = useState(false);

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

  const handleDeleteAdverts = () => setDeletAdvert(true);
  const handleAbortDelete = () => setDeletAdvert(false);
  const handleConfirmDelete = () => {
    deleteAdvertDetail(advertsId);
    navigate("/adverts");
  };

  return (
    <Page title={"Adverts detail"} {...props}>
      <div>{console.log(advert)}</div>
      <div>
        <img
          height={200}
          width={200}
          className='advertDetailImage'
          src={advert.photo}
          alt='no hay foto'
        ></img>
        <p>Object name {advert.name}</p>
        <p>Object price {advert.price}</p>
        <p>{venta}</p>
        <p>Object Tags {advert.tags}</p>
      </div>

      <div>
        <Button onClick={handleDeleteAdverts}>Delete this advert</Button>
        {deleteAdvert && (
          <div>
            <Button onClick={handleConfirmDelete}>Confirm delete advert</Button>
            <Button onClick={handleAbortDelete}>Cancel delete advert</Button>
          </div>
        )}
      </div>
    </Page>
  );
};

export default AdvertDetail;
