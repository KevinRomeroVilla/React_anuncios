import Layout from "../layout/Layout";

import { useParams } from "react-router-dom";
import Page from "../layout/Page";

const AdvertDetail = (props) => {
  const { advertsId } = useParams();

  return (
    <Page title={"Adverts detail"} {...props}>
      <div>Adverts Detail {advertsId}</div>
    </Page>
  );
};

export default AdvertDetail;
