import { useNavigate, useParams } from "react-router-dom";
import Page from "../layout/Page";
import { useEffect, useState } from "react";
import { getAdvertDetail } from "./service";

const AdvertDetail = (props) => {
  const [advert, setAdvert] = useState(null);
  const { advertsId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getAdvertDetail(advertsId)
      .then((advert) => setAdvert(advert))
      .catch((error) => {
        if (error.status === 404) {
          navigate("404");
        }
      });
  }, [advertsId, navigate]);

  return (
    <Page title={"Adverts detail"} {...props}>
      <div>{JSON.stringify(advert)}</div>
    </Page>
  );
};

export default AdvertDetail;
